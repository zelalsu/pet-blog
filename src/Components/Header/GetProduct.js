import React, { Component } from 'react'
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, ButtonToolbar
} from 'reactstrap';
import { EditProduct } from './EditProduct';
import { FaRegTrashAlt } from "react-icons/fa";
// import { AddProduct } from './AddProduct';


export default class GetProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editModalShow: false,
     
    }
  }
  deleteDep(id) {
    if (window.confirm('Are You Sure?')) {
      fetch('http://localhost:50103/api/ItemProps/' + id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }

      }
      )
    }
  }
  render() {
    const { id, name, brand, props } = this.state
   
    //true olan add modal show değerimi false yapıyor. Tıklandığı zamana açılıyor. Diğer türlü false oluyor
    let editModalClose = () => this.setState({ editModalShow: false })
    // let addModalClose = () => this.setState({ addModalShow: false })
    return (
      <div>
        <Row>
          {/* <Button onClick={() => this.setState({ addModalShow: true })}>Yeni  ekle</Button> */}
          {this.props.product.map(product => (

            <Card color="danger" outline key={product.ID} style={{ backgroundColor: "#ffd7cc", width: '25rem', display: "flex", justifyContent: "flex-end", margin: "40px 40px 40px 40px" }}>
              <img
                alt=".."
                className=" img-fluid rounded shadow-lg"
                src={require('../Header/images/' + product.Image)}
                style={{ width: "auto", height: "auto" }}
              ></img>
              <CardBody   >
                <CardTitle tag="h5">
                  {product.ProductName}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6">
                  {product.ProductBrand}
                </CardSubtitle>
                <CardText>
                  {product.ProductProps}
                </CardText>
                <ButtonToolbar>
                  <Button style={{ backgroundColor: "#008B8B" }} onClick={() => this.setState({
                    editModalShow: true,
                    id: product.ID,
                    name: product.ProductName,
                    brand: product.ProductBrand,
                    props: product.ProductProps
                  
                    // image: product.Image
                  }
                  )} >
                    Güncelle
                  </Button>
                  <ButtonToolbar >
                    <Button onClick={() => this.deleteDep(product.ID)} style={{ backgroundColor: "#B22222", marginLeft: "200px", color: "#FFF5EE" }} ><FaRegTrashAlt />
                    </Button>
                  </ButtonToolbar>
                  <EditProduct show={this.state.editModalShow} onHide={editModalClose} id={id} props={props} brand={brand} name={name} />
                </ButtonToolbar>
              </CardBody>
              {/* <AddProduct show={this.state.addModalShow} onHide={addModalClose} /> */}

            </Card>


          ))}

        </Row>


      </div >
    )
  }
}
