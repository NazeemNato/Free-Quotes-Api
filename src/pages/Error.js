import React from 'react'
import { Jumbotron, Container } from 'reactstrap';
import {Link} from 'react-router-dom'
function Error(){
	return(
		<div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Error</h1>
          <p className="lead">Please return to home <Link to="/"> Im leaving bye </Link></p>
        </Container>
      </Jumbotron>
    </div>
		)
}
export default Error