
import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

export class AddProduct extends Component {

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



  handleSubmit(e) {

    const request = JSON.stringify({
      ID:null,
      ItemId: e.target.itemId.value,
      ProductName: e.target.productName.value,
      ProductBrand: e.target.productBrand.value,
      ProductProps: e.target.productProps.value

    });

    e.preventDefault();//url de girdiğimiz değer gözükmesin diye 
    fetch('http://localhost:50103/api/ItemProps', {//fetch ile istek attık buraya

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: request
    }).then(res => res.json())
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
      <div className='container'>
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
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Ürün ekle
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit} >
                  <FormGroup controlId="itemId">
                    <FormLabel>
                      ItemId
                    </FormLabel>
                    <FormControl  
                        type="text"
                        name="itemId"
                        required//boş geçilemez 
                        placeholder='Item Id'
                        />                   
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>
                      Product name
                    </FormLabel>
                    <FormControl
                      type="text"
                      name="productName"
                      required//boş geçilemez 
                      placeholder='Product Name'
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>
                      Product Brand
                    </FormLabel>
                    <FormControl
                      type="text"
                      name="productBrand"
                      required//boş geçilemez 
                      placeholder='Product Brand'
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>
                      Product Props
                    </FormLabel>
                    <FormControl
                      type="text"
                      name="productProps"
                      required//boş geçilemez 
                      placeholder='ProductProps'
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button variant="primary" type="submit">Ekle</Button>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
