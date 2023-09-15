import React, {useState} from 'react';

const EditTodo = ({updateItems,props}) => {

	const [value, setValue] = useState(props.text);

	const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        updateItems(value, props.id);
    };

    return (
    <>
		    <form onSubmit={handleSubmit} className="TodoForm">
		    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
		    <button type="submit" className='todo-btn'>Add Task</button>
		  	</form>
	</>
    );
};