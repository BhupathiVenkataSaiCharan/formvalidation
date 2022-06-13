import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { useNavigate, Link } from 'react-router-dom';

function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://62a6f21797b6156bff833b05.mockapi.io/CRUD`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const getData = () => {
        axios.get(`https://62a6f21797b6156bff833b05.mockapi.io/CRUD`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://62a6f21797b6156bff833b05.mockapi.io/CRUD/${id}`)
        .then(() => {
            getData();
        })
    }

    let navigate = useNavigate();

    const addUser = () => {
        navigate("/create3");
    }

    return (
        <div>
        <Button className='btn btn-primary' onClick={addUser}>Add User</Button>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checkbox Value</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update3'>
                                    <Table.Cell> 
                                        <Button className='btn btn-primary' onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Link to='/view3'>
                                    <Table.Cell> 
                                        <Button className='btn btn-primary' onClick={() => setData(data)}>View</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button className='btn btn-danger' onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

export default Read;