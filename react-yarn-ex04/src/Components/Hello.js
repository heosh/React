// ./src/Component/Hello.js
// 함수형 컴포넌트
import React from "react";

const Hello = (props) => {
    return (
        <div>
            <p>안녕, 제 이름은 {props.name} 입니다.</p>
        </div>
    )
}

export default Hello;