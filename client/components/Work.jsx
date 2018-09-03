import React from 'react'
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap'

function Work () {
  return (
    <div className='box'>
      <h1>Work</h1>
      <Grid>
  <Row>
    <Col xs={6} md={3}>
      <Thumbnail href="#" alt="171x180" src="/slim-cropped-pants.jpg" />
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail   href="#" alt="171x180" src="/slim-cropped-pants.jpg" />
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail   href="#" alt="171x180" src="/slim-cropped-pants.jpg" />
    </Col>
  </Row>
</Grid>
    </div>
  )
}

export default Work