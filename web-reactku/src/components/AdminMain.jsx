import React from "react";
import { Link } from "react-router-dom";

const AdminMain = () => {
    return (
        <ul>
            <li><Link to="/DataDoctor">Data Dokter</Link></li>
            <li><Link to="/DataUser">Data User</Link></li>
        </ul>
    )
}

export default AdminMain