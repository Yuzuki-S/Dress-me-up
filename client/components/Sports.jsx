import React from 'react'
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap'

function Sports () {
  return (
    <div className='box'>
      <h1>Sporty Package</h1>
      <Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail href="#" alt="171x180" src="/puffer.jpg" />
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail   href="#" alt="171x180" src="/linen.jpg" />
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail   href="#" alt="171x180" src="/jersey.jpg" />
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail   href="#" alt="171x180" src="/leon.jpg" />
    </Col>
    <Col md={8}>
    <div><p>Description here</p></div>
    </Col>
  </Row>
</Grid>
    </div>
  )
}

export default Sports