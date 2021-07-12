import React from "react";
import {useAuth0} from '@auth0/auth0-react';
import { Link } from "react-router-dom";

const Paypal = () => {
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
          <link href="css/styles.css" rel="stylesheet" id="colors" />
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
            <section id="cd-timeline" style={{padding: 0, margin: 0}} className="cd-container">
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-success">
                  <i className="fas fa-tags" />
                </div>
                {/* cd-timeline-img */}
                <div className="cd-timeline-content">
                  <h4>Step 1</h4>
                  <img src="cashout/1.jpg" alt=""/>
                  <p>Login to an Old PayPal account</p>
                </div>
                {/* cd-timeline-content */}
              </div>
              {/* cd-timeline-block */}
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-danger">
                  <i className="fas fa-map-marker-alt" />
                </div>
                {/* cd-timeline-img */}
                <div className="cd-timeline-content">
                  <h4>Step 2</h4>
                  <img src="cashout/2.jpg" alt=""/>
                  <p>Click on WALLET on the top menu</p>
                </div>
                {/* cd-timeline-content */}
              </div>
              {/* cd-timeline-block */}
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-info">
                  <i className="fas fa-star" />
                </div>
                {/* cd-timeline-img */}
                <div className="cd-timeline-content">
                  <h4>Step 3</h4>
                  <img src="cashout/3.jpg" alt=""/>
                  <p>Now click on LINK A CARD OR BANK</p>
                </div>
                {/* cd-timeline-content */}
              </div>
              {/* cd-timeline-block */}
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-info">
                  <i className="fas fa-comments" />
                </div>
                {/* cd-timeline-img */}
                <div className="cd-timeline-content">
                  <h4>Step 4</h4>
                  <img src="cashout/4.jpg" alt="" />
                  <p>Click on LINK A BANK ACCOUNT (u can add cc if it cc u want to work with)</p>
                </div>
                {/* cd-timeline-content */}
              </div>
              {/* cd-timeline-block */}
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-warning">
                  <i className="fas fa-pen-square" />
                </div>
                {/* cd-timeline-img */}
                <div className="cd-timeline-content">
                  <h4>Step 5</h4>
                  <img src="cashout/5.jpg" alt="" />
                  <p>Now you can choose your bank account from this list, 
                    I bought a suntrust bank login 
                    so will choose SUNTRUST/HUNTINGTON/CHASE
                  </p>
                </div>
                {/* cd-timeline-content */}
              </div>
              {/* cd-timeline-block */}
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-primary">
                  <i className="fas fa-paperclip" />
                </div>
                {/* cd-timeline-img */}
                <div className="cd-timeline-content">
                  <h4>Step 6</h4>
                  <img src="cashout/6.jpg" alt="" />
                  <p>You will input the account and routine number of bank info u bought from the shop or spammer</p>
                </div>
                {/* cd-timeline-content */}
              </div>
              {/* cd-timeline-block */}
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-primary">
                  <i className="fas fa-paperclip" />
                </div>
                {/* cd-timeline-img */}
                <div className="cd-timeline-content">
                  <h4>Step 7</h4>
                  <img src="cashout/7.jpg" alt="" />
                  <p>After that, click on AGREE AND LINK</p>
                </div>
                {/* cd-timeline-content */}
              </div>
              {/* cd-timeline-block */}
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-primary">
                  <i className="fas fa-paperclip" />
                </div>
                {/* cd-timeline-img */}
                <div className="cd-timeline-content">
                  <h4>Step 8</h4>
                  <img src="cashout/8.jpg" alt="" />
                  <p>Now this the next Page, to make this transfer Faster, click on CONFIRM INSTANTLY INSTEAD</p>
                  <p>Enter the username and password of the bank login info u bought and click CONFIRM INSTANTLY</p>
                </div>
                {/* cd-timeline-content */}
              </div>
              {/* cd-timeline-block */}
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-primary">
                  <i className="fas fa-paperclip" />
                </div>
                {/* cd-timeline-img */}
                <div className="cd-timeline-content">
                  <h4>Step 9</h4>
                  <img src="cashout/9.jpg" alt="" />
                  <p>A code will be sent to the EMAIL ATTACHED TO THE BANK INFO u bought , 
                    always make sure u are using a bank log with email attached , 
                    it makes the job more professional
                  </p>
                </div>
                {/* cd-timeline-content */}
              </div>
              {/* cd-timeline-block */}
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-primary">
                  <i className="fas fa-paperclip" />
                </div>
                {/* cd-timeline-img */}
                <div className="cd-timeline-content">
                  <h4>Step 10</h4>
                  <img src="cashout/10.jpg" alt="" />
                  <p>Finally done ✅ ✅ ✅</p>
                </div>
                {/* cd-timeline-content */}
              </div>
              {/* cd-timeline-block */}
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-primary">
                  <i className="fas fa-paperclip" />
                </div>
                {/* cd-timeline-img */}
                <div className="cd-timeline-content">
                  <h4>Step 11</h4>
                  <img src="cashout/11.jpg" alt="" />
                  <p>Click on ADD MONEY TO YOUR BALANCE</p>
                </div>
                {/* cd-timeline-content */}
              </div>
              {/* cd-timeline-block */}
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-primary">
                  <i className="fas fa-paperclip" />
                </div>
                {/* cd-timeline-img */}
                <div className="cd-timeline-content">
                  <h4>Step 12</h4>
                  <img src="cashout/12.jpg" alt="" />
                  <p>You will choose the bank added and then input AMOUNT</p>
                  <p>PayPal takes 2days to reflect for almost all banks 
                    but it will reflect INSTANTLY if you use the following banks 
                    -USAA
                    -NFCU
                    or any Bank with FEDERAL next to it
                    Apart from that, just continue with the 2days reflection, 
                    all the ones I do are  24hours reflection so no need to rush\
                  </p>
                </div>
                {/* cd-timeline-content */}
              </div>
              {/* cd-timeline-block */}
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-primary">
                  <i className="fas fa-paperclip" />
                </div>
                {/* cd-timeline-img */}
                <div className="cd-timeline-content">
                  <h4>Step 13</h4>
                  <img src="cashout/13.jpg" alt="" />
                  <p>Money added 💰 💰 ✅ ✅</p>
                </div>
                {/* cd-timeline-content */}
              </div>
              {/* cd-timeline-block */}
            </section>
            {/* cd-timeline */}
          </div>
          <div id="style-switcher">
            <Link className="switcher-setting"><i className="fa fa-cog fa-spin" /></Link>
            <div className="choose-color">
              <h2>Change Theme Color</h2>
              <ul className="colors" id="color1">
                <li><Link className="style1" /></li>
                <li><Link className="style2" /></li>
                <li><Link className="style3" /></li>
                <li><Link className="style4" /></li>
                <li><Link className="style5" /></li>
                <li><Link className="style6" /></li>
                <li><Link className="style7" /></li>
                <li><Link className="style8" /></li>
              </ul>
            </div>
          </div>
          <Link className="scroll-to-top">
            <i className="fas fa-angle-up text-theme-color" aria-hidden="true">
            </i>
          </Link>
        </div>
      );
    }

    export default Paypal;