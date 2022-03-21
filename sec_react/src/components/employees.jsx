import React from "react";


function Employees(){
    const [query , setQuery] = React.useState("")
    const [tasks , setTasks] = React.useState([])

    const changeText = (e) => {
        const {value} = e.target;
        setQuery(value)
    }

    const addText = () => {
        const payload = {
            title:query,
        }
        let newTasks = [...tasks,payload];
        setTasks(newTasks);
    };

    return (
        <div>
            <div>
                <input type="text" placeholder="Name" value={query} onChange={changeText} /><br />
                <input type="text" placeholder="Gender" /><br />
                <input type="text" placeholder="Department" /><br />
                <input type="text" placeholder="Role" /><br />
                <input type="text" placeholder="Salary" /><br />
                <button onClick={addText}>ADD EMPLOYEE</button>
            </div>
            <div>
                {
                    tasks.map(item => {
                        return <div> {item.title} </div>
                    })
                }
            </div>
        </div>
    )
}


export {Employees}