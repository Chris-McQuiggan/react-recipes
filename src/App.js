import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import RecipeList from './Components/Recipe List/RecipeList'
import Recipe from './Components/Recipe'
import Home from './Components/Home'
import './App.css';


class App extends Component {

  constructor() {
    super()
    this.state = {
      id: '1',
      data: [],
      curData: {
        id: "",
        name: "This is pre populated",
        ingredients: [],
        details: "",
        image: ""
      }
    };
  }

  currentRecipe = (id, name, ingredients, description, image) => {
    this.setState({
      curData: {
        id: id,
        name: name,
        ingredients: ingredients,
        details: description,
        image: image
      },
      id:id
    }, function () {
      console.log(this.state.curData);
    })
  }

  getAll = () => {
    axios.get('http://localhost:5000/recipe/all')
      .then(response => {
        this.setState({
          data: response.data
          // .sort((a, b) =>
          //   a.name.localeCompare(b.name))
        })
        console.log(this.state.data)
      })
      .catch(error => { console.log(error) })
  }

  componentDidMount = () => {
    this.getAll()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Row>
            <Col md='12'>
              <NavBar />
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <RecipeList data={this.state.data} currentRecipe={this.currentRecipe} />
            </Col>
            <Col>
              <Route exact path={'/'} render={() => <Home curData={this.state.curData}/>} />
              <Route path={'/recipe/:id'} render={() => <Recipe curData={this.state.curData} />} />
            </Col>
          </Row>
        </Router>
      </div >
    );
  }
}

export default App;
