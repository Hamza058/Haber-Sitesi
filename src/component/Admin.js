import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
    const [category, setCategory] = useState([])
    const [heading, setHeading] = useState([])
    const [writer, setWriter] = useState([])
    const [content, setContent] = useState([])

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        try {
            const value = await axios('http://localhost:6556/api/Admin')
            setCategory(value.data.kategori)
            setHeading(value.data.baslik)
            setWriter(value.data.yazar)
            setContent(value.data.icerik)
        }
        catch (error) {
            console.log("error", error);
        }
    }

    const [categoryname, setCategoryname] = useState("")
    const [url, setUrl] = useState()

    function submit(e) {
        if (e == "add") {
            axios.post("http://localhost:6556/api/Category/", {
                categoryName: categoryname,
            })
                .then(res => {
                    console.log(res.data)
                })
        }
        if (e == "status") {
            axios.put(url)
                .then(res => {
                    console.log(res.data)
                })
        }
    }

    return (
        <>
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
                            category.map((item, key) => (
                                <tr key={key}>
                                    <td>{item.categoryID}</td>
                                    <td>{item.categoryName}</td>
                                    <td>{item.categoryStatus.toString()}</td>
                                    <td>
                                        <input type={'submit'} disabled={item.categoryStatus == true} value="Aktif" className='btn btn-success btn-sm mr-2' onClick={() => setUrl("http://localhost:6556/api/Category/" + item.categoryID)} />
                                        <input type={'submit'} disabled={item.categoryStatus == false} value="Pasif" className='btn btn-danger btn-sm' onClick={() => setUrl("http://localhost:6556/api/Category/" + item.categoryID)} />
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
                            <input id='name' className='form-control' type={'text'} onChange={e => setCategoryname(e.target.value)} value={categoryname} placeholder='Category Name' />
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
                            heading.map((item, key) => (
                                <tr key={key}>
                                    <td>{item.headingID}</td>
                                    <td>{item.headingName}</td>
                                    <td>{item.headingDate.toString().substring(0, 10)}</td>
                                    <td>{item.categoryID}</td>
                                    <td>{item.writerID}</td>
                                    <td>{item.headingStatus.toString()}</td>
                                    <td>
                                        <input type={'submit'} value="Aktif" disabled={item.headingStatus == true} className='btn btn-success btn-sm mr-2' onClick={() => setUrl("http://localhost:6556/api/Heading/" + item.headingID)} />
                                        <input type={'submit'} value="Pasif" disabled={item.headingStatus == false} className='btn btn-danger btn-sm' onClick={() => setUrl("http://localhost:6556/api/Heading/" + item.headingID)} />
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
                            writer.map((item, key) => (
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
                                        <input type={'submit'} value="Aktif" disabled={item.writerStatus == true} className='btn btn-success btn-sm mr-2' onClick={() => setUrl("http://localhost:6556/api/Writer/" + item.writerID)} />
                                        <input type={'submit'} value="Pasif" disabled={item.writerStatus == false} className='btn btn-danger btn-sm' onClick={() => setUrl("http://localhost:6556/api/Writer/" + item.writerID)} />
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
                        content.map((item, key) => (
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
        </>
    )
}

export default Admin