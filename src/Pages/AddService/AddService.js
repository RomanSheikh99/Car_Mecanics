import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data Added Successfully')
                    reset();
            }
        })
    };
    
    return (
        <div className='addService'>
            <h2>Add A New Service</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Your Name" {...register("name", { required: true, maxLength: 20 })} />
                    <textarea placeholder='Type some description' {...register("description")} />
                    <input placeholder='Your Salary' type="number" {...register("price")} />
                    <input {...register("img")} placeholder='Insert Image URL' />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;