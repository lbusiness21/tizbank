import React from "react";
import {useAuth0} from '@auth0/auth0-react';
import {Link} from 'react-router-dom';

const Chime = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user
  } = useAuth0();
  const isUser = isAuthenticated && user;

    function chime1() {
        localStorage.setItem('price', 298);
        localStorage.setItem('balance','14,905');
        localStorage.setItem('type','chime.com Savings Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime2() {
        localStorage.setItem('price', 302);
        localStorage.setItem('balance','15,209');
        localStorage.setItem('type','chime.com Savings Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime3() {
        localStorage.setItem('price', 320);
        localStorage.setItem('balance','16,127');
        localStorage.setItem('type','chime.com Checking Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime4() {
        localStorage.setItem('price', 349);
        localStorage.setItem('balance','17,620');
        localStorage.setItem('type','chime.com Checking Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime5() {
        localStorage.setItem('price', 374);
        localStorage.setItem('balance','18,730');
        localStorage.setItem('type','chime.com Savings Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime6() {
        localStorage.setItem('price', 390);
        localStorage.setItem('balance','19,536');
        localStorage.setItem('type','chime.com Savings Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime7() {
        localStorage.setItem('price', 407);
        localStorage.setItem('balance','20,358');
        localStorage.setItem('type','chime.com Checking Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime8() {
        localStorage.setItem('price', 427);
        localStorage.setItem('balance','21,390');
        localStorage.setItem('type','chime.com Savings Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime9() {
        localStorage.setItem('price', 570);
        localStorage.setItem('balance','28,491');
        localStorage.setItem('type','chime.com Savings Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime10() {
        localStorage.setItem('price', 586);
        localStorage.setItem('balance','29,350');
        localStorage.setItem('type','chime.com Savings Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime11() {
        localStorage.setItem('price', 611);
        localStorage.setItem('balance','30,710');
        localStorage.setItem('type','chime.com Savings Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime12() {
        localStorage.setItem('price', 629);
        localStorage.setItem('balance','31,215');
        localStorage.setItem('type','chime.com Savings Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime13() {
        localStorage.setItem('price', 685);
        localStorage.setItem('balance','35,142');
        localStorage.setItem('type','chime.com Savings Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime14() {
        localStorage.setItem('price', 709);
        localStorage.setItem('balance','36,203');
        localStorage.setItem('type','chime.com Savings Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime15() {
        localStorage.setItem('price', 761);
        localStorage.setItem('balance','38,419');
        localStorage.setItem('type','chime.com Checking Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime16() {
        localStorage.setItem('price', 815);
        localStorage.setItem('balance','42,106');
        localStorage.setItem('type','chime.com Checking Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime17() {
        localStorage.setItem('price', 860);
        localStorage.setItem('balance','44,057');
        localStorage.setItem('type','chime.com Savings Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime18() {
        localStorage.setItem('price', 927);
        localStorage.setItem('balance','47,830');
        localStorage.setItem('type','chime.com Savings Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    function chime19() {
        localStorage.setItem('price', 983);
        localStorage.setItem('balance','52,642');
        localStorage.setItem('type','chime.com Checking Account');
        localStorage.setItem('bank','Chime Bank');
        localStorage.setItem('image','images/chime.jpg');
        localStorage.setItem('type1','Name + Address + Email Access');
        localStorage.setItem('type2','Account & Routing Number');
        localStorage.setItem('type3','Date of Birth');
        localStorage.setItem('type4','Client IP + UserAgent');
        localStorage.setItem('type5','Social Security Number');
        localStorage.setItem('type6','Chime Bank [Login: Password]');
        localStorage.setItem('thecss', 'css/styles.css');
    }
    
    
    
    
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
            {/* start home banner */}
            <section className="no-padding position-relative">
              <div className="container-fluid absolute-middle-center z-index-9">
                <div className="row">
                  <div className="col-lg-5 col-md-12 half-container-banner">
                    <div className="margin-15px-lr">
                      <div className="banner-container width-95 md-width-90 sm-width-85 absolute-middle-center">
                        <h1 className="alt-font font-size55 md-font-size48 sm-font-size36 xs-font-size26 font-weight-700">
                          <span className="text-theme-color">
                            Checking &amp;
                          </span>
                          Savings Accounts
                        </h1>
                        <p className="font-size16 line-height-28 sm-font-size14 sm-line-height-26 width-90">
                          19 Accounts Available
                        </p>
                        <a href="#banklogs" className="btn-style4 margin-10px-top sm-no-margin">
                          <span>
                            View Accounts
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 screen-height float-right cover-background bg-img half-banner" data-overlay-dark={0} data-background="wall/chime3.jpg" />
            </section>
            {/* end home banner */}
            {/* start project section */}
            <section id="banklogs" style={{padding: 0}}>
              <div className="container-fluid">
                <div className="section-heading">
                  <h3> </h3>
                </div>
                <div className="row">
                  {/* Start links */}
                  <div className="filtering col-sm-12 text-center">
                    <span data-filter="*" className="active">
                      ALL
                    </span>
                    <span data-filter=".checking">
                      CHECKING
                    </span>
                    <span data-filter=".savings">
                      SAVINGS
                    </span>
                  </div>
                  {/* End links */}
                  <div className="gallery text-center width-100 product-grid">
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items savings">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$14,905</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime1}>     
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $298
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items savings">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$15,209</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime2}>  
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $302
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items checking">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$16,127</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime3}>     
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $320
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items checking">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$17,620</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime4}>
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $349
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items savings">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$18,730</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime5}>     
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $374
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items savings">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$19,536</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime6}>   
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $390
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items checking">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$20,358</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime7}>  
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $407
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items savings">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$21,390</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime8}>
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $427
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items savings">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$28,491</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime9}>     
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $570
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items savings">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$29,350</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime10}>  
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $586
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items savings">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$30,710</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime11}>
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $611
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items savings">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$31,215</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime12}>
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $629
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items savings">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$35,142</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime13}>
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $685
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items savings">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$36,203</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime14}>   
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $709
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items checking">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$38,419</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime15}>     
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $761
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items checking">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$42,106</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime16}>    
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $815
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items savings">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$44,057</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime17}> 
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $860
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items savings">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$47,830</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime18}>     
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $927
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-4 col-6 items checking">
                      <div className="feature-box-04">
                        <div className="no-padding border">
                          <p>$52,642</p>
                          <p>chime.com</p>
                          <p>Username:Password</p>
                          <p>Account &amp; Routing No</p>
                          <p>Social Security No.</p>
                          <p>Date of Birth</p>
                          <p>Client IP + User Agent</p>
                          <p>Name + Email access</p>
                          <form action="invoice" method="GET">
                            <button type="submit" className="butn medium" onClick={chime19}>    
                              <span className="margin-10px-left">
                                <i className="fas fa-cart-plus margin-10px-right" />
                                $983
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end project section */}
            {/* start clients section */}
            <div className="section-clients bg-light-gray">
              <div className="container-fluid">
                <div className="owl-carousel owl-theme clients" id="clients">
                  <div className="item"><img alt="partner" src="img/partners/bbt.jpg" /></div>
                  <div className="item"><img alt="partner" src="img/partners/bbva.jpg" /></div>
                  <div className="item"><img alt="partner" src="img/partners/chase.jpg" /></div>
                  <div className="item"><img alt="partner" src="img/partners/citi.jpg" /></div>
                  <div className="item"><img alt="partner" src="img/partners/huntington.jpg" /></div>
                  <div className="item"><img alt="partner" src="img/partners/nfcu.jpg" /></div>
                  <div className="item"><img alt="partner" src="img/partners/pnc.jpg" /></div>
                  <div className="item"><img alt="partner" src="img/partners/suntrust.jpg" /></div>
                  <div className="item"><img alt="partner" src="img/partners/woodforest.jpg" /></div>
                  <div className="item"><img alt="partner" src="img/partners/chime.jpg" /></div>
                  <div className="item"><img alt="partner" src="img/partners/boa.jpg" /></div>
                </div>
              </div>
            </div>
            {/* end clients section*/}
            {/* start footer section */}
            <footer className="bg-img background-size-contain" data-overlay-dark={9} data-background="img/bg/bg17.jpg">
              <div className="footer-bar">
                <div className="container">
                  <p>Bank Logs © 2020-2021. All Rights Reserved</p>
                </div>
              </div>
            </footer>
            {/* end footer section */}
          </div>
          {/* end main-wrapper section */}
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
          <Link className="scroll-to-top"><i className="fas fa-angle-up" aria-hidden="true" /></Link>
        </div>
      );
    }

    export default Chime;