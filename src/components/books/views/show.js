import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

import '../books.css'
import axios from "axios";
const Show = () => {
    const [getBook, setBook] = useState({grabbedBook:{}})
    const {id} = useParams();
    useEffect(async ()=>{
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/books/${id}`)
        setBook(response.data)
    }, [])
    return (
        <div class="row">
            <div class="col-6">
                <img class="bookImg" src="https://www.ups.com/assets/resources/images/knowledge-center/934x495/m10-934x495-hero-main-A-guide-to-shipping-books.jpg" alt="image"/>
            </div>
            <div class="col-6">
                <h2>{getBook.grabbedBook.title}</h2>
                <h3>Written by - {getBook.grabbedBook.authorId}</h3>
                <h4>category: {getBook.grabbedBook.category}</h4>
                <h5>{getBook.grabbedBook.description}</h5>
            </div>
        </div>
    )
}

export default Show