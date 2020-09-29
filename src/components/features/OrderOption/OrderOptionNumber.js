import React from 'react';
import styles from './OrderOption.scss';
import propTypes from 'prop-types';


const OrderOptionNumber = ({currentValue, limits, setOptionValue}) => (
  <div className={styles.number}>
    <input type="number" className="styles.inputSmall" value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)}></input>
    {/*({parseOptionPrice(value.price)})*/}
  </div>
);

OrderOptionNumber.propTypes = {
  values: propTypes.array,
  limits: propTypes.object,
  currentValue: propTypes.node,
  setOptionValue: propTypes.func,
};

export default OrderOptionNumber;