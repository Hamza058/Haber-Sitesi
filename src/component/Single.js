import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Single(props) {
    const [items, setItems] = useState([])
    const location = useLocation()
    const data = location.state?.data
    const link = 'http://localhost:6556/api/Content/' + data
    /* useEffect(() => {
         fetch(link)
             .then(res => {
                 if (res.ok && res.status === 200) {
                     return res.json()
                 }
             })
             .then(data => setItem(data))
             .catch(err => console.log(err))
     }, [])*/

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        try {
            const { data: items } = await axios(`http://localhost:6556/api/Content/${data}`)
            setItems(items)
        }
        catch (error) {
            console.log("error", error);
        }
    }
    return (
        <>
            <br />
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="position-relative mb-3">
                                <img className="img-fluid w-100" src={items.contentImage} style={{ objectFit: 'cover' }} />
                                <div className="bg-white border border-top-0 p-4 pb-5">
                                    <div className="mb-3 pb-3">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                            href="">{items.heading?.category?.categoryName}</a>
                                        <a className="text-body" href="">{items.contentDate?.substring(0, 10)}</a>
                                    </div>
                                    <h1 className="mb-3 text-secondary text-uppercase font-weight-bold">
                                        {items.heading?.headingName}
                                    </h1>
                                    <p>{items.contentValue}</p>
                                </div>
                                <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle mr-2" src={items.heading?.writer?.writerImage} width="25" height="25" alt="" />
                                        <span>{items.heading?.writer?.writerName + " " + items.heading?.writer?.writerSurName}</span>
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
        </>
    )
}
export default Single;