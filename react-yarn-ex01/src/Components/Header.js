// ./src/Components/Header.js
// 클래스형 컴포너트
// Component 를 extends 하여 사용
import React, { Component } from "react";

class Header extends Component {
    render()
    {
        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

export default Header;