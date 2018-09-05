import React from 'react'
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap'

function Casual () {
  return (
    <div className='box'>
      <h1>Casual</h1>
      <Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail href="#" alt="171x180" src="/rib.jpg" />
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail   href="#" alt="171x180" src="/noir.jpg" />
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail   href="#" alt="171x180" src="/jeans.jpg" />
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail   href="#" alt="171x180" src="/anya.jpg" />
    </Col>
    <Col md={8}>
    <div><p>Description here</p></div>
    </Col>
  </Row>
</Grid>
    </div>
  )
}

export default Casual