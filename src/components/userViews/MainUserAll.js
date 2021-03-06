import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'
import TransactionsSummary from '../accountComponents/TransactionsSummary'
import TransactionsTable from '../accountComponents/TransactionsTable'
import '../../../src/App.css';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class MainUserSpecific extends Component {
  render(){
    let { transactions} = this.props;

    return (
      <div className="App">
        <h2 className="section-title paddingTop">All Accounts</h2>
        <TransactionsTable transactions={transactions} view='all'/>
        <TransactionsSummary transactions={transactions}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.firestore.ordered.transactions,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'transactions' }
  ])
)(MainUserSpecific)
