import React from 'react';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderSummary from '../../features/OrderSummary/OrderSummary';

import {Row, Col} from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';

import Button from '../../common/Button/Button';

import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripDetails) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    ...tripDetails,
  };

  if (payload.contact != '' && payload.name != '' && payload['start-date'] != '') {
    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    alert('Required: Name, Contact and Date');
  }
};

const OrderForm = ({tripCost, options, setOrderOption, tripDetails}) => (
  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption currentValue ={options[option.id]} setOrderOption={setOrderOption} {...option}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
    <Button onClick={() => sendOrder(options, tripCost, tripDetails)}>Order now!</Button>
  </Row>
  
);

OrderForm.propTypes = {
  tripCost: PropTypes.any,
  options: PropTypes.any,
  setOrderOption: PropTypes.func,
  tripDetails: PropTypes.object,
};

export default OrderForm;
