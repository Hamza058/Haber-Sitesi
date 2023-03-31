import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import swal from 'sweetalert';

function Write() {
  const [category, setCategories] = useState([])
  const [writer, setWriters] = useState([])

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    try {
      const { data: category } = await axios('http://localhost:6556/api/Category')
      setCategories(category)
      const { data: writer } = await axios('http://localhost:6556/api/Writer')
      setWriters(writer)
    }
    catch (error) {
      console.log("error", error);
    }
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
    writer.map((element, index) => {
      if (element.writerMail === data.username && element.writerPassword === data.password) {
        axios.post("http://localhost:6556/api/Content/", {
          writerValue: data.username,
          categoryValue: data.category,
          headingValue: data.heading,
          contentValue: data.content,
          contentImage: data.image
        })
          .then(res => {
            console.log(res.data)
            swal({
              title: "Haber Eklendi!",
              icon: "success",
            });
            setData({
              username: "",
              password: "",
              category: "",
              heading: "",
              content: "",
              image: "",
            })
          })
      }
      else{
        swal({
          title: "Lütfen Önce Kayıt Olunuz!",
          icon: "warning",
        });
        setData({
          username: "",
          password: "",
          category: "",
          heading: "",
          content: "",
          image: "",
        })
      }
    })
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  return (
    <>
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
                  <option defaultValue={""}>Kategoriler</option>
                    {
                      category.map((item, key) => (
                        <option key={key} value={item.categoryName}>{item.categoryName}</option>
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
                  <input className="form-control" id='image' type="text" onChange={e => handle(e)} value={data.image} placeholder="Image URL" required />
                </div>

                <div className="form-group">
                  <input type="submit" value="Add News" className="btn btn-warning float-right login_btn" />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<Link to="/sign">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Write;