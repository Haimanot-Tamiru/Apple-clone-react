import React, { Component } from 'react'

 class HeaderLink extends Component {
    render() {
        return (
            <li className="nav-item">
                {/* reuse lemaderg the same yehone class name silalachew lehuluem enditekemen create linkName And linkUrl enfeteralen */}
            <a className="nav-link js-scroll-trigger" href={this.props.linkUrl}>
              {this.props.linkName}
            </a>
          </li>
        );
    }
}
export default HeaderLink;