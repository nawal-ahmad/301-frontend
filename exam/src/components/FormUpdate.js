import React, { Component } from 'react';

export class FormUpdate extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={this.props.handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>To Update</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.updateData}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Drink</Form.Label>
                <Form.Control
                  type='text'
                  name={strDrink}
                  defaultValue={this.props.strDrink}
                />
                <Form.Label>DrinkThumb</Form.Label>
                <Form.Control
                  type='text'
                  name={strDrinkThumb}
                  defaultValue={this.props.strDrinkThumb}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Save
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default FormUpdate;
