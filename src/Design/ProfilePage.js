import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePage = (formValues) => {

  let navigate = useNavigate();

  const Logout = () =>{
      navigate("/");
      // localStorage.getItem("intial",JSON.parse(formValues));
  }

  return (
    <>
        <h1>This is the profile page</h1>
        <p>{localStorage.getItem("formValues")}</p>
        <button onClick={Logout}>Logout</button>
    </>
  )
}

export default ProfilePage;