import { use, useState } from "react";

function Bai4() {
    const [todo, setTodo] = useState("")
    const [listTodo, setListTodo] = useState([])
    const handleSumit = () => {
        if (todo.trim() !== '') {
            setListTodo([...listTodo, todo])
            setTodo('')
        }
    }

    return ( 
        <>
            <h3>Bai 4 - To do app</h3>
            <div>
                <input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter your to do' type="text" />
                <button onClick={handleSumit}>Submit</button>
            </div>
            <div>
                <ul style={{listStyleType: 'none'}}>
                    {listTodo.map((item, index) => (
                        <li key={index} style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "#f2f2f2",
                            padding: "10px",
                            margin: "5px 0",
                            border: "black 1px solid",
                            borderRadius: "8px",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            fontSize: "18px",
                            fontFamily: "Arial, sans-serif",
                            color: "#333",
                            transition: "transform 0.2s ease-in-out"
                        }}>{item}
                        <button style={{
                            backgroundColor: "#ff4d4d",
                            color: "white",
                            border: "none",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: "14px"
                        }} onClick={() => setListTodo(listTodo.filter((_, i) => i !== index))}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
     );
}

export default Bai4;