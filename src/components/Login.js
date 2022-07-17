import { GoogleLogin } from 'react-google-login'

const clientId = '900574423878-1mvut7id0n76v7g9m7iq025gfs33nnna.apps.googleusercontent.com'

function Login() {

    const onSuccess = (res) => {
        console.log("Login SUCCESS! current user:", res.profileObj)
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res:", res)
    }

    return (
        <div id='signinButton'>
            <GoogleLogin
                clientId={clientId}
                buttonText={null}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;