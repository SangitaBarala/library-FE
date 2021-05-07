import React from "react";

const BookCard = (prop) =>{
    if(prop.books.length > 0){
        return(
            <div class="row">
                {prop.books.map(book=>{
                    return(
                        <div className="col-3">
                            <div className="card">
                                <img className="card-img-top"
                                     src="https://www.ups.com/assets/resources/images/knowledge-center/934x495/m10-934x495-hero-main-A-guide-to-shipping-books.jpg"
                                     alt="Card image"/>
                                <div className="card-body">
                                    <h4 className="card-title">{book.title}</h4>
                                    <p className="card-text">{book.description}</p>
                                    <a href={'/books/'+book._id+'/show'} className="btn btn-primary">Buy It</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }else {
        return (
            <p>No book found</p>
        )
    }

}
export default BookCard