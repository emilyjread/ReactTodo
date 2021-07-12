import React, {useState} from 'react'
import style from '../App.css'


const TodoList = (props) =>{
    const [todolist, setTodolist]= useState([])
    const [todo, setTodo] = useState("")
    const [isComplete, setIsComplete]=useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTodo=[todo, isComplete]
        setTodolist([...todolist, newTodo])
    }

    const handleComplete = (event, index)=>{

        const completedTodo = todolist.map((todo, i)=>{
            if (i==index){
                todo[1]= !todo[1]
            }
            console.log(todo) 
            console.log(todolist) 
        })

        setTodo(completedTodo)

    }

    const handleDelete = (event, delIdx)=>{
        const filteredTodo = todolist.filter((item, i)=>
        { return delIdx !==i })
        setTodolist(filteredTodo)
        console.log(todolist)
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" onChange={(e)=>{setTodo(e.target.value)}}></input>
                </label>
                <input type="submit"></input>
            </form>
            {
                todolist.map((item, index)=>{
                    let classes=[]
                    if(item[1]===true){
                        classes.push("checked")
                    }

                    return(
                        <div key={index} style={style} >
                            <input type="checkbox" checked={item.isComplete} onChange={(event)=>{handleComplete(event, index)}}></input>
                            <span className={classes} >{item}</span>
                            <button onClick={(event)=>{handleDelete(event, index)}}>Delete</button>
                        </div>
                    )
                }
                )}

        </div>
    )
}

export default TodoList