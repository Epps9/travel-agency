import React from 'react';
import styles from './OrderOption.scss';

const OrderOption = (option) => (
  <div className={styles.component}>
    <h3 className={styles.title}>
      {option.id}
    </h3>
  </div>
);

export default OrderOption;