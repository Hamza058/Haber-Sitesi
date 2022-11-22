import React from 'react'
import { useEffect, useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Write from './Write';
import Login from './Login';
import Signup from './Signup';
import Single from './Single';

function Main() {
    const [items, setItems] = useState(false)
    useEffect(() => {
        fetch('http://localhost:6556/api/Content')
            .then(res => {
                if (res.ok && res.status === 200) {
                    return res.json()
                }
            })
            .then(data => setItems(data))
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

    const icerik = [];
    const resim = [];
    const kategori = [];
    const baslik = [];
    const yazar = [];
    const yazarResmi = [];
    const tarih = [];
    const id = [];
    const values = [id, resim, kategori, tarih, baslik, icerik, yazarResmi, yazar]
    for (let i = 0; i < 7; i++) {
        for (const asd in items["icerik"]) {
            values[i].push(Object.values(items)[i][asd])
        }
    }
    let newDate = new Date()
    let date = newDate.getDate().toString();
    let month = (newDate.getMonth() + 1).toString();
    let year = newDate.getFullYear().toString();
    let now = date + "/" + month + "/" + year

    return (
        <div>
            <Routes>
                <Route exact path="/write" element={<Write />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/sign" element={<Signup />} />
                <Route exact path="/single" element={<Single />} />
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
                            <a href="index.html" className="nav-item nav-link">Ana Sayfa</a>
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
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-title">
                                        <h4 className="m-0 text-uppercase font-weight-bold">Haberler</h4>
                                    </div>
                                </div>
                                {
                                    resim.map((element, index) => (
                                        <div className="col-lg-6" key={index}>
                                            <div className="position-relative mb-3">
                                                <img className="img-fluid w-100" src={element} style={{ objectFit: 'cover' }} />
                                                <div className="bg-white border border-top-0 p-4">
                                                    <div className="mb-2">
                                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                            href="">{kategori[index]}</a>
                                                        <a className="text-body" href=""><small>{tarih[index]}</small></a>
                                                    </div>
                                                    <Link to="/single" state={{ data: id[index] }} className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold">
                                                        {baslik[index].substring(0,20)}
                                                    </Link>
                                                    <p className="m-0">{icerik[index].substring(0, 33)}...</p>
                                                </div>
                                                <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                                                    <div className="d-flex align-items-center">
                                                        <img className="rounded-circle mr-2" src={yazarResmi[index]} width="25" height="25" alt="" />
                                                        <small>{yazar[index]}</small>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                                        <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                                {
                                    resim.map((element, index) => (
                                        <div key={index} className="col-lg-6">
                                            <div className="d-flex align-items-center bg-white mb-3" style={{ height: '110px' }}>
                                                <img className="img-fluid m-1" src={element} width={110} alt="" />
                                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                    <div className="mb-2">
                                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">{kategori[index]}</a>
                                                        <a className="text-body" href=""><small>{tarih[index]}</small></a>
                                                    </div>
                                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href={"/single.html/" + id[index]}>{baslik[index].substring(0, 15)}...</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="col-lg-12">
                                    <div className="row news-lg mx-0 mb-3">
                                        <div className="col-md-6 h-100 px-0">
                                            <img className="img-fluid h-100" src="img/news-700x435-5.jpg" style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                                            <div className="mt-auto p-4">
                                                <div className="mb-2">
                                                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                        href="">asd</a>
                                                    <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                                <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                                    rebum clita rebum dolor stet amet justo</p>
                                            </div>
                                            <div className="d-flex justify-content-between bg-white border-top mt-auto p-4">
                                                <div className="d-flex align-items-center">
                                                    <img className="rounded-circle mr-2" src="img/user.jpg" width="25" height="25" alt="" />
                                                    <small>John Doe</small>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                                    <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="mb-3">
                                <div className="section-title mb-0">
                                    <h4 className="m-0 text-uppercase font-weight-bold">Bizi Takip Et</h4>
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

                            <div className="mb-3">
                                <div className="section-title mb-0">
                                    <h4 className="m-0 text-uppercase font-weight-bold">Reklamcılık</h4>
                                </div>
                                <div className="bg-white text-center border border-top-0 p-3">
                                    <a href=""><img className="img-fluid" src="img/news-800x500-2.jpg" alt="" /></a>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="section-title mb-0">
                                    <h4 className="m-0 text-uppercase font-weight-bold">Yeni Haberler</h4>
                                </div>
                                <div className="bg-white border border-top-0 p-3">
                                    {
                                        resim.map((element, index) => (
                                            <div key={index}>
                                                <div className="d-flex align-items-center bg-white mb-3" style={{ height: '110px' }}>
                                                    <img className="img-fluid" src={element} width={110} alt="" />
                                                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                        <div className="mb-2">
                                                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">{kategori[index]}</a>
                                                            <a className="text-body" href=""><small>{tarih[index]}</small></a>
                                                        </div>
                                                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href={"/single.html/" + id[index]}>{baslik[index].substring(0, 33)}...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
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
        </div>
    )
}

export default Main