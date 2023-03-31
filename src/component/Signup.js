import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default function Signup() {
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
    axios.post("http://localhost:6556/api/Writer/", {
      writerName: data.name,
      writerSurName: data.surname,
      writerImage: data.image.name,
      writerAbout: data.about,
      writerMail: data.mail,
      writerPassword: data.password,
    })
      .then(res => {
        console.log(res.data)
        setData({
          name: "",
          surname: "",
          image: "",
          about: "",
          mail: "",
          password: "",
        })
        swal({
          title: "Kayıt Olundu!",
          icon: "success",
        });
      })
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    if (e.target.id == 'image') {
      newdata[e.target.id] = e.target.files[0]
    }
    setData(newdata)
  }
  return (
    <div>
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
