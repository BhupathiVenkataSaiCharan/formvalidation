import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

function Create() {
    let navigate = useNavigate();

    const [image, setImage] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [lineofBusiness, setLineofBusiness] = useState('');
    const [companyNumber, setCompanyNumber] = useState('');
    const [companyRevenue, setCompanyRevenue] = useState('');
    const [openingTime, setOpeningTime] = useState('');
    const [closingTime, setClosingTime] = useState('');
    const [uniqueNumber, setUniqueNumber] = useState('');
    

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [checkbox, setCheckbox] = useState(false);
    // console.log(checkbox)
    const postData = () => {
        axios.post(`https://62a6f21797b6156bff833b05.mockapi.io/CRUD`, {
            // firstName,
            // lastName,
            image,
            companyName,
            email,
            companyNumber,
            uniqueNumber,
            lineofBusiness
            // checkbox
        }).then(() => {
            navigate('/company/list');
        })
    }
    return (
        <>
        <div className='col-lg-4'>
            <p>data</p>
        </div>
        <div className='text-black align-content-center col-lg-6 '>
            <Form className="create-form">
                <Form.Field>
                    <label>Image</label>
                    <input required placeholder='First Name' onChange={(e) => setImage(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Company Name</label>
                    <input required placeholder='First Name' onChange={(e) => setCompanyName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input required placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Company Mobile Number</label>
                    <input required placeholder='First Name' onChange={(e) => setCompanyNumber(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Unique Company Number</label>
                    <input required placeholder='First Name' onChange={(e) => setUniqueNumber(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Line of business of the company</label>
                    <input required placeholder='Last Name' onChange={(e) => setLineofBusiness(e.target.value)}/>
                </Form.Field>
                {/* <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field> */}
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
        </>
    )
}

export default Create;