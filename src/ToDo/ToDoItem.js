import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    },
    button: {
        backgroundColor: 'red'
    }
}

function ToDoItem({todo, index, onChange}) {
    console.log(todo);
    return ( <li style={styles.li} >
    <span>
        <input type='checkbox' style={styles.input} onChange={() => onChange(todo.id)}/>
        <strong> {
            index + 1
        } </strong>
        &nbsp;
        {todo.title}
    </span>
    <button style={styles.button}>&times;</button>
</li>)
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
export default ToDoItem