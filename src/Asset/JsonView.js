import React from 'react'
import ReactJson from 'react-json-view'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Input, Label, Button, Form} from 'reactstrap';
class JsonView extends React.Component{
	constructor(){
	super()
	this.state = {
    qanda: [],
    id:142
  }
}
  componentDidMount() {
    axios.get(`https://freequotesapi.herokuapp.com/api/post/ApiByID.php?id=${this.state.id}`)
  .then(res => {
    this.setState((prevState) => ({ qanda : res.data}));
  })
  }
  CopyIt(){
  const copyText = document.getElementById("url");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  }
	render(){
		const url = `https://freequotesapi.herokuapp.com/api/post/ApiByID.php?id=142`
		return(
			<>
			<div>
			<h3>Call Quotes from id:</h3>
			<hr/>
			<Form>
			<Label for="url">Example:</Label>
			<Input type="text" name="url" id="url" defaultValue={url} />
			<i>For more : <Link to='/Examples'>V1 Id Examples </Link> </i>
			<br/>
			<div className="text-right">
			<Button color="primary" className="btn pull-right" onClick={this.CopyIt}>Copy It</Button>
			</div>
			</Form>
			<h3>Resource from ID: {this.state.qanda.id}</h3>
			<hr/>
			<ReactJson src={this.state.qanda} theme ="tomorrow" displayDataTypes="false" indentWidth="2" />
			</div></>)
	}
}

export default JsonView