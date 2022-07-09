import React, { useEffect, useState } from 'react'

const Reports = () => {
    const [reports, setReports] = useState([])
    useEffect(() => {
        fetch('https://data.austintexas.gov/resource/fdj4-gpfu.json')
            .then(response => response.json())
            .then(data => setReports(data))
            .catch(err => console.error(err));
    }, [])
    console.log(reports)
    return (
        <nav className='reports-section'>{reports.map((report) => (<div>{report.crime_type}</div>))}</nav>
    )
}

export default Reports