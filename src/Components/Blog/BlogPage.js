
import React, { Component } from 'react';
import { Col, FormGroup, FormLabel, Row, Form, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
  const { id } = ""
  export default class BlogPage extends Component {
    id = useParams()
    constructor(props) {
    super(props);
    debugger
    var params = this.props.match.params;
    var params2 = this.props.location;
    this.state = {
      blogs: [],
      blogId: params.id
    }
  }

  componentDidMount() {
    this.getBlogs();
  }
  getBlogs = () => {
    fetch("http://localhost:50103/api/Blog/")
      .then(response => response.json())
      .then(data => this.setState({ blogs: data }));;
  }


  render() {

    return (
      <div>


        <label> {this.state.blogId}</label>

      </div>
    );
  }
}





