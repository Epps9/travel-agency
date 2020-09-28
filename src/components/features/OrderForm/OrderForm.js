import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';



class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.node,
    options: PropTypes.object,
  }
  render () {
    return (
      <Row>
        <Col xs={12}>
          {pricing.map(option => (
            <Col md={4} key={option.id}>
              <OrderOption {...option}/>
            </Col>
          ))}
          <OrderSummary costOfTrip={this.props.tripCost} options={this.props.options} />
        </Col>
      </Row>
    );
  }
}

export default OrderForm;

