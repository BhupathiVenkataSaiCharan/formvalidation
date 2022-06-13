import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

function View() {
    let navigate = useNavigate();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);

    // const updateAPIData = () => {
    //     axios.put(`https://62a6f21797b6156bff833b05.mockapi.io/CRUD/${id}`, {
    //         firstName,
    //         lastName,
    //         checkbox
    //     }).then(() => {
    //         navigate('/analytics')
    //     })
    // }

    const backHome = () => {
        navigate("/analytics");
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <p>{firstName}</p>
                    {/* <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/> */}
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <p>{lastName}</p>
                    {/* <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/> */}
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                </Form.Field>
                {/* <Button type='submit' onClick={updateAPIData}>Update</Button> */}
                <Button type="submit" onClick={backHome} >Go back home</Button>
            </Form>
        </div>
    )
}

export default View;