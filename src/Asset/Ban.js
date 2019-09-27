import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Input, Button, Form} from 'reactstrap';
//import axios from 'axios';
class Ban extends React.Component{
  CopyIt(){
  const copyText = document.getElementById("joke");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  }
  render(){
    const url="https://freequotesapi.herokuapp.com/api/post/Api.php"
  const qt= "Use this API URL for 200+ quotes"
  return (
     <div className="Jumbotron">
      <Jumbotron fluid>
        <Container fluid color="dark">
          <h1 className="display-3">Hola to FQA !</h1>
          <hr className="my-2" />
          <p >{qt}</p>
      <Form>
      <Input type="text" name="url" id="joke" defaultValue={url} />
      <br/>
      <div className="text-right">
      <Button color="primary" onClick={this.CopyIt}>Copy It</Button>
      </div>
      </Form>
        </Container>
      </Jumbotron>
    </div>
  );
}
}

export default Ban;