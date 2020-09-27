import React from 'react';
import styles from './OrderSummary.scss';



class OrderSummary extends React.Component {
  render () {
    return (
      <h2 className={styles.component}>Total <strong>$20</strong></h2>
    );
  }
}

export default OrderSummary;


