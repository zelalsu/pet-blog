import React, { Component } from 'react'

 class Image extends Component {//ref oluşturma kısmı

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }
      componentDidMount() {
        console.log(this.myRef);
      }

  render() {
    const {image}=this.props;//gelen propsu image i aldık
    return (
        <img ref={this.myRef}key={image.id} src={image.urls.small} alt=""/>
    )
  }
}

export default Image
