import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, List } from 'semantic-ui-react';
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
        let { id, image, companyName, companyNumber, uniqueNumber, lineofBusiness } = data;
        localStorage.setItem('ID', id);
        // localStorage.setItem('First Name', firstName);
        // localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Image', image);
        localStorage.setItem('Company Name', companyName);
        localStorage.setItem('Company Number', companyNumber);
        localStorage.setItem('Unique Number', uniqueNumber);
        localStorage.setItem('Line of Business', lineofBusiness);
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
        <Button primary onClick={addUser}>Add User</Button>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>List of Companies</Table.HeaderCell>
                        {/* <Table.HeaderCell>Last Name</Table.HeaderCell> */}
                        <Table.HeaderCell>CRUD Operations</Table.HeaderCell>
                        {/* <Table.HeaderCell>Delete</Table.HeaderCell> */}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>
                                    <List>
                                        <List.Item>{data.image}</List.Item>
                                        <List.Item>{data.companyName}</List.Item>
                                        <List.Item>{data.companyNumber}</List.Item>
                                        <List.Item>{data.uniqueNumber}</List.Item>
                                        <List.Item>{data.lineofBusiness}</List.Item>
                                    </List>
                                </Table.Cell>
                                {/* <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell> */}
                                
                                <Table.Cell> 
                                    <Link to='/update3'>
                                        <Button primary onClick={() => setData(data)}>Update</Button>
                                    </Link>
                                    <Link to='/view3'>
                                        <Button color='green' onClick={() => setData(data)}>View</Button>
                                    </Link>
                                        <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                                
                                {/* <Table.Cell> 
                                        
                                </Table.Cell>
                                <Table.Cell>
                                    
                                </Table.Cell> */}
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

export default Read;