import React from "react";

const registerDoctor = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="">Username</label>
                <input type="text" />
                <label htmlFor="">Password</label>
                <input type="password" />
                <label htmlFor="">Nama</label>
                <input type="text" />
                {/* <label htmlFor="Spesialis"></label>
                <input type="text" /> */}
                <button type="button">Register</button>
            </form>
        </div>
    )
}

export default registerDoctor