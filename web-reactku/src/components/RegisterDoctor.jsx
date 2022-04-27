import React from "react";
import '../styles/registerDoctorStyle.css'

const RegisterDoctor = () => {
    return (
        <div className="registerDoctor">
            <form className="form_register" action="">
                <label className="text" htmlFor="">Username</label><br />
                <input type="text" /><br />
                <label className="text" htmlFor="">Password</label><br />
                <input type="password" /><br />
                <label className="text" htmlFor="">Nama</label><br />
                <input type="text" /><br />
                {/* <label htmlFor="Spesialis"></label>
                <input type="text" /> */}
                <button className="button btn btn-primary" type="button">Register</button>
            </form>
        </div>
    )
}

export default RegisterDoctor