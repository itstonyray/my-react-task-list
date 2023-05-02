export const Task = ({id, completed}) => {

    
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={()=>{console.log(id)}} />
            <span style={{textDecoration: completed ? 'line-through' : 'done'}}> {id} </span>
        </div>
    )
}