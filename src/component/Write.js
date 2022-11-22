import Axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";

function Write() {
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

  const [writer, setWriter] = useState()
  useEffect(() => {
    fetch('http://localhost:6556/api/Writer')
      .then(res => {
        if (res.ok && res.status === 200) {
          return res.json()
        }
      })
      .then(data => setWriter(data))
      .catch(err => console.log(err))
  }, [])


  const yazar = {
    mail: [],
    password: []
  }
  for (const asd in writer) {
    yazar.mail.push(writer[asd].writerMail)
    yazar.password.push(writer[asd].writerPassword)
  }

  const [data, setData] = useState({
    username: "",
    password: "",
    category: "",
    heading: "",
    content: "",
    image: "",
  })
  function submit(e) {
    e.preventDefault();
    for (let index = 0; index < yazar.mail.length; index++) {
      if (yazar.mail[index] == data.username && yazar.password[index] == data.password) {
        Axios.post("http://localhost:6556/api/Content/", {
          writerMail: data.username,
          categoryName: data.category,
          headingName: data.heading,
          contentValue: data.content,
          contentImage: data.image.name
        })
          .then(res => {
            console.log(res.data)
          })
      }
    }
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

  const kategori = []
  for (const asd in items) {
    kategori.push(items[asd].categoryName)
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
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Kategoriler</a>
                <div className="dropdown-menu rounded-0 m-0">
                  {
                    kategori.map((item, key) => (
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
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Write News</h3>
            </div>
            <div className="card-body">
              <form onSubmit={(e) => submit(e)}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" id='username' className="form-control" onChange={(e) => handle(e)} value={data.username} placeholder="username" required />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" id='password' className="form-control" onChange={(e) => handle(e)} value={data.password} placeholder="password" required />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-list"></i></span>
                  </div>
                  <select id="category" onChange={(e) => handle(e)} className="form-control">
                    {
                      kategori.map((item, key) => (
                        <option key={key} value={item}>{item}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-tag"></i></span>
                  </div>
                  <input type="text" className="form-control" id='heading' onChange={(e) => handle(e)} value={data.heading} placeholder="Heading" required />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-pen-nib"></i></span>
                  </div>
                  <textarea className="form-control" id='content' onChange={(e) => handle(e)} value={data.content} placeholder="Content" />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-image"></i></span>
                  </div>
                  <input className="ml-1" id='image' type="file" onChange={e => handle(e)} required />
                </div>

                <div className="form-group">
                  <input type="submit" value="Add News" className="btn btn-warning float-right login_btn" />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<a href="sign.html">Sign Up</a>
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
                <a href=""><img id="im11" className="w-100" src="./img/news1.jpg"></img></a>
              </div>
              <div className="col-4 mb-3">
                <a href=""><img id="im12" className="w-100" src="./img/news2.jpg"></img></a>
              </div>
              <div className="col-4 mb-3">
                <a href=""><img id="im13" className="w-100" src="./img/news3.jpg"></img></a>
              </div>
              <div className="col-4 mb-3">
                <a href=""><img id="im14" className="w-100" src="./img/news4.jpg"></img></a>
              </div>
              <div className="col-4 mb-3">
                <a href=""><img id="im15" className="w-100" src="./img/news5.jpg"></img></a>
              </div>
              <div className="col-4 mb-3">
                <a href=""><img id="im16" className="w-100" src="./img/news1.jpg"></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-4 px-sm-3 px-md-5" style={{ background: "#111111" }}>
        <p className="m-0 text-center">&copy; <a href="#">Your Site Name</a>. All Rights Reserved.

          Design by <a href="https://htmlcodex.com">HTML Codex</a></p>
      </div>
      <a href="#" className="btn btn-primary btn-square back-to-top"><i className="fa fa-arrow-up"></i></a>

      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      <script src="/src/lib/easing/easing.min.js"></script>
      <script src="/src/lib/owlcarousel/owl.carousel.min.js"></script>
    </>
  );
}

export default Write;