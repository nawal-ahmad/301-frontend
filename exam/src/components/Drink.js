import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class Drink extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={this.props.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{this.props.strDrink}</Card.Title>

            <Button
              variant='primary'
              onClick={() => this.props.addFav(this.props.idDrink)}
            >
              add to favorite List
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Drink;
