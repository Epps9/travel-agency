import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice'; 
import propTypes from 'prop-types';


const OrderOptionIcons = ({values, required, setOptionValue}) => (
  <div className={styles.component}>
    {required ? '' : (
      <div className={styles.icon} onClick={event => event.setOptionValue('')}>
        <Icon name={'times-circle'}>
      none
      ({formatPrice(value.price)})
        </Icon>
      </div>
    )}

    {values.map(value =>(
      <div className={styles.icon} key={value.id} onClick={event => setOptionValue(event.currentTarget.value.id)}>
        <Icon name={value.icon}>
        </Icon>
        {value.name}
        ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: propTypes.array,
  currentValue: propTypes.node,
  setOptionValue: propTypes.func,
};

export default OrderOptionIcons;