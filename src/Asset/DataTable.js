import React from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
export default class DataTable extends React.Component {
  state= {
    qdata: []
    }
 componentDidMount() {
  axios.get(`https://freequotesapi.herokuapp.com/api/post/Api.php`)
  .then(res => {
    this.setState((prevState) => ({ qdata : res.data}));
  })
  }
  render() {
    const ul = "https://freequotesapi.herokuapp.com/api/post/ApiByID.php?id="
     const data = this.state.qdata.map((qt, index) => (
         
          <tr key={index}>
            <th scope="row">{qt.id}</th>
            <td>{qt.quotes}</td>
            <td>{qt.author}</td>
            <td><a href={ul + qt.id}>{ul + qt.id}</a></td>
          </tr>
           
    ))

    return (
  <Table responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Quotes</th>
            <th>Author</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </Table>
    );
  }
}