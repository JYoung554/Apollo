import React, { Component } from 'react';
import './App.css';
import HomePage from './screens/HomePage'
import axios from 'axios'
import { Route, Switch, } from 'react-router-dom'


export  default class App extends Component {
  constructor(){
    super()

    this.state = {
        search : ['']
    }
  }
  componentDidMount(){
    this.getAllResults()
}

getAllResults = async () => {
  try {
    const res = await axios.get('http://localhost:3001/api/allresults')
    // console.log(res)
    this.setState({
      allResults: res.data.results
    })
  } catch (error) {
    throw error
  }
}


  render (){
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}
}
