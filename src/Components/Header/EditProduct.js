import React, { Component } from 'react';
import { Modal, Button, Row, Col, FormGroup, FormLabel, FormControl, InputGroup } from 'react-bootstrap';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import Form from 'react-bootstrap/Form';


export class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            snackbaropen: false,
            snackbarmsg: '',
           
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    snackbarClose = () => {
        this.setState({
            snackbaropen: false
        });
    }

    handleSubmit(e) {
        e.preventDefault();//url de girdiğimiz değer gözükmesin diye 

        fetch("http://localhost:50103/api/ItemProps/",
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ID: e.target.id.value,
                    ProductName: e.target.productName.value,
                    ProductBrand: e.target.productBrand.value,
                    ProductProps: e.target.productProps.value,

                })
            })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    snackbaropen: true,//data geldiğinde snackbar true olur 
                    snackbarmsg: result
                })
            },

                (error) => {
                    this.setState({
                        snackbaropen: true,
                        snackbarmsg: 'Fail'

                    })
                },
            )
    }
    render() {

        return (
            <div className='container'>
                <Snackbar //sayfanın nerede gözükmesini istiyorsak anchorOrigin kullanılır
                    anchorOrigin={{ vertical: 'center', horizontal: "center" }}
                    open={this.state.snackbaropen}//snackbar a open özelliği verdin
                    autoHideDuration={3000}
                    onClose={this.snackbarClose}
                    message={<span id="message-id">{this.state.snackbarmsg} </span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                            x
                        </IconButton>
                    ]}
                />
                <Modal
                    {...this.props}

                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            🐶{this.props.name}🐶
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={10}>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <FormLabel>
                                            Id
                                        </FormLabel>
                                        <FormControl
                                            type="text"
                                            name="id"
                                            required//boş geçilemez 
                                            disabled//değiştirelemez
                                            defaultValue={this.props.id}
                                            placeholder={this.props.id}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <InputGroup>Ürün adı:</InputGroup>
                                        <FormControl as="textarea" aria-label="With textarea"
                                            type="text"
                                            name="productName"
                                            required//boş geçilemez 
                                            defaultValue={this.props.name}
                                            placeholder='Ürün adı ' />
                                    </FormGroup>

                                    <FormGroup>
                                        <FormLabel>
                                            Ürünün Markası
                                        </FormLabel>
                                        <FormControl
                                            type="text"
                                            name="productBrand"
                                            required//boş geçilemez 
                                            defaultValue={this.props.brand}
                                            placeholder='Ürün Markası '
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <InputGroup>Ürün:</InputGroup>
                                        <FormControl as="textarea" aria-label="With textarea"
                                            type="text"
                                            name="productProps"
                                            required//boş geçilemez 
                                            defaultValue={this.props.props}
                                            placeholder='Ürün Özelliği '
                                            style={{ height: "100px" }}
                                        />
                                    </FormGroup>

                                    {/* <Form.Group className="mb-3">
                                    <input type="file" name="file" id="file"/>
                                    <FormControl as="textarea" aria-label="With textarea"
                                            type="file"
                                            name="image"
                                            required//boş geçilemez 
                                            defaultValue={this.props.image}
                                            placeholder='Ürün Özelliği '
                                            style={{ height: "100px" }}
                                        />
                                       
                                    </Form.Group> */}

                                    <FormGroup>
                                        <Button variant="primary" type="submit">Ürünü Güncelle</Button>
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
