import { use, useState } from "react";

function Bai3() {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [text, setText] = useState()
    const [clicked, setClicked] = useState(0)

    return ( 
        <>
            <h3>Bai 3</h3>  
            <div>
                <div><input onChange={(e) => setFirst(Number(e.target.value))} placeholder="Enter first number" type="number" /></div>
                    <input onChange={(e) => setSecond(Number(e.target.value))} placeholder="Enter second number" type="number" />
                </div>
            <div>
                <div>
                    <input onClick={(e) => setClicked(1)} type="radio" name="operation" id="" />
                    <span>+</span>
                </div>
                <div>
                    <input onClick={(e) => setClicked(2)} type="radio" name="operation" id="" />
                    <span>-</span>
                </div>
                <div>
                    <input onClick={(e) => setClicked(3)} type="radio" name="operation" id="" />
                    <span>*</span>
                </div>
                <div>
                    <input onClick={(e) => setClicked(4)} type="radio" name="operation" id="" />
                    <span>/</span>
                </div>
                <button onClick={() => {
                    let result = 0
                    switch(clicked){
                        case 1:
                            result = first + second
                            break
                        case 2:
                            result = first - second
                            break
                        case 3:
                            result = first * second
                            break
                        case 4:
                            result = first / second
                            break
                        default:
                            break
                        case 0:
                            break
                    }
                    setText(`Result: ${result}`)
                }}>Calculator</button>
            </div>
            <div>
                <span>{text}</span>
            </div>
        </>
        
    );
}
export default Bai3;
