import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';



class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.node,
    options: PropTypes.node,
  }
  render () {
    return (
      <Row>
        <Col xs={12}>
          <OrderSummary costOfTrip={this.props.tripCost} options={this.props.options} />
        </Col>
      </Row>
    );
  }
}

export default OrderForm;

