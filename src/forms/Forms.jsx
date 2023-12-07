import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import "./forms.css";
import Cards from "../card/Cards";

const Forms = () => {
  // const [username, setUsername] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    image: "",
  });
  const { username, email, password, firstname, lastname, image } = data;

const handleData= (e) => {
    setData({...data,[e.target.id]:e.target.value})
    console.log(e.target.value)
   
}



  const handleFormSubmit = (e) => {
    e.preventDefault()
    if(password.length<8){
        alert("Şifre en az 8 haneli olmalıdır")
    }

    const emailParts = email.split("@") 
    const emailPartsDoc = emailParts[1].split(".") 
    console.log(emailPartsDoc); 
    if(emailPartsDoc.length > 3 || emailPartsDoc.length <=1){ 
        alert("Lütfen geçerli bir mail adresi yazınız.") 
    } 

    if(username.trim().length <3 || firstname.trim().length<3 || lastname.trim().length < 3){
        alert("en az 3 karakter olmalı")
    }
  };
  

  return (
    <>
      <Form
        className="d-flex flex-column mx-auto col-12 col-sm-8 col-md-6"
        onSubmit={handleFormSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
          onChange={handleData}
            type="email"
            placeholder="Enter email"
            value={email}
            id="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
          onChange={handleData}
            type="text"
            placeholder="Enter User Name"
            id="username"
            required
            value={username}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="firstname">First Name</Form.Label>
          <Form.Control
          onChange={handleData}
            type="text"
            placeholder="Enter First Name"
            id="firstname"
            value={firstname}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="lastname">Last Name</Form.Label>
          <Form.Control
          onChange={handleData}
            type="text"
            placeholder="Enter Last Name"
            id="lastname"
            value={lastname}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="image">Image Name</Form.Label>
          <Form.Control
          onChange={handleData}
            type="url"
            placeholder="Enter Image Url"
            id="image"
            value={image}
            required
          />
        </Form.Group>

        <InputGroup className="mb-3 d-flex flex-column">
          <Form.Label htmlFor="password">Password</Form.Label>
          <div className="d-flex ">
            <Form.Control
            onChange={handleData}
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Show/Hidden
            </Button>
          </div>
        </InputGroup>

        <Form.Group className="mb-3 d-flex mx-auto">
          <Button className="btn mt-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
      <Cards veri={data}/>
      
    </>
  );
};

export default Forms;
