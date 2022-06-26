import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, List } from 'semantic-ui-react';
import { useNavigate, Link } from 'react-router-dom';
import * as MdIcons from "react-icons/md"
import Modal from "@material-ui/core/Modal";

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
        let { companyName } = data;
        localStorage.setItem('Company Name', companyName);
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

    const [open, setOpen] = useState(false);

    const modalOpen = () => setOpen(!open);

    return (
        <div className='container-fluid'>
        <Button primary onClick={addUser}>Add Company</Button>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>List of Companies</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>
                                    <List>
                                        <List.Item>
                                            <Link to="/company/view">
                                            <button style={{background:"transparent",border:"none",color:"blue"}} onClick={() => setData(data)}>{data.companyName}</button>
                                            </Link>
                                        </List.Item>
                                    </List>
                                </Table.Cell>
                                <Table.Cell> 
                                
                                        <Button color='red' onClick={() => onDelete(data.id)}>
                                            <MdIcons.MdDelete color='white' fontSize="1.3rem" />
                                        </Button>
                                        <Button color="green" onClick={modalOpen}>
                                        <MdIcons.MdDelete color='white' fontSize="1.3rem" />
                                        </Button>
                                        <Modal
                                            onClose={()=>setOpen((val)=>!val)}
                                            open={open}
                                            style={{position: 'absolute',border: '2px solid #000',backgroundColor: 'gray',boxShadow: '2px solid black',height:150,width: 300,margin: 'auto'}}>
                                        <>
                                            <h2 className="text-lg-center">Are You Sure?</h2>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <Button color='red' onClick={() => onDelete(data.id)}>Yes</Button>
                                                </div>
                                                <div className="col-lg-6">
                                                <Link to='/company/list'>
                                                    <Button primary onClick={() => modalOpen(!open)}>Cancel</Button>
                                                </Link>
                                                </div>
                                            </div>
                                        </>
                                        </Modal>
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