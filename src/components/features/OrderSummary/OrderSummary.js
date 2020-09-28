import React from 'react';
import styles from './OrderSummary.scss';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import PropTypes from 'prop-types';


class OrderSummary extends React.Component {
  static propTypes = {
    costOfTrip: PropTypes.node,
    options: PropTypes.node,
  }
  render () {
    return (
      <h2 className={styles.component}>Total <strong></strong></h2>,
      formatPrice(calculateTotal(this.props.costOfTrip, this.props.options))
    );
  }
}

export default OrderSummary;


