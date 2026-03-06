import { useState } from "react";
import { useEffect } from "react";


function UseEffectDemo() {
    const [count, setCount] = useState([0]);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    },[]);

    return (
        <h1>The Page has rendered {count} times!</h1>
    );
}

export default UseEffectDemo