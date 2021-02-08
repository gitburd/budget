import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import '../../../src/App.css';
import { Link } from "react-router-dom";
import AddTransaction from './AddTransaction'

const TransactionsSummary = (transactions) => {
  transactions = transactions.transactions
  let cleared_balance = 0
  let uncleared_balance = 0

  if(transactions){
    for(let i = 0; i < transactions.length; i++){
      if(transactions[i].clear){
        if(transactions[i].inflow){
          cleared_balance += parseInt(transactions[i].inflow)
        }
        if(transactions[i].outflow){
          cleared_balance -= parseInt(transactions[i].outflow)
        }
      }else if(!transactions[i].clear){
        if(transactions[i].inflow){
          uncleared_balance += parseInt(transactions[i].inflow)
        }
        if(transactions[i].outflow){
          uncleared_balance -= parseInt(transactions[i].outflow)
        }
      }
    }
  }

  let totalBal = cleared_balance + uncleared_balance

  return(
    <div className="border padding">
      <div className="addTransaction">
        <AddTransaction/>
      </div>
      <div className="makeTransfer grid-container2">
        <Link
          to={{
            pathname: "/",
          }}>
          <button >
            <FontAwesomeIcon icon={faPlusCircle} /> Make a transfer
          </button>
        </Link>
        <div className="total">
        Cleared: ${cleared_balance} + Uncleared: ${uncleared_balance}= ${totalBal}
        </div>
      </div>
    </div>
  )
}

export default TransactionsSummary