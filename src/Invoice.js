import React from "react";
import {useAuth0} from '@auth0/auth0-react';
import { Link } from "react-router-dom";

const Invoice = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user
  } = useAuth0();
  const isUser = isAuthenticated && user;
    return (
        <div>
          {/* metas */}
          <meta charSet="utf-8" />
          <meta name="author" content="Satoshi Nakamoto" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="keywords" content="Bank Logs" />
          <meta name="description" content="Dark Net" />
          {/* title  */}
          <title id="the-bitcoin-bank1">Invoice</title>
          <link rel="shortcut icon" id="log_image1" />
          <link rel="apple-touch-icon" id="log_image2" />
          <link rel="apple-touch-icon" sizes="72x72" id="log_image3" />
          <link rel="apple-touch-icon" sizes="114x114" id="log_image4" />
          <link rel="stylesheet" href="css/plugins/bootstrap.min.css" />
          <link rel="stylesheet" href="css/plugins/default.css" />
          <link rel="stylesheet" href="css/plugins/fontawesome-all.min.css" />
          <link rel="stylesheet" href="css/plugins/nav-menu.css" />
          <link rel="stylesheet" href="css/plugins/owl.carousel.min.css" />
          <link href="css/switcher.css" rel="stylesheet" />
          {/* custom css */}
          <link id="thecss" rel="stylesheet" />
          <link href="css/toastr.css" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{__html: "\n@-webkit-keyframes spinner-bordez {\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spinner-bordez {\nto {\n\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); \n} \n}\n\n.spinner-bordez {\n    border-color: transparent;\n    border-radius: 50%;\n    -webkit-animation: spinner-border .67s linear infinite;\n    animation: spinner-border .67s linear infinite; \n}\n    " }} />
          {/* start page loading */}
          <div id="preloader">
            <div className="row loader">
              <div className="loader-icon" />
            </div>
          </div>
          {/* end page loading */}
          {/* start main-wrapper section */}
          <div className="main-wrapper">
            {/* start header ection */}
            <header className="header-style8" id="home">
              <div className="navbar-default">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-12">
                      <div className="menu_area alt-font">
                        <nav className="navbar navbar-expand-lg navbar-light no-padding">
                          <div className="navbar-header navbar-header-custom">
                      {/* Start Logo */}
                      <Link className="navbar-brand logodefault">
                        <img src="img/logos/name.png" alt="" />
                        {isUser && user.name &&  <span id="jinaHolder" style={{fontSize: '14px'}}>{user.name.toUpperCase()}</span>}
                      </Link>
                      {/* End Logo */}
                          </div>
                          <div className="navbar-toggler" />
                          {/* Menu */}
                          <ul className="navbar-nav ml-auto" id="nav" style={{display: 'none'}}>
                            <li className="sm-display-none">
                              <a href="huntington">
                                <img src="img/partners/huntington.jpg" className="kaimage" alt=""/>
                                Huntington
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="woodforest">
                                <img src="img/partners/woodforest.jpg" className="kaimage" alt=""/>
                                Woodforest
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="pnc">
                                <img src="img/partners/pnc.jpg" className="kaimage" alt=""/>
                                PNC 
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="chase">
                                <img src="img/partners/chase.jpg" className="kaimage" alt=""/>
                                Chase
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="nfcu">
                                <img src="img/partners/nfcu.jpg" className="kaimage" alt=""/>
                                NFCU
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="chime">
                                <img src="img/partners/chime.jpg" className="kaimage" alt=""/>
                                Chime
                              </a>
                            </li>                                                                                    
                            <li className="sm-display-none">
                              <a href="citi">
                                <img src="img/partners/citi.jpg" className="kaimage" alt=""/>
                                Citi
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="bbva">
                                <img src="img/partners/bbva.jpg" className="kaimage" alt=""/>
                                BBVA
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="bb&t">
                                <img src="img/partners/bbt.jpg" className="kaimage" alt=""/>
                                BB&amp;T
                              </a>
                            </li>
                            <li className="sm-display-none">
                              <a href="suntrust">
                                <img src="img/partners/suntrust.jpg" className="kaimage" alt="" />
                                Suntrust
                              </a>
                            </li> 
                            <li className="lg-display-none">
                              <a href="huntington">
                                <img src="img/partners/huntington.jpg" className="keimage" alt=""/>
                                Huntington Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="woodforest">
                                <img src="img/partners/woodforest.jpg" className="keimage" alt=""/>
                                Woodforest Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="pnc">
                                <img src="img/partners/pnc.jpg" className="keimage" alt=""/>
                                PNC Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="chase">
                                <img src="img/partners/chase.jpg" className="keimage" alt=""/>
                                Chase Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="nfcu">
                                <img src="img/partners/nfcu.jpg" className="keimage" alt=""/>
                                NFCU Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="chime">
                                <img src="img/partners/chime.jpg" className="keimage" alt=""/>
                                Chime Bank
                              </a>
                            </li>                                                                                    
                            <li className="lg-display-none">
                              <a href="citi">
                                <img src="img/partners/citi.jpg" className="keimage" alt=""/>
                                Citi Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="bbva">
                                <img src="img/partners/bbva.jpg" className="keimage" alt=""/>
                                BBVA Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="bb&t">
                                <img src="img/partners/bbt.jpg" className="keimage" alt=""/>
                                BB&amp;T Bank
                              </a>
                            </li>
                            <li className="lg-display-none">
                              <a href="suntrust">
                                <img src="img/partners/suntrust.jpg" className="keimage" alt=""/>
                                Suntrust Bank
                              </a>
                            </li> 
                          </ul>
                          {/* End Me Ar */}
                    {/* Start Atribute Navigation */}
                    <div className="attr-nav xs-margin-55px-right">
                      <ul>
                        <li className="dropdown sm-no-margin">
                          <Link className="dropdown-toggle" data-toggle="dropdown">
                          {isUser && user.picture ? (
                              <img src={user.picture} alt={user.name} className="cart-thumb" />
                            ) : (
                              <img src="img/logos/name.png" className="cart-thumb" alt="" />
                          )}

                            <span className="badge bg-theme">
                              6
                            </span>
                          </Link>
                          <ul className="dropdown-menu cart-list">
                            <li className="total bg-theme">
                              <span className="pull-left font-weight-600 font-size14"/>
                              {isUser ? (
                                <Link onClick={() => {
                                  logout({ returnTo: window.location.origin });
                                  }} className="butn small btn-cart white">
                                    <span className="font-weight-600 font-size14" style={{color: 'red'}}>
                                      <i className="fas fa-sign-out" />
                                      Log Out
                                    </span>
                                </Link>
                              ) : (
                                <Link onClick={loginWithRedirect} className="butn small btn-cart white">
                                    <span className="font-weight-600 font-size14" style={{color: 'red'}}>
                                      <i className="fas fa-sign-out" />
                                      Login
                                    </span>
                                </Link>
                              )}
                            </li>
                            <li className="total bg-theme">
                              <a href="profile" className="butn small btn-cart white">
                                <span className="font-weight-600 font-size14">
                                  Profile
                                  <i className="fas fa-user-check" />
                                </span>
                              </a>
                            </li>
                            <li className="total bg-theme">
                              <a href="paypal" className="butn small btn-cart white">
                                <span className="font-weight-600 font-size14">
                                  PayPal Cashout Method
                                  <i className="icon-presentation" style={{fontWeight: 700, color: 'aqua'}} />
                                </span>
                              </a>
                            </li>
                            <li className="total bg-theme">
                              <a href="navyfederal" className="butn small btn-cart white">
                                <span className="font-weight-600 font-size14">
                                  Navy Federal Method
                                  <i className="icon-presentation" style={{fontWeight: 700, color: 'aqua'}} />
                                </span>
                              </a>
                            </li>
                            <li className="total bg-theme">
                              <a href="pdf/paypal.pdf" className="butn small btn-cart white">
                                <span className="font-weight-600 font-size14">
                                  PayPal Pdf
                                  <i className="fas fa-file-pdf" />
                                </span>
                              </a>
                            </li>
                            <li className="total bg-theme">
                              <Link className="butn small btn-cart white">
                                <span className="font-weight-600 font-size14" id="yourIp">
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* End Atribute Naviga */}
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* end header section */}
            <section className="no-padding-top no-margin-top no-margin-bottom no-padding-bottom">
              <div className="container-fluid">
                {/* Start Product Section */}
                <div className="row no-margin-bottom">
                  <div className="col-lg-4 col-md-6 abundalakk">
                    <ul className="list-style-5 text-black">
                      <li id="log_price" className="zatozi text-theme-color" />
                      <li className="font-size16 font-weight-600 text-theme-color satoshi">
                        {isUser && user.name &&  <strong id="jinaHolder" style={{fontSize: '14px'}}>Invoice to: {user.name.toLocaleUpperCase()}</strong>}
                      </li>
                      <li id="log_type" className="satoshi" style={{margin: '2px 0'}} />
                      <li id="log_website" className="satoshi" style={{margin: '2px 0'}} />
                      <li id="log_details" className="satoshi" style={{margin: '2px 0'}} />
                      <li id="log_extra" className="satoshi" style={{margin: '2px 0'}} />
                      <li id="log_extra1" className="satoshi" style={{margin: '2px 0'}} />
                      <li id="log_extra2" className="satoshi" style={{margin: '2px 0'}} />
                      <li id="log_extra3" className="satoshi" style={{margin: '2px 0'}} />
                      <li id="log_balance" className="zatozi text-theme-color" />
                      <li className="font-size14 font-weight-600">
                        <button type="button" id="showtoast" className="butn large invoicebutton" style={{border: '1px solid #03a9d5', color: '#000', background: 'gold'}}>     
                          <span style={{fontWeight: 600, fontSize: '20px'}}>
                            <i className="fas fa-print margin-10px-right" />
                            Print
                            Log Details
                          </span>
                        </button>
                      </li>
                      <li id="clentIp" className="satoshi" style={{margin: '2px 0'}}>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-6" style={{marginTop: '5px'}}>
                    {/* product left start */}
                    <p>
                      <strong className="satoshinakamoto text-theme-color" style={{fontSize: '18px'}}>
                        <i className="fas fa-spin fa-sync-alt spinner-bordez margin-5px-right" />
                        awaiting <span id="log_bitcoin" /> bitcoin payment
                      </strong>
                    </p>
                    <div className="xzoom-container">
                      <div style={{display: 'flex'}}>
                        <input type="text" style={{color: 'black', fontSize: '15px', fontWeight: 700, borderRadius: '3px', border: '2px solid black'}} className="form-control" defaultValue="1AMjPsZQvqeAfnEjfk17fEUZc6rZuM9Ccp" id="text-to-copy" onclick="this.select();" />
                        <button type="button" className="butn large" id="copy-text" style={{color: '#000', background: 'aqua', padding: '0 5px', marginLeft: '4px'}}>     
                          <span style={{fontWeight: 600, fontSize: '20px', margin: 0, padding: 0}} id="copy-text-span">
                            Copy <i className="fas fa-copy" style={{marginLeft: '2px'}} />
                          </span>
                        </button>
                      </div>
                      <img className="margin-30px-bottom" src="images/download.jpeg" alt="" />
                    </div>
                    {/* product left end */}
                  </div>
                  <div className="col-lg-4 col-12 padding-20px-top padding-20px-bottom">
                    <h3 className="margin-8px-bottom" id="log_bank">
                      Bank
                    </h3>  
                    <div className="bg-theme separator-line-horrizontal-full margin-20px-bottom" />
                    <img id="log_image" alt=" " style={{borderRadius: '5px'}} />
                  </div>
                </div>
                {/* End Product Section */}
              </div>
            </section>
            <div>
              {/* start clients section */}
            </div>
            {/* end clients section */}
          </div>
        </div>
      );
    }

    export default Invoice;