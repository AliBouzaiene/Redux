import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTask } from '../JS/Actions/actions';
const mapDispatchToProps = dispatch => {
    return {
        addArticle: post => dispatch(addTask(post))
    }
}
const CreateTask = (props) => {
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addArticle({
            id: Date.now(),
            task,
            description
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label style={{color:"rgb(103, 178, 221)"}} htmlFor="Task">Task :</label>
                <input  className='task' type="text" name="Task" id="task" onChange={e => setTask(e.target.value)} />
            </div>
            <div>
                <div>
                    <div className='Description'>
                <label style={{color:"rgb(103, 178, 221)"}}>Description :</label>      
                   </div>       
                <textarea name="description" id="description" cols="100" rows="30" onChange={e => setDescription(e.target.value)} />
                </div> 
            </div>            
            <div>
                <button className='btn' type="submit" >Add Task</button>                
            </div>


        </form>
    )
}

export default connect(null, mapDispatchToProps)(CreateTask)