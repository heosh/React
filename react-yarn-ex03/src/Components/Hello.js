// ./src/Component/Hello.js
// 함수형 컴포넌트
import React from "react";

function Children1() {
    return <p>1: Hello, React!</p>
}

const Children2 = () => {
    return <p>2: Hello, React!!</p>
}

const Children3 = () => <p>3: Hello, React!!!</p>

const Hello = () => {
    return (
        <div>
            <Children1 />
            <Children2 />
            <Children3 />
        </div>
    )
}

export default Hello;