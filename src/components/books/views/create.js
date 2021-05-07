import React, {useState, useEffect} from "react";
import {set, useForm} from 'react-hook-form'
import axios from "axios";
const Create = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()

    const [getAuthor, setAuthor] = useState({authors:[]})

    useEffect(async ()=>{
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/author`)
        setAuthor(response.data)
    }, [])
    const onSubmit = async (formData) => {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/books`, formData)
        console.log(response.data)
    }

    return(
        <div className="row text-left">
            <div className="col-6">
                <h2>Add a new book:</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" className="form-control" placeholder="Enter title" name="title" {...register('title', {required:true})}/>
                        {errors.title && <p>Please enter a valid title</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Description">Description:</label>
                        <input type="text" className="form-control" placeholder="Enter description" name="description" {...register('description', {required:true})}/>
                        {errors.description && <p>Please enter a valid description</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Category">Category:</label>
                        <input type="text" className="form-control" placeholder="Enter category" name="category" {...register('category', {required:true})}/>
                        {errors.category && <p>Please enter a valid category</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Author">Author:</label>
                        <input type="text" className="form-control" placeholder="Enter Author" name="authorId" {...register('authorId', {required:true})}/>
                        {errors.author && <p>Please enter a valid author</p>}
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create