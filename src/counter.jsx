import React, { useState } from "react";

function Counter(props) {
    let [count, setCount] = useState(props.count)
    function change(x) {
       setCount(count + x)
    }
    function double() {
        setCount(count*2)
    }
    return (
        <div>
            <h1>counter</h1>
            <p>count: {count}</p>
            <button onClick={()=>change(1)}>increment</button>
            <button onClick={()=>change(-1)}>decrement</button>
            <button onClick={double}>Double</button>
        </div>
    )
}
export {Counter}