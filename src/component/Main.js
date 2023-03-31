import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';

function Main() {
    const [items, setItems] = useState([])

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        try {
            const { data: items } = await axios('http://localhost:6556/api/Content')
            setItems(items)
        }
        catch (error) {
            console.log("error", error);
        }
    }

    return (
        <div>
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
                                <div className='col-12'>
                                    <div className='row'>
                                        {
                                            items.map((element, index) => (
                                                <div className="col-lg-6" key={index}>
                                                    <div className="position-relative mb-3">
                                                        <img className="img-fluid w-100" src={element.contentImage} style={{ objectFit: 'cover', height: 200 }} />
                                                        <div className="bg-white border border-top-0 p-4">
                                                            <div className="mb-2">
                                                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                                    href="">{element.heading.category.categoryName}</a>
                                                                <a className="text-body" href=""><small>{element.contentDate.substring(0, 10)}</small></a>
                                                            </div>
                                                            <Link to="/single" state={{ data: element.contentID }} className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold">
                                                                {element.heading.headingName.substring(0, 20)}
                                                            </Link>
                                                            <p className="m-0">{element.contentValue.substring(0, 33)}...</p>
                                                        </div>
                                                        <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                                                            <div className="d-flex align-items-center">
                                                                <img className="rounded-circle mr-2" src={element.heading.writer.writerImage} width="25" height="25" alt="" />
                                                                <small>{element.heading.writer.writerName + " " + element.heading.writer.writerSurName}</small>
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
                                    </div>
                                </div>

                                {
                                    items.slice(0, 4).map((element, index) => (
                                        <div key={index} className="col-lg-6">
                                            <div className="d-flex align-items-center bg-white mb-3 p-1" style={{ height: '110px' }}>
                                                <img className="img-fluid" src={element.contentImage} style={{ width: 90, height: 50 }} alt="" />
                                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                    <div className="mb-2">
                                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">{element.heading.category.categoryName}</a>
                                                        <a className="text-body" href=""><small>{element.contentDate.substring(0, 10)}</small></a>
                                                    </div>
                                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href={"/single.html/" + element.contentID}>{element.heading.headingName.substring(0, 15)}...</a>
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
                                        items.slice(0, 4).map((element, index) => (
                                            <div key={index}>
                                                <div className="d-flex align-items-center bg-white mb-3" style={{ height: '110px' }}>
                                                    <img className="img-fluid m-1" src={element.contentImage} width={110} alt="" />
                                                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                        <div className="mb-2">
                                                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">{element.heading.category.categoryName}</a>
                                                            <a className="text-body" href=""><small>{element.contentDate.substring(0, 10)}</small></a>
                                                        </div>
                                                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href={"/single.html/" + element.contentID}>{element.heading.headingName.substring(0, 33)}...</a>
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
        </div>
    )
}

export default Main