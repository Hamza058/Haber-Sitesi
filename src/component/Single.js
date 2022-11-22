import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes, Link } from "react-router-dom";

function Single(props) {
    const [items, setItem] = useState(false)
    const location = useLocation()
    const data = location.state?.data
    const link = 'http://localhost:6556/api/Content/'+data
    useEffect(() => {
        fetch(link)
            .then(res => {
                if (res.ok && res.status === 200) {
                    return res.json()
                }
            })
            .then(data => setItem(data))
            .catch(err => console.log(err))
    }, [])
    const [category, setCategory] = useState(false)
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
    const categ = []
    for (const asd in category) {
        categ.push(category[asd].categoryName)
    }
    let newDate = new Date()
    let date = newDate.getDate().toString();
    let month = (newDate.getMonth() + 1).toString();
    let year = newDate.getFullYear().toString();
    let now = date + "/" + month + "/" + year
    return (
        <>
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
                    <h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-white font-weight-normal">News</span></h1>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/" className="nav-item nav-link">Ana Sayfa</Link>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Kategoriler</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    {
                                        categ.map((item, key) => (
                                            <a href="#" key={key} className="dropdown-item">{item}</a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <br />
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="position-relative mb-3">
                                <img className="img-fluid w-100" src={items["resim"]} style={{ objectFit: 'cover' }} />
                                <div className="bg-white border border-top-0 p-4 pb-5">
                                    <div className="mb-3 pb-3">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                            href="">{items["kategori"]}</a>
                                        <a className="text-body" href="">{items["tarih"]}</a>
                                    </div>
                                    <h1 className="mb-3 text-secondary text-uppercase font-weight-bold">
                                        {items["baslik"]}
                                    </h1>
                                    <p>{items["aciklama"]}</p>
                                </div>
                                <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle mr-2" src={items["yazarResmi"]} width="25" height="25" alt="" />
                                        <span>{items["yazar"]}</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="ml-3"><i className="far fa-eye mr-2"></i>12345</span>
                                        <span className="ml-3"><i className="far fa-comment mr-2"></i>123</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="mb-3">
                                <div className="section-title mb-0">
                                    <h4 className="m-0 text-uppercase font-weight-bold">Follow Us</h4>
                                </div>
                                <div className="bg-white border border-top-0 p-3">
                                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#39569E' }}>
                                        <i className="fab fa-facebook-f text-center py-4 mr-3" style={{ width: '65px', background: 'rgba(0, 0, 0, .2)' }}></i>
                                        <span className="font-weight-medium">12,345 Fans</span>
                                    </a>
                                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#52AAF4' }}>
                                        <i className="fab fa-twitter text-center py-4 mr-3" style={{ width: '65px', background: 'rgba(0, 0, 0, .2)' }}></i>
                                        <span className="font-weight-medium">12,345 Followers</span>
                                    </a>
                                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#0185AE' }}>
                                        <i className="fab fa-linkedin-in text-center py-4 mr-3" style={{ width: '65px', background: 'rgba(0, 0, 0, .2)' }}></i>
                                        <span className="font-weight-medium">12,345 Connects</span>
                                    </a>
                                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#C8359D' }}>
                                        <i className="fab fa-instagram text-center py-4 mr-3" style={{ width: '65px', background: 'rgba(0, 0, 0, .2)' }}></i>
                                        <span className="font-weight-medium">12,345 Followers</span>
                                    </a>
                                    <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{ background: '#DC472E' }}>
                                        <i className="fab fa-youtube text-center py-4 mr-3" style={{ width: '65px', background: 'rgba(0, 0, 0, .2)' }}></i>
                                        <span className="font-weight-medium">12,345 Subscribers</span>
                                    </a>
                                    <a href="" className="d-block w-100 text-white text-decoration-none" style={{ background: '#055570' }}>
                                        <i className="fab fa-vimeo-v text-center py-4 mr-3" style={{ width: '65px', background: 'rgba(0, 0, 0, .2)' }}></i>
                                        <span className="font-weight-medium">12,345 Followers</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
                <div className="row py-4">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="mb-4 text-white text-uppercase font-weight-bold">Get In Touch</h5>
                        <p className="font-weight-medium"><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                        <p className="font-weight-medium"><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p className="font-weight-medium"><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                        <h6 className="mt-4 mb-3 text-white text-uppercase font-weight-bold">Follow Us</h6>
                        <div className="d-flex justify-content-start">
                            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-lg btn-secondary btn-lg-square" href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="mb-4 text-white text-uppercase font-weight-bold">Popular News</h5>
                        <div className="mb-3">
                            <div className="mb-2">
                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                            </div>
                            <a className="small text-body text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                        </div>
                        <div className="mb-3">
                            <div className="mb-2">
                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                            </div>
                            <a className="small text-body text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                        </div>
                        <div className="">
                            <div className="mb-2">
                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                            </div>
                            <a className="small text-body text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="mb-4 text-white text-uppercase font-weight-bold">Categories</h5>
                        <div className="m-n1">
                            <a href="" className="btn btn-sm btn-secondary m-1">Politics</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Business</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Corporate</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Business</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Health</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Education</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Science</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Business</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Foods</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Entertainment</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Travel</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Lifestyle</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Politics</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Business</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Corporate</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Business</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Health</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Education</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Science</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Business</a>
                            <a href="" className="btn btn-sm btn-secondary m-1">Foods</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="mb-4 text-white text-uppercase font-weight-bold">Flickr Photos</h5>
                        <div className="row">
                            <div className="col-4 mb-3">
                                <a href=""><img className="w-100" src="img/news-110x110-1.jpg" alt="" /></a>
                            </div>
                            <div className="col-4 mb-3">
                                <a href=""><img className="w-100" src="img/news-110x110-2.jpg" alt="" /></a>
                            </div>
                            <div className="col-4 mb-3">
                                <a href=""><img className="w-100" src="img/news-110x110-3.jpg" alt="" /></a>
                            </div>
                            <div className="col-4 mb-3">
                                <a href=""><img className="w-100" src="img/news-110x110-4.jpg" alt="" /></a>
                            </div>
                            <div className="col-4 mb-3">
                                <a href=""><img className="w-100" src="img/news-110x110-5.jpg" alt="" /></a>
                            </div>
                            <div className="col-4 mb-3">
                                <a href=""><img className="w-100" src="img/news-110x110-1.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-4 px-sm-3 px-md-5" style={{ background: '#111111' }}>
                <p className="m-0 text-center">&copy; <a href="#">Your Site Name</a>. All Rights Reserved.

                    Design by <a href="https://htmlcodex.com">HTML Codex</a></p>
            </div>


            <a href="#" className="btn btn-primary btn-square back-to-top"><i className="fa fa-arrow-up"></i></a>

            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
            <script src="/src/lib/easing/easing.min.js"></script>
            <script src="/src/lib/owlcarousel/owl.carousel.min.js"></script>
        </>
    )
}
export default Single;