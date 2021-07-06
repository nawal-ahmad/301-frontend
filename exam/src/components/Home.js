import React, { Component } from 'react';
import axios from 'axios';
import Drink from './Drink';
import { Row, Col } from 'react-bootstrap';
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktailData: [],
    };
  }
  componentDidMount = async () => {
    const server = 'http://localhost:8080';
    const cocktailData = await axios.get(`${server}/cocktailData`);
    console.log(cocktailData.data);
    this.setState({
      cocktailData: cocktailData.data,
    });
  };

  addFav = async (idDrink) => {
    const server = 'http://localhost:8080';
    const obj = {
      idDrink: this.state.cocktailData[idDrink].idDrink,
      strDrink: this.state.cocktailData[idDrink].strDrink,
      strDrinkThumb: this.state.cocktailData[idDrink].strDrinkThumb,
    };
    const cocktailData = await axios.post(`${server}/addFav`, obj);
    console.log(cocktailData.data);
  };

  render() {
    return (
      <div>
        <Row xs={1} md={3} className='g-4'>
          {this.state.cocktailData.map((obj) => {
            return (
              <Col>
                <Drink
                  idDrink={obj.idDrink}
                  strDrink={obj.strDrink}
                  strDrinkThumb={obj.strDrinkThumb}
                  addFav={this.addFav}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Home;
