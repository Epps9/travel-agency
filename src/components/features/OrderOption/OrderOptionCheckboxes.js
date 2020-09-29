import React from 'react';
import styles from './OrderOption.scss';
import propTypes from 'prop-types';

{/*import {formatPrice} from '../../../utils/formatPrice'; */}

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values}) => (
  <div 
    className={styles.checkboxes}>
  
    {values.map(value => (
      <label key={value.id}>
        <input type="checkbox"
          value={value.id} 

      
        >
          {/* checked???
          {currentValue.hasOwnProperty(value.id) ? checked=true}
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
          */}

        </input>
            {value.name}
            (formatPrice{value.price})
      </label>
    ))}
  
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: propTypes.array,
  currentValue: propTypes.node,
  setOptionValue: propTypes.func,
};

export default OrderOptionCheckboxes;