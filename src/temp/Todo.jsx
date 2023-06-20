const Todo = () => { 

    let todo = [  "construir diseño", "agregar interactividad y animaciones"]
    return (<>

    <ul> Todo
        {todo.map((item, index) => {
            return <li key={index}>{item}</li>
        })}
    </ul>
    
    
    
    </>)
 }

    export default Todo