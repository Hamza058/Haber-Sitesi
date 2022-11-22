import React from 'react'
import { useEffect, useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";

import Main from './Main';
import Admin from './Admin';
import Write from './Write';
import Signup from './Signup';

function Login() {
    const [items, setItems] = useState()
    useEffect(() => {
        fetch('http://localhost:6556/api/Category')
            .then(res => {
                if (res.ok && res.status === 200) {
                    return res.json()
                }
            })
            .then(data => setItems(data))
            .catch(err => console.log(err))
    }, [])
    const kategori = []
    for (const asd in items) {
        kategori.push(items[asd].categoryName)
    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    function submit(e) {
        username == "admin" && password == "admin" ? alert("azs") : alert("Giriş Bilgilerinizi Kontrol Ediniz")
    }
    let newDate = new Date()
    let date = newDate.getDate().toString();
    let month = (newDate.getMonth() + 1).toString();
    let year = newDate.getFullYear().toString();
    let now = date + "/" + month + "/" + year
    return (
        <div>
            <Routes>
                <Route exact path="/main" element={<Main />} />
                <Route exact path="/write" element={<Write />} />
                <Route exact path="/sign" element={<Signup />} />
                <Route exact path="/admin" element={<Admin />} />
            </Routes>
            <div className="container-fluid d-none d-lg-block">
                <div className="row align-items-center bg-dark px-lg-5">
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-sm bg-dark p-0">
                            <ul className="navbar-nav ml-n2">
                                <li className="nav-item border-right border-secondary">
                                    <a className="nav-link text-body small">{now}</a>
                                </li>
                                <li className="nav-item border-right border-secondary">
                                    <Link to="/write" className="nav-link text-body small" href="#">Write News</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/sign" className="nav-link text-body small" href="#">SignUp</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link text-body small" href="#">Login</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 text-right d-none d-md-block">
                        <nav className="navbar navbar-expand-sm bg-dark p-0">
                            <ul className="navbar-nav ml-auto mr-n2">
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-twitter"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-facebook-f"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-linkedin-in"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-instagram"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-google-plus-g"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-youtube"></small></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="row align-items-center bg-white py-3 px-lg-5">
                    <div className="col-lg-4">
                        <a href="index.html" className="navbar-brand p-0 d-none d-lg-block">
                            <h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-secondary font-weight-normal">News</span></h1>
                        </a>
                    </div>
                    <div className="col-lg-8 text-center text-lg-right">
                        <a href="https://htmlcodex.com"><img id="im1" src="./img/ads.png"></img></a>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
                    <a href="index.html" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-white font-weight-normal">News</span></h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <div className="nav-item dropdown">
                                <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown">Category</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    {
                                        kategori.map((item, key) => (
                                            <a key={key} href="#" className="dropdown-item">{item}</a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="input-group ml-auto d-none d-lg-flex" style={{ width: '100%', maxWidth: '300px' }}>
                            <input type="text" className="form-control border-0" placeholder="Keyword" />
                            <div className="input-group-append">
                                <button className="input-group-text bg-primary text-dark border-0 px-3"><i
                                    className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
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

            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
            <script src="/src/lib/easing/easing.min.js"></script>
            <script src="/src/lib/owlcarousel/owl.carousel.min.js"></script>
        </div>
    )
}

export default Login