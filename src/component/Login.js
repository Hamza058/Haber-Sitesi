import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    function submit(e) {
        username == "admin" && password == "admin" ? alert("azs") : alert("Giriş Bilgilerinizi Kontrol Ediniz")
    }
    return (
        <div>
            <br />
            <div className="container-fluid">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Admin Login</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e) => submit(e)}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <Link to="/admin" className="btn float-right btn-warning" >Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login