import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, List } from 'semantic-ui-react';
import { useNavigate, Link } from 'react-router-dom';

import * as CgIcons from "react-icons/cg"
import * as MdIcons from "react-icons/md"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from "react-icons/bi";


function Read() {

    const [APIData, setAPIData] = useState([]);
    
    const url = `https://62a6f21797b6156bff833b05.mockapi.io/CRUD`

        const formData = new FormData()

        // formData.append('image',image)

    useEffect(() => {
        axios.get(url,formData)
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
        localStorage.setItem('image', image);
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
        navigate("/company/create");
    }

    return (
        <div className='container-fluid'>
        <Button primary onClick={addUser}>Add Company</Button>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
                        <Table.HeaderCell>List of Companies</Table.HeaderCell>
                        {/* <Table.HeaderCell>Last Name</Table.HeaderCell> */}
                        <Table.HeaderCell>CRUD Operations</Table.HeaderCell>
                        {/* <Table.HeaderCell>Delete</Table.HeaderCell> */}
                    </Table.Row>
                </Table.Header>
                
                {/* <div style={{marginTop:"20px"}}> */}
                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                {/* <Table.Cell>{data.id}</Table.Cell> */}
                                <Table.Cell>
                                    <List>
                                        <List.Item>
                                            <div style={{width:"40px",height:"40px"}}>
                                                {data.image}
                                            </div>
                                        </List.Item>
                                        <List.Item>
                                            <Link to="/company/view">
                                            <button 
                                                style={{background:"transparent",border:"none",color:"blue"}} 
                                                    onClick={() => setData(data)}>
                                                {data.companyName}
                                            </button>
                                            </Link>
                                        </List.Item>
                                        <List.Item>{data.companyNumber}</List.Item>
                                        <List.Item>{data.uniqueNumber}</List.Item>
                                        <List.Item>{data.lineofBusiness}</List.Item>
                                    </List>
                                </Table.Cell>
                                {/* <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell> */}
                                
                                <Table.Cell> 
                                    <Link to='/company/edit'>
                                        <Button primary onClick={() => setData(data)}>
                                        <BiIcons.BiEdit color='white' fontSize="1.3rem"/>
                                        </Button>
                                    </Link>
                                    {/* <Link to='/company/view'>
                                        <Button color='green' onClick={() => setData(data)}>
                                        <AiIcons.AiFillEye color='white' fontSize="1.3rem"/>
                                        </Button>
                                    </Link> */}
                                        <Button color='red' onClick={() => onDelete(data.id)}>
                                        <MdIcons.MdDelete color='white' fontSize="1.3rem" />
                                        </Button>
                                </Table.Cell>
                                
                                {/* <Table.Cell> 
                                        
                                </Table.Cell>
                                <Table.Cell>
                                    
                                </Table.Cell> */}
                            </Table.Row>
                        )
                    })}
                </Table.Body>
                {/* </div> */}
            </Table>
        </div>
    )
}

export default Read;