import React from 'react';

export default function Error() {
  return (
    <div>
    {/* start page loading */}
    <div id="preloader">
      <div className="row loader">
        <div className="loader-icon" />
      </div>
    </div>
    {/* end page loading */}
    {/* start main-wrapper section */}
    <div className="main-wrapper">
      {/* start home banner */}
      <section className="no-padding position-relative">
        <div className="container-fluid absolute-middle-center z-index-9">
          <div className="row">
            <div className="col-lg-5 col-md-12 half-container-banner">
              <div className="margin-15px-lr">
                <div className="banner-container width-95 md-width-90 sm-width-85 absolute-middle-center">
                  <h1 className="alt-font font-size55 md-font-size48 sm-font-size36 xs-font-size26 font-weight-700">
                    <span className="text-theme-color" style={{marginRight: '5px'}}>
                     404
                    </span>
                   Error
                  </h1>
                  <p className="font-size16 line-height-28 sm-font-size14 sm-line-height-26 width-90">
                    Page Not Found
                  </p>
                  <a href="/" className="btn-style4 margin-10px-top sm-no-margin">
                    <span>
                      Home Page
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 screen-height float-right cover-background bg-img half-banner" data-overlay-dark={0} data-background="images/bg1.jpg" />
      </section>
      {/* end home banner */}
    </div>
    {/* end main-wrapper section */}
  </div>
);
}
