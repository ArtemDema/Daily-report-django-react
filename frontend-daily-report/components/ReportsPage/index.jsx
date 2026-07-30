import Header from "../Header"
import LeftSide from "../LeftSide"
import RightSide from "../RightSide"
import ListOfReports from "./ListOfReports"
import ReportsPageStyles from "./ReportsPage.module.css"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

class reportsPage extends React.Component{
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
      <div className='mainDiv'>
        <Header />

        <div className='contentDiv'>

          <LeftSide />

          <div className={ReportsPageStyles.frontSide}>
            {this.state.details.map((output, id) => (
              <ListOfReports day={output.date.split("-")[2]} month={output.date.split("-")[1]} year={output.date.split("-")[0]} emotion={output.emotion} text={output.text} key={id} />
            ))}
          </div>

          <RightSide />

        </div>
      </div>
    );
  }
}

export default reportsPage