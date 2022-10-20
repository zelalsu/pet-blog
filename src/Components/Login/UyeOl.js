
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,

}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import Form from 'react-bootstrap/Form';
import App from '../../App';
import Navigation from '../Navigation';


import React, { Component } from 'react'

export default class UyeOl extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      snackbaropen: false,
      snackbarmsg: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);


  }

  snackbarClose = () => {
    this.setState({
      snackbaropen: false
    });
  }



  handleSubmit(e)
{
  const request=JSON.stringify({
    ID:null,
    UserFirsName: e.target.userFirstName.value,
    UserName:e.target.userName.value,
    UserMail:e.target.userMail.value,
    UserPassword:e.target.userPassword.value


  });
  e.preventDefault();
  fetch('http://localhost:50103/api/User',
  {
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: request
  })
  .then(res => res.json())
      .then((result) => {
        this.setState({
          snackbaropen: true,
          snackbarmsg: result
        });
      },
        (error) => {
          this.setState({
            snackbaropen: true,
            snackbarmsg: 'Failed'
          });
        }
      )
}
  render() {
    return (
      
      <MDBContainer  fluid>
    <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={this.state.snackbaropen}
          autoHideDuration={3000}
          onClose={this.snackbarClose}
          message={<span id="message-id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
              x
            </IconButton>
          ]}
        />

        <MDBCard  className='text-black m-5' style={{borderRadius: '25px'}}>
          <MDBCardBody   >
            <MDBRow >
              
            
              <MDBCol   className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Üye Ol</p>
  <Form onSubmit={this.handleSubmit}>
                <div  className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon='user me-3' size='lg'/>
                  <MDBInput 
                  label='Adınız' 
                  id='form1'
                   type='text'
                   required
                    className='w-100'
                    name='userFirstName'                  
                    />
                  
                </div>
                
                <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user-check me-3" size="lg"/>
                  <MDBInput 
                  label='Kullanıcı Adı'
                   id='form1' 
                   type='text' 
                   required
                   className='w-100'
                   name='userName'
                  

                   
                   />
                  
                </div>
                
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput 
                  label=' Email'
                   id='form2'
                   required
                    type='email'
                    name='userMail'
                    

                    />
                </div>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput 
                  label='Şifre' 
                  id='form3' 
                  required
                  type='password'
                  name="userPassword"
                  />
                </div>
  
                <MDBBtn  type="submit" className='mb-4' size='lg'>Üye ol</MDBBtn>
                </Form>

              </MDBCol>
  
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
              </MDBCol>
            
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

  
  
      </MDBContainer>
    );
  }
}



















 


