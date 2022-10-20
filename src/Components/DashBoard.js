import React, { Component } from 'react'
import { Row } from "reactstrap"
import Body from './Body/Body'
import Card from './Card/Card'
import { Fouter } from './Fouter/Fouter'

export default class DashBoard extends Component {
  render() {
    return (
      <div>

        <Row>
          <Body />
        </Row>
        <Row>
          <Card />
        </Row>
        <Row>
          <Fouter />
        </Row>
      </div>
    )
  }
}
