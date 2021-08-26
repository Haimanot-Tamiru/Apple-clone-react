import React, { Component } from "react";
import HeaderLink from "./HeaderLink";
import logo from "../../images/logo.png";
import search from "../../images/search-icon.png";
import cart from "../../images/cart.png";

class Nav extends Component {
  render() {
    
    return (
      <div>
        <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              <a className="navbar-brand mx-auto" href="#">
                <img width="18px" src={logo} />
              </a>
              <div className="navbar-collapse collapse">
                            <ul className="navbar-nav nav-justified w-100 nav-fill">
                        <HeaderLink linkName="Mac" linkUrl="/mac"/>
                        <HeaderLink linkName="iphone" linkUrl="/iphone"/>
                        <HeaderLink linkName="ipad" linkUrl="/ipad"/>
                        <HeaderLink linkName="Watch" linkUrl="/Watch"/>
                        <HeaderLink linkName="tv" linkUrl="#"/>
                        <HeaderLink linkName="Music" linkUrl="Music"/>
                        <HeaderLink linkName="Support" linkUrl="Support"/>   
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/search/">
                      <img width="18px" src={search} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/cart/">
                      <img width="18px" src={cart} />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
