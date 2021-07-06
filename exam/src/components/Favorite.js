import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap';
import FormUpdate from './FormUpdate';

export class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favData: '',
      show: false,
      strDrinkThumb: '',
      idDrink: -1,
      strDrink: '',
    };
  }
  componentDidMount = async () => {
    const server = 'http://localhost:8080';
    const favData = await axios.get(`${server}/getFav`);
    console.log(favData.data);
    this.setState({
      favData: favData.data,
    });
  };
  delete = async (idDrink) => {
    const server = 'http://localhost:8080';
    const newFav = await axios.delete(`${server}/deleteFav?idDrink=${idDrink}`);
    this.setState({
      favData: newFav.data,
    });
  };

  showForm = (idx) => {
    this.setState({
      show: true,
      idx: idx,
      strDrinkThumb: this.state.favData[idx].strDrinkThumb,
      strDrink: this.state.favData[idx].strDrink,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  updateData = async (e) => {
    e.preventDefault();
    const obj = {
      idDrink: this.state.favData[this.state.idDrink].idDrink,
      strDrinkThumb: e.target.value.strDrinkThumb,
      strDrink: e.target.value.strDrink,
    };
    const server = 'http://localhost:8080';
    const updatedFav = await axios.put(`${server}/updateFav`, obj);
    this.setState({
      favData: updatedFav.data,
      show: false,
    });
  };

  render() {
    return (
      <div>
        <Row xs={1} md={3} className='g-4'>
          {this.state.favData.map((obj, idx) => {
            return (
              <div key='idx'>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={obj.strDrinkThumb} />
                    <Card.Body>
                      <Card.Title>{obj.strDrink}</Card.Title>

                      <Button
                        variant='primary'
                        onClick={() => this.showForm(idx)}
                      >
                        Update
                      </Button>
                      <Button
                        variant='primary'
                        onClick={() => this.delete(obj.idDrink)}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
        <FormUpdate
          show={this.state.show}
          handleClose={this.handleClose}
          updateData={this.updateData}
          strDrinkThumb={this.state.strDrinkThumb}
          strDrink={this.state.strDrink}
        />
      </div>
    );
  }
}

export default Favorite;
