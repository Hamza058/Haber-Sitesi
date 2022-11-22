import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';

function Admin() {
    const [items, setItem] = useState(false)
    useEffect(() => {
        fetch('http://localhost:6556/api/Admin')
            .then(res => {
                if (res.ok && res.status === 200) {
                    return res.json()
                }
            })
            .then(data => setItem(data))
            .catch(err => console.log(err))
    }, [])

    const [categoryname, setCategoryname] = useState({ name: "", })
    const [url, setUrl] = useState(false)

    function submit(e) {
        if (e == "add") {
            Axios.post("http://localhost:6556/api/Category/", {
                categoryName: categoryname.name,
            })
                .then(res => {
                    console.log(res.data)
                })
        }
        if (e == "status") {
            Axios.put(url)
                .then(res => {
                    console.log(res.data)
                })
        }
    }
    function handle(e) {
        const newdata = { ...categoryname }
        newdata[e.target.id] = e.target.value
        setCategoryname(newdata)
        console.log(newdata)
    }

    const icerik = [];
    const kategori = [];
    const baslik = [];
    const yazar = [];
    for (const asd in items.kategori) {
        kategori.push(items.kategori[asd])
    }
    for (const asd in items.icerik) {
        icerik.push(items.icerik[asd])
    }
    for (const asd in items.baslik) {
        baslik.push(items.baslik[asd])
    }
    for (const asd in items.yazar) {
        yazar.push(items.yazar[asd])
    }
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let now=date+month+year
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
                                    <a className="nav-link text-body small" href="write.html">Write News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body small" href="sign.html">SignUp</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body small" href="login.html">Login</a>
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
                            <a href="index.html" className="nav-item nav-link">Home</a>
                            <div className="nav-item dropdown">
                                <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown">Category</a>
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

            <br />

            <h1>Category</h1>
            <form onSubmit={(e) => submit("status")}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Category Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            kategori.map((item, key) => (
                                <tr key={key}>
                                    <td>{item.categoryID}</td>
                                    <td>{item.categoryName}</td>
                                    <td>{item.categoryStatus.toString()}</td>
                                    <td>
                                        {console.log(item.categoryStatus.toString())}
                                        <input type={'submit'} disabled={item.categoryStatus==true} value="Aktif" className='btn btn-success btn-sm mr-2' onClick={() => setUrl("http://localhost:6556/api/Category/" + item.categoryID)} />
                                        <input type={'submit'} disabled={item.categoryStatus==false} value="Pasif" className='btn btn-danger btn-sm' onClick={() => setUrl("http://localhost:6556/api/Category/" + item.categoryID)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </form>
            <hr />
            <div className='container'>
                <form onSubmit={(e) => submit("add")}>
                    <div className='row'>
                        <h3>Category Add</h3>
                        <div className='col-5'>
                            <input id='name' className='form-control' type={'text'} onChange={(e) => handle(e)} value={categoryname.name} placeholder='Category Name' />
                        </div>
                        <div className='col-2'>
                            <input type={'submit'} className='btn btn-success form-control' value={'Ekle'} />
                        </div>
                    </div>
                </form>
            </div>
            <hr />

            <br />
            <h1>Heading</h1>
            <form onSubmit={(e) => submit("status")}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Heading Name</th>
                            <th scope="col">Heading Date</th>
                            <th scope="col">Category ID</th>
                            <th scope="col">Writer ID</th>
                            <th scope="col">Heading Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            baslik.map((item, key) => (
                                <tr key={key}>
                                    <td>{item.headingID}</td>
                                    <td>{item.headingName}</td>
                                    <td>{item.headingDate.toString().substring(0, 10)}</td>
                                    <td>{item.categoryID}</td>
                                    <td>{item.writerID}</td>
                                    <td>{item.headingStatus.toString()}</td>
                                    <td>
                                        <input type={'submit'} value="Aktif" disabled={item.headingStatus==true} className='btn btn-success btn-sm mr-2' onClick={() => setUrl("http://localhost:6556/api/Heading/" + item.headingID)} />
                                        <input type={'submit'} value="Pasif" disabled={item.headingStatus==false} className='btn btn-danger btn-sm' onClick={() => setUrl("http://localhost:6556/api/Heading/" + item.headingID)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </form>

            <br />
            <h1>Writer</h1>
            <form onSubmit={(e) => submit("status")}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Writer Name</th>
                            <th scope="col">Writer Surname</th>
                            <th scope="col">Writer Image</th>
                            <th scope="col">Writer Mail</th>
                            <th scope="col">Writer Password</th>
                            <th scope="col">Writer About</th>
                            <th scope="col">Writer Statu</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            yazar.map((item, key) => (
                                <tr key={key}>
                                    <td>{item.writerID}</td>
                                    <td>{item.writerName}</td>
                                    <td>{item.writerSurName}</td>
                                    <td>{item.writerImage.substring(0, 15)}</td>
                                    <td>{item.writerMail}</td>
                                    <td>{item.writerPassword}</td>
                                    <td>{item.writerAbout}</td>
                                    <td>{item.writerStatus.toString()}</td>
                                    <td>
                                        <input type={'submit'} value="Aktif" disabled={item.writerStatus==true} className='btn btn-success btn-sm mr-2' onClick={() => setUrl("http://localhost:6556/api/Writer/" + item.writerID)} />
                                        <input type={'submit'} value="Pasif" disabled={item.writerStatus==false} className='btn btn-danger btn-sm' onClick={() => setUrl("http://localhost:6556/api/Writer/" + item.writerID)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </form>

            <br />
            <h1>Content</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Content Value</th>
                        <th scope="col">Content Image</th>
                        <th scope="col">Content Date</th>
                        <th scope="col">Writer ID</th>
                        <th scope="col">Heading ID</th>
                        <th scope="col">Content Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        icerik.map((item, key) => (
                            <tr key={key}>
                                <td>{item.contentID}</td>
                                <td>{item.contentValue.substring(0, 20)}</td>
                                <td>{item.contentImage.substring(0, 15)}</td>
                                <td>{item.contentDate.toString().substring(0, 10)}</td>
                                <td>{item.writerID}</td>
                                <td>{item.headingID}</td>
                                <td>{item.contentStatus.toString()}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Admin