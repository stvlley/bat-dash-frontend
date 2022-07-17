import { GoogleLogout } from "react-google-login";

const clientId = '900574423878-1mvut7id0n76v7g9m7iq025gfs33nnna.apps.googleusercontent.com'

function Logout () {

    const onSuccess = () => {
        console.log("LOGOUT SUCCESSFUL!!!")
    }
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;