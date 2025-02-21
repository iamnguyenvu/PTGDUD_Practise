import { useState } from "react";

function Bai2() {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [text, setText] = useState()

    return ( 
        <>
            <h3>Bai 2</h3>  
            <div>
                <div><input onChange={(e) => setFirst(Number(e.target.value))} placeholder="Enter first number" type="number" /></div>
                <input onChange={(e) => setSecond(Number(e.target.value))} placeholder="Enter second number" type="number" />
            </div>
            <div>
                <button onClick={() => {
                    setText(`Sum: ${first + second}`)
                }}>Add</button>
            </div>
            <div>
                <span>{text}</span>
            </div>
        </>
        
    );
}
export default Bai2;
