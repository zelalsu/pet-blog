import React, { Component } from 'react'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,

} from 'mdb-react-ui-kit';
import { Button, ButtonToolbar, Col } from 'react-bootstrap';
import BlogPage from './BlogPage';
// import { ButtonToolbar } from 'reactstrap';
import { Link } from "react-router-dom";
import blog1 from "../Header/images/blogcat.png"
 

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    }
  }
  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit() {
    fetch("http://localhost:50103/api/Blog")
      .then(response => response.json())
      .then(data => this.setState({ blogs: data }));;
  }


  // handleClick = (blog) => {
  //   let history = useNavigate();
  //   history.push("/blogPage", { blog: blog});
  // }

  render() {

    // const { id, blogname, blogcomment } = this.state
    return (
      <div>
        <Col >
          {this.state.blogs.map(blog => (
            <MDBCard key={blog.BlogId} style={{ maxWidth: '540px', display: "flex", justifyContent: "flex-end", margin: "40px 40px 40px 40px" }}>
              <MDBRow className='g-0'>
                <MDBCol md='4'>
                  <MDBCardImage src={blog1} alt='...' fluid />
                </MDBCol>
                <MDBCol md='8'>
                  <MDBCardBody >
                    <MDBCardTitle>{blog.BlogName}</MDBCardTitle>
                    <MDBCardText>{blog.BlogComment}</MDBCardText>
                    <MDBCardText >
                      <small className='text-muted'>
                      </small>
                    </MDBCardText>
                    <ButtonToolbar>
                      {/* <Link to={{ screen: '/blogPage', params: { id: blog.BlogId } }} >
                        <Button>
                          Devamı
                        </Button>
                      </Link> */}
                      {/* <Link to="/blogPage" params={{ id: blog.BlogId }}>Devamı</Link> */}
                      <Link to={`/blogPage/${blog.BlogId}`}>Devamı</Link>
                      {/* <Link to="/blogPage">
                        <Button onClick={ this.handleClick(blog)} >
                          Devamı
                        </Button>
                      </Link> */}

                    </ButtonToolbar>
                  </MDBCardBody>
                </MDBCol>

              </MDBRow>

            </MDBCard>
          ))}
        </Col>
      </div>

    );
  }
}

