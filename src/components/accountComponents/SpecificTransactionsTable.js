import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import '../../../src/App.css';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class SpecificTransactionsTable extends Component {
  render(){
    let { transactions } = this.props;
    console.log('transactions', transactions)
    const transactionItems = transactions.map((transaction) =>
      <tr className="paddingVertical transactionItems" key={transaction.id}>
        <td width="175">{transaction.date}</td>
        <td width="175">{transaction.payee}</td>
        <td width="175">{transaction.category}</td>
        <td width="175">{transaction.memo}</td>
        <td width="175">{transaction.outflow}</td>
        <td width="175">{transaction.inflow}</td>
        {transaction.clear &&
          <td width="175"><FontAwesomeIcon icon={faCheck} /></td>
        }
      </tr>
    );
    // debugger;

    return(
      <div className="border paddingTop">
        <Table>
          <thead>
            <tr className="paddingVertical">
              <th width="175">Date</th>
              <th width="175">Payee</th>
              <th width="175">Category</th>
              <th width="175">Note</th>
              <th width="175">Outflow</th>
              <th width="175">Inflow</th>
              <th width="175">Cleared</th>
            </tr>
          </thead>
          <tbody >
            {transactionItems}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    transactions: state.firestore.ordered.transactions,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'transactions' }
  ])
)(SpecificTransactionsTable)