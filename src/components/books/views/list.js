import React, {useState, useEffect} from "react";
import axios from "axios";
import BookCard from "../components/bookCard";

const List = () => {
    const [getBooks, setBooks] = useState({books: []})

    useEffect(async ()=>{
       // console.log("you are ready to make api calls")
     const response= await axios.get(`${process.env.REACT_APP_BACKEND_API}/books/`)
        setBooks(response.data)
    }, [])
    //console.log("It worked")
    return(
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>total number of books {getBooks.books.length} </h2>
                </div>
                <BookCard books={getBooks.books}/>
            </div>
        </div>
    )
}

export default List