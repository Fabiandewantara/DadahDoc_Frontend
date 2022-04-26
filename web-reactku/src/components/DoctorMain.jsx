import React from "react";
import { Link } from "react-router-dom";

const DoctorMain = () => {
    return (
        <ul>
            <li><Link to="/ScheduleDoctor">Doctor Schedule</Link></li>
        </ul>
    )
}

export default DoctorMain