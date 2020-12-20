import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { tasksContext } from '../App';
const TaskHeader = () => {
    const [task, setTask] = useContext(tasksContext);
    return (
        <div className="container">
            <div className="task-header d-flex justify-content-between pl-5 pr-5">
                <h2 className="text-center">My Tasks</h2>
                {
                    task.length > 0 && <p>Total Tasks : {task.length}</p>
                }
                <Link to="/taskForm">
                    <button className="btn btn-primary">
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                </Link>
            </div>
            <hr></hr>
        </div>
    );
};

export default TaskHeader;