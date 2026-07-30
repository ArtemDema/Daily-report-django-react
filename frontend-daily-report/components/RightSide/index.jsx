import rightSideStyles from "./RightSide.module.css"
import LastReports from "./LastReports"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

class rightSide extends React.Component{
  state = {details: [], }

  componentDidMount(){
    let data;
    axios.get("http://127.0.0.1:8000/reports/")
    .then(responce => {
      data = responce.data;
      this.setState({
        details: data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className='rightSide'>
        <div className='nameRightDiv'>
          <h3>Последние записи</h3>
        </div>
          <LastReports />
      </div>
    );
  }
}

export default rightSide