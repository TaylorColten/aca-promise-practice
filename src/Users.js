import React, { Component, Fragment } from 'react'
import { Button } from '@material-ui/core'
import {connect} from "react-redux";


class Users extends Component {
  getUsers = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(results => results.json())
      .then(data => {
        console.log(data);
        this.props.setUsers(data);
      });
  };
  
  render() {
    return (
      <Fragment>
        <div>
          <h3>Press the button to get users and display them below</h3>
          <Button onClick={this.getUsers} variant="contained" color="primary">Get Users</Button>
        </div>
        <div className="users-block">
        </div>
      </Fragment>
    )
  }
}

export default Users