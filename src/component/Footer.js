import React from 'react'
import { useEffect, useState } from 'react';

function Footer() {
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

    const [items, setItems] = useState([])
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
    return (
        <div>
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
                            {
                                category.map((a, i) => (
                                    <a href="#" key={i} className="btn btn-sm btn-secondary m-1">{a.categoryName}</a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="mb-4 text-white text-uppercase font-weight-bold">Flickr Photos</h5>
                        <div className="row">
                            {
                                items.map((a, i) =>
                                    <div className="col-4 mb-3" key={i}>
                                        <a href=""><img className="w-100" src={a.contentImage} alt="" /></a>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-4 px-sm-3 px-md-5" style={{ background: '#111111' }}>
                <p className="m-0 text-center">&copy; <a href="#">Your Site Name</a>. All Rights Reserved.
                    Design by <a href="https://htmlcodex.com">Hamza Kılıç</a></p>
            </div>
        </div>
    )
}

export default Footer