import React from 'react'
import { Jumbotron, Button } from 'reactstrap'

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">
          Module federeation import
        </h1>
        <hr className="my-2"/>
        <p>Another component</p>
        <p className="lead">
          <Button color="primary">Button</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default Home