import React from "react";
import {useAuth0} from '@auth0/auth0-react';
import {Link} from 'react-router-dom';

const NavyFederal = () => {
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
      <title>NFCU Method</title>
      <link rel="shortcut icon" href="img/partners/nfcu.jpg" />
      <link rel="apple-touch-icon" href="img/partners/nfcu.jpg" />
      <link rel="apple-touch-icon" sizes="72x72" href="img/partners/nfcu.jpg" />
      <link rel="apple-touch-icon" sizes="114x114" href="img/partners/nfcu.jpg" />
      <link rel="stylesheet" href="css/plugins/bootstrap.min.css" />
      <link rel="stylesheet" href="css/plugins/default.css" />
      <link rel="stylesheet" href="css/plugins/fontawesome-all.min.css" />
      <link rel="stylesheet" href="css/plugins/nav-menu.css" />
      <link rel="stylesheet" href="css/plugins/owl.carousel.min.css" />
      <link href="css/switcher.css" rel="stylesheet" />
      <link rel="stylesheet" href="css/plugins/vertical.css" />
      {/* custom css */}
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
              {/* <h4>Step 1</h4> */}
              <p>
                Stay tuned my guys The next tutorial am gon'  teach  yah is how to open Up 
                “NAVY FEDERAL CREDIT UNION
                I take it as if everyone here knows how to buy SSN so please I need you to get your drops and SSN’s ready
                In case you don’t know what SSN is
                It’s social security number
              </p>
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
              <h4>Step 1</h4>
              <img src="navy/nfcu1.jpg" alt="" />
              <p>
                Please start setting off your VPNs and RDPs
                <br />
                First google Navy federal credit union and select become a member
                Click on Join now or sign up
                <br />
                Please phone also works even if not on RDP
              </p>
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
              <img src="navy/nfcu2.jpg" alt=""/>
              <p>
                Now select
                "Im serving or have served in the military
              </p>
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
              <img src="navy/nfcu3.jpg" alt="" />
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
              <img src="navy/nfcu4.jpg" alt="" />
              <img src="navy/nfcu5.jpg" alt="" />
              <p>
                Now select 'I'm a veteran".
                After, you can select
                "Navy" or "Army"
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
              <img src="navy/nfcu6.jpg" alt="" />
              <p>
                Select
                "Retired/still employed"
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
              <h4>Step 7</h4>
              <img src="navy/nfcu7.jpg" alt="" />
              <p>
                You will see this, 
                Agree and continue
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
              <h4>Step 8</h4>
              <img src="navy/nfcu8.jpg" alt="" />
              <p>You can begin putting your SSN details in</p>
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
              <img src="navy/nfcu9.jpg" alt="" />
              <p>the next page
                File in the number and email you created and scroll down
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
              <img src="navy/nfcu10.jpg" alt="" />
              <p> Under the "Address type"
                Select US
                <br />
                Fill in your drop's address
                <br />
                Please note this point well. 
                Your drop address not address on the Ssn 
                you are using but if same person will 
                receive the card then you don’t have any problem
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
              <h4>Step 11</h4>
              <img src="navy/nfcu11.jpg" alt="" />
              <p>Under"Zip code"
                You will see " Have you lived at this address longer than 6 months?"
                Select "NO"</p>
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
              <img src="navy/nfcu12.jpg" alt="" />
              <p> Put in the SSN victim's SSN address as previous address
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
              <img src="navy/nfcu13.jpg" alt="" />
              <p>put in the ID either state ID or DL 
                And select the State
                <br />
                If you bought the fullz and you don’t have the dL or state ID just generate fake one
              </p>
            </div>
            {/* cd-timeline-content */}
          </div>
          {/* cd-timeline-block */}
          {/* cd-timeline-block */}
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-danger">
              <i className="fas fa-map-marker-alt" />
            </div>
            {/* cd-timeline-img */}
            <div className="cd-timeline-content">
              <h4>Step 14</h4>
              <img src="navy/nfcu14.jpg" alt=""/>
              <p>
                Now fill in the Work details that can be be found 
                the the JOB description side of the website you used to build the SSN fullz
              </p>
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
              <h4>Step 15</h4>
              <img src="navy/nfcu15.jpg" alt=""/>
              <p>
                now my is a Insurance Broker in Hartford Ins Group so i just filled it
              </p>
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
              <h4>Step 16</h4>
              <img src="navy/nfcu16.jpg" alt="" />
              <p>You can select any of the accounts but mostly just leave it at first one
              </p>
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
              <h4>Step 17</h4>
              <img src="navy/nfcu17.jpg" alt="" />
              <p>
                Now Navy would want you to fund your account
                Select" Mail a check" on
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
              <h4>Step 18</h4>
              <img src="navy/nfcu18.jpg" alt="" />
              <p>
                This next screen you get is this
                SO just put in the debit card pin you would like to use and continue
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
              <h4>Step 19</h4>
              <img src="navy/nfcu19.jpg" alt="" />
              <p>
                Now you get to this page and you have to scroll down to agree with Navy Fed terms and conditions which brings you here
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
              <h4>Step 20</h4>
              <img src="navy/nfcu20.jpg" alt="" />
              <p>Agree and continue</p>
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
              <h4>Step 21</h4>
              <img src="navy/nfcu21.jpg" alt="" />
              <p>The last step is this
                Here it will be decided if they will approve you instantly or not
                SUBMIT APPLICATION
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
              <h4>Step 22</h4>
              <img src="navy/nfcu22.jpg" alt="" />
              <p>  See, easy as ABCD dawg,Real Quick💯
                Now we click on Continue
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
              <h4>Step 23</h4>
              <img src="navy/nfcu23.jpg" alt="" />
              <p>Now you set up online banking
                Which is your preferred username and password</p>
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
              <h4>Step 24</h4>
              <img src="navy/nfcu24.jpg" alt="" />
              <p>After you select a Username and password
                Click on
                "Go paperless
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
              <h4>Step 25</h4>
              <img src="navy/nfcu25.jpg" alt="" />
              <p>Now this is a summary of my account details so i will copy and paste them somewhere safe and click on 'SIgn IN"
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
              <h4>Step 26</h4>
              <img src="navy/nfcu26.jpg" alt="" />
              <p> It will open  a new tab and take you to the login page
                Put in your username and password
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
              <h4>Step 27</h4>
              <img src="navy/nfcu27.jpg" alt="" />
              <p> it will ask you to verify your identity
                In that case they will send a code(numbers only) to your phone or email depending on which one you prefer
                I prefer email
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
              <h4>Step 28</h4>
              <img src="navy/nfcu28.jpg" alt="" />
              <p> I put in the code and i am in
                This is my Navyfed Account
                My drop will receive the card in 7 business days
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
              <h4>Step 29</h4>
              <p>-Now you can use name and SSN of the victim to apply for unemployment benefits and use the account numbers to receive your money
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
              <h4>Step 30</h4>
              <p>
                Done ✅ ✅
                Good Job
              </p>
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

export default NavyFederal;