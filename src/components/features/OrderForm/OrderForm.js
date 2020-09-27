import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import PageTitle from '../../common/PageTitle/PageTitle';
import OrderSummary from '../OrderSummary/OrderSummary';



class OrderForm extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PageTitle text='Trip options' />
            <OrderSummary />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default OrderForm;

