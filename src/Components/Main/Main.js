import React from 'react'
import logoCard from "../../images/logo_card_large_2x.png";
import appleCard from "../../images/hero_apple_card_medium_2x.jpg";
import watch from "../../images/watch-logo-large.png";
import imageslogo from "../../images/logo__large_2x (1).png";
import logolight from "../../images/logo_light__cfvl40z2nzau_large_2x.png";
import logoOne from "../../images/logo__one_large_2x (1).png";
import logoConversation from "../../images/logo__conversation_large_2x (1).png";
function Main() {
    return (
      <div>
        {/* covid Section */}
        <section>
          <div className="covid container-fluid text-center">
            <a href="https://covid19.apple.com/screening/">
              Evaluate COVID-19 symptoms and understand next steps
            </a>
          </div>
          <div className="shop-online container-fluid alert-secondary text-center">
            <a href="">Shop online</a>
            and get Specialist help, free no-contact delivery, and more.
          </div>
        </section>
        {/* Iphone 12 Section */}
        <section class="second-hightlight-wrapper">
          <div class="container">
            <div class="title-wraper  bold black">iphone 12</div>
            <div class="description-wrapper bold black">Blast past fast.</div>
            <div class="price-wrapper grey">
              <p>
                From $29.12/mo.for 24 mo.or$699 before trade-in.
                <sup class="one">1</sup>
              </p>

              <p>Buy directly from Apple with special carier offers</p>
            </div>
            <div class="links-wrapper">
              <ul class="list-unstyled">
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* iphone12 pro section      */}
        <section class="third-hightlight-wrapper">
          <div class="container">
            <h2 class="title-wraper bold">iPhone 12 Pro</h2>

            <h3 class="description-wrapper">it's a leap year</h3>

            <div class="price-wrapper grey">
              <p>
                From $41.62/mo. for 24 mo or $999 before trade‑in.
                <sup class="two">2</sup>{" "}
              </p>
              <p> Buy directly from Apple with special carrier offers.</p>
            </div>

            <div class="links-wrapper">
              <ul class="list-unstyled">
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* card section */}
        {/* <section className="fourth-heghlight-wrapper text-center">
          <div className="container">
            <div className="card-log ">
              <img width="100px" src={logoCard} alt="" />
            </div>

            <div className="description-wrapper">
              Save 6% on Apple products with a new Apple Card all March long.{" "}
              <sup className="star">*</sup>
            </div>
            <div className="links-wrapper">
              <ul className="list-unstyled">
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
            <div className="terms">
              <sup>*</sup> Exclusion and terms apply. <sup>3</sup>
            </div>
            <div className="card">
              {" "}
              <img src={appleCard} alt="" />
            </div>
          </div>
        </section> */}
        {/* ipad and watch section */}
        <section className="fifth-heghlight-wrapper text-center">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="title-wraper">ipad Air</div>
                  <div className="description-wraper">
                    Powerful.Colorful.Wonderful{" "}
                  </div>
                  <div className="links-wrapper">
                    <ul className="list-unstyled">
                      <li>
                        <a href="">Learn more</a>
                      </li>
                      <li>
                        <a href="">Apply now</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={watch} />
                    </div>
                  </div>
                  <div className="description-wraper">
                    The future of health is on your wrist
                  </div>
                  <div className="links-wrapper">
                    <ul className="list-unstyled">
                      <li>
                        <a href="">Learn more</a>
                      </li>
                      <li>
                        <a href="">Buy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MacBookAndFitness */}
        <section className="sixth-heghlight-wrapper text-center">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="title-wraper">MacBook Air</div>
                  <div className="links-wrapper">
                    <ul className="list-unstyled">
                      <li>
                        <a href="">Learn more</a>
                      </li>
                      <li>
                        <a href="">Buy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img width="120px" src={imageslogo} alt="" />
                    </div>
                  </div>

                  <div className="description-wraper">
                    a new fitness experience for everyone.Powered by Apple Watch
                  </div>
                  <div className="links-wrapper">
                    <ul className="list-unstyled">
                      <li>
                        <a href="">Learn more</a>
                      </li>
                      <li className="try-it">
                        <a href="">
                          Try it free{" "}
                          <span>
                            <i className="bi bi-arrow-up-right"></i>
                          </span>
                          <sup>4</sup>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* one and Tv section     */}

        <section class="seventh-heghlight-wrapper text-center">
          <div class="container-fluid">
            <div class="row">
              <div class="left-side-wrapper col-sm-12 col-md-6">
                <div class="left-side-container">
                  <div class="top-logo-wrapper">
                    <div class="logo-wrapper">
                      <img width="100px" src={logoOne} />
                    </div>
                  </div>

                  <div class="description-wraper">
                    Bundle up to six Apple services.And enjoy more for less
                  </div>
                  <div class="links-wrapper">
                    <ul class="list-unstyled">
                      <li>
                        <a href="">Learn more</a>
                      </li>

                      <li class="try-it">
                        <a href="">
                          Try it free <sup>5</sup>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="right-side-wrapper col-sm-12 col-md-6">
                <div class="right-side-container">
                  <div class="top-logo-wrapper">
                    <div class="logo-wrapper">
                      <img src={logolight} />
                    </div>
                    <div class="conversation">
                      {" "}
                      <img src={logoConversation} alt="" />
                    </div>
                  </div>
                  <div class="Amanda">With Amanda Gorman</div>
                  <div class="Watch">
                    {" "}
                    <a href="#">watch now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}


export default Main;
