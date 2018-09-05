import React from 'react'
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap'

function Work () {
  return (
    <div className='box'>
      <h1>Work Package</h1>
      <Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail href="#" alt="171x180" src="/blue-top.jpg" />
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail   href="#" alt="171x180" src="/shirts.jpg" />
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail   href="#" alt="171x180" src="/slim-cropped-pants.jpg" />
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail   href="#" alt="171x180" src="/adele.jpg" />
    </Col>
    <Col md={8}>
    <div><p>Description here</p></div>
    </Col>
  </Row>
</Grid>
    </div>
  )
}

export default Work