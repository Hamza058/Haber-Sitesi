import React from 'react'
import { useEffect, useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Axios from 'axios';

export default function Signup() {
  const [items, setItem] = useState(false)
  useEffect(() => {
    fetch('http://localhost:6556/api/Category')
      .then(res => {
        if (res.ok && res.status === 200) {
          return res.json()
        }
      })
      .then(data => setItem(data))
      .catch(err => console.log(err))
  }, [])
  const kategori = [];
  for (const asd in items) {
    kategori.push(items[asd])
  }

  const [data, setData] = useState({
    name: "",
    surname: "",
    image: "",
    about: "",
    mail: "",
    password: "",
  })

  function submit(e) {
    e.preventDefault();
    Axios.post("http://localhost:6556/api/Writer/", {
      writerName: data.name,
      writerSurName: data.surname,
      writerImage: data.image.name,
      writerAbout: data.about,
      writerMail: data.mail,
      writerPassword: data.password,
    })
      .then(res => {
        console.log(res.data)
      })
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    if (e.target.id == 'image') {
      newdata[e.target.id] = e.target.files[0]
    }
    setData(newdata)
    console.log(newdata)
  }
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
              <Link to="/" className="nav-item nav-link">Ana Sayfa</Link>
              <div className="nav-item dropdown">
                <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown">Kategoriler</a>
                <div className="dropdown-menu rounded-0 m-0">
                  {
                    kategori.map((item, key) => (
                      <a key={key} href="#" className="dropdown-item">{item.categoryName}</a>
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

      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form onSubmit={(e) => submit(e)}>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="name" className="form-control" onChange={(e) => handle(e)} value={data.name} placeholder='Your Name' />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="surname" className="form-control" onChange={(e) => handle(e)} value={data.surname} placeholder='Your Surname' />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-image fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="file" id="image" onChange={(e) => handle(e)} />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-comment fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="about" className="form-control" onChange={(e) => handle(e)} value={data.about} placeholder='Your About' />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="mail" className="form-control" onChange={(e) => handle(e)} value={data.mail} placeholder='Your Mail' />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="password" className="form-control" onChange={(e) => handle(e)} value={data.password} placeholder='Password' />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" className="form-control" placeholder='Repeat your password' />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <input type={'submit'} className="btn btn-primary btn-lg" value={"Register"} />
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
