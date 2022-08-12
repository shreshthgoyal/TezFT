import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Service from './components/Service';
import Trend from './components/Trend';
// import Steps from './components/Steps';

import Profile from './components/Profile';
import { connectWallet, getAccount } from './utils/wallet';
import { useEffect, useState } from 'react';
// import { tezos } from './utils/tezos';
import {mintNFT} from './utils/actions';
import axios from 'axios';
import config from './utils/config';


function truncate(str){
  return str.slice(0, 3) + '...' + str.slice(str.length-3, str.length) ;
};



function App() {
  const [activeAccount, setActiveAccount] = useState()
  // const [openFileSelector, { filesContent }] = useFilePicker({
	// 	accept: [".png", ".jpg", ".jpeg", ".gif"],
	// 	multiple: false,
	// 	readAs: "ArrayBuffer",
	// });
  let address;

  const fetchContract = async () => {
    console.log("here")
    try{
      const res = await axios.get(
				`https://api.jakartanet.tzkt.io/v1/contracts/${config.contractAddress}/bigmaps/data/keys`
			);
			const response1 = await axios.get(
				`https://api.jakartanet.tzkt.io/v1/contracts/${config.tokenAddress}/bigmaps/token_metadata/keys`
			);
      console.log(res, response1);
			const d1 = res.data;
			const d2 = response1.data;
      console.log(d1, d2);
    } catch (e) {
			console.log(e);
		}
  }
  

  const handleWallet = async () => {
    await connectWallet();
    const activeAccount = await getAccount();
    setActiveAccount(activeAccount);
  }


 useEffect( () => {
  async function fetchAccount() {
    const account = await getAccount();
    setActiveAccount(account);
  }

  fetchAccount()
  
 }, [])
  return (
    <div className="app">
    <header className="app-header">
      <Header />
      <Navigation />
      <div className="app-header-actions">
        <button className="user-profile">
          <span>{activeAccount ? <div className="account-address">{truncate(activeAccount)}  <div className="innerText">
        {activeAccount}
       </div> </div>  : "Connect to Wallet"}</span>
          <span>
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/tezor-5655812-4713525.png" />
          </span>
        </button>
        <div className="app-header-actions-buttons">
          <button className="icon-button large">
            <i className="ph-magnifying-glass" onClick={fetchContract}></i>
          </button>
          {/* <button className="icon-button large">
            <i className="ph-wallet" onClick={(event) => {
							openFileSelector();
							event.preventDefault();
						}}></i>
          </button> */}
          <button className="icon-button large"  id= {activeAccount?"enable":""} onClick={handleWallet}>
            <i className="ph-wallet"></i>
          </button>
          
        </div>
      </div>
      <div className="app-header-mobile">
        <button className="icon-button large">
          <i className="ph-list"></i>
        </button>
      </div>  
    </header>
    <div className="app-body">
      <div className="app-body-main-content">
        <Landing /> 
        {/* <Steps /> */}
        <Service />
        <Trend />
      </div>
      {/* <div className="app-body-sidebar">
        <section className="payment-section">
          <h2>New Payment</h2>
          <div className="payment-section-header">
            <p>Choose a card to transfer money</p>
            <div>
              <button className="card-button mastercard">
                <svg width="2001" height="1237" viewBox="0 0 2001 1237" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="a624784f2834e21c94a1c0c9a58bbbaa">
                    <path id="7869b07bea546aa59a5ee138adbcfd5a" d="M1270.57 1104.15H729.71V132.15H1270.58L1270.57 1104.15Z" fill="currentColor"></path>
                    <path id="b54e3ab4d7044a9f288082bc6b864ae6" d="M764 618.17C764 421 856.32 245.36 1000.08 132.17C891.261 46.3647 756.669 -0.204758 618.09 9.6031e-07C276.72 9.6031e-07 0 276.76 0 618.17C0 959.58 276.72 1236.34 618.09 1236.34C756.672 1236.55 891.268 1189.98 1000.09 1104.17C856.34 991 764 815.35 764 618.17Z" fill="currentColor"></path>
                    <path id="67f94b4d1b83252a6619ed6e0cc0a3a1" d="M2000.25 618.17C2000.25 959.58 1723.53 1236.34 1382.16 1236.34C1243.56 1236.54 1108.95 1189.97 1000.11 1104.17C1143.91 990.98 1236.23 815.35 1236.23 618.17C1236.23 420.99 1143.91 245.36 1000.11 132.17C1108.95 46.3673 1243.56 -0.201169 1382.15 -2.24915e-05C1723.52 -2.24915e-05 2000.24 276.76 2000.24 618.17" fill="currentColor"></path>
                  </g>
                </svg>
              </button>
              <button className="card-button visa active">
                <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 141.732 141.732">
                  <g fill="currentColor">
                    <path d="M62.935 89.571h-9.733l6.083-37.384h9.734zM45.014 52.187L35.735 77.9l-1.098-5.537.001.002-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s4.691.976 10.181 4.273l8.456 32.479h10.141l15.485-37.385H45.014zM121.569 89.571h8.937l-7.792-37.385h-7.824c-3.613 0-4.493 2.786-4.493 2.786L95.881 89.571h10.146l2.029-5.553h12.373l1.14 5.553zm-10.71-13.224l5.114-13.99 2.877 13.99h-7.991zM96.642 61.177l1.389-8.028s-4.286-1.63-8.754-1.63c-4.83 0-16.3 2.111-16.3 12.376 0 9.658 13.462 9.778 13.462 14.851s-12.075 4.164-16.06.965l-1.447 8.394s4.346 2.111 10.986 2.111c6.642 0 16.662-3.439 16.662-12.799 0-9.72-13.583-10.625-13.583-14.851.001-4.227 9.48-3.684 13.645-1.389z" />
                  </g>
                  <path d="M34.638 72.364l-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s7.373 1.528 14.445 7.253c6.762 5.472 8.967 12.292 8.967 12.292z" fill="currentColor" />
                  <path fill="none" d="M0 0h141.732v141.732H0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="payments">
            <div className="payment">
              <div className="card green">
                <span>01/22</span>
                <span>
                  •••• 4012
                </span>
              </div>
              <div className="payment-details">
                <h3>Internet</h3>
                <div>
                  <span>$ 2,110</span>
                  <button className="icon-button">
                    <i className="ph-caret-right-bold"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="payment">
              <div className="card olive">
                <span>12/23</span>
                <span>
                  •••• 2228
                </span>
              </div>
              <div className="payment-details">
                <h3>Universal</h3>
                <div>
                  <span>$ 5,621</span>
                  <button className="icon-button">
                    <i className="ph-caret-right-bold"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="payment">
              <div className="card gray">
                <span>03/22</span>
                <span>
                  •••• 5214
                </span>
              </div>
              <div className="payment-details">
                <h3>Gold</h3>
                <div>
                  <span>$ 3,473</span>
                  <button className="icon-button">
                    <i className="ph-caret-right-bold"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="faq">
            <p>Most frequently asked questions</p>
            <div>
              <label>Question</label>
              <input type="text" placeholder="Type here"/>
            </div>
          </div>
          <div className="payment-section-footer">
            <button className="save-button">
              Save
            </button>
            <button className="settings-button">
              <i className="ph-gear"></i>
              <span>More settings</span>
            </button>
          </div>
        </section>
      </div> */}
    </div>
  </div>
  );
}

export default App;
