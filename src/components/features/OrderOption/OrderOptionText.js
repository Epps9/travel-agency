import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionText = ({setOptionValue}) => (
  <div>
    <input 
      type='text' 
      onChange={event => setOptionValue(event.currentTarget.value)}
    ></input>
  </div>
);

OrderOptionText.propTypes = {
  id: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
