import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Form.css';

interface FormData {
    name: string;
    phoneNumber: string;
    email: string;
}

function Form(){
    const navigateTo = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phoneNumber: '',
        email: '',
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Save data to localStorage
    localStorage.setItem('userDetails', JSON.stringify(formData));
    // Route user to the second page
    navigateTo('/PostTable');
  };

 

    return (
        <>
        <div className='container' >
            <form onSubmit={handleSubmit} className='form-page' method='post'>
                <TextField required label="Name" name="name" value={formData.name} onChange={handleChange} variant="outlined" />
                <TextField required label="Phone number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} variant='outlined'/>
                <TextField required label="Email" name='email' type="email" value={formData.email} onChange={handleChange} variant="outlined" />
                
                <Button type="submit" variant="contained" color="primary">
                 Submit
                </Button>
            </form>
        </div>
        </>
    )
}

export default Form;