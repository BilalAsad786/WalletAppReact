import React, { Component } from "react";
import DashboardItem from "./DashboardItem";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {getwallets} from '../../actions/projectActions'

class Dashboard extends Component {
  componentDidMount(){
    this.props.getwallets()
  }
  render() {
    const wallets=this.props.wallets
    const walletComponet=wallets.map(wallet=>(  <DashboardItem key={wallet.id} wallet={wallet}/>))
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">My Wallets</h1>
              <br />
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-info btn-lg dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Create new
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/createwallet">
                    Wallet
                  </Link>
                  <button disabled className="dropdown-item">
                    Transaction
                  </button>
                </div>
              </div>
              <br />
              <div className="card text-center">
                <div className="card-header bg-success text-white">
                  <h4>Current Balance (Total)</h4>
                  <h1>Rs. 27000</h1>
                </div>
              </div>
              <hr />

              {
                //    <!-- Project Item Component -->
              }
              {walletComponet}
            
              {
                // <!-- End of Project Item Component -->
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
  wallets:state.wallet.wallets
})
export default connect(mapStateToProps,{getwallets})(Dashboard);