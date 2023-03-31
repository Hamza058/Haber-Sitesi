import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:6556/api/Category')
            .then(res => {
                if (res.ok && res.status === 200) {
                    return res.json()
                }
            })
            .then(data => setCategory(data))
            .catch(err => console.log(err))
    }, [])
    let newDate = new Date()
    let date = newDate.getDate().toString();
    let month = (newDate.getMonth() + 1).toString();
    let year = newDate.getFullYear().toString();
    let now = date + "/" + month + "/" + year
    return (
        <div>
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
                </div>
            </div>

            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
                    <a href="index.html" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-white font-weight-normal">News</span></h1>
                    </a>
                    <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="index.html" className="nav-item nav-link">Ana Sayfa</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Kategoriler</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    {
                                        category.map((a, i) => (
                                            <a href="#" key={i} className="dropdown-item">{a.categoryName}</a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header