import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import { tasksContext } from '../App';

const TaskForm = () => {
    const [task, setTask] = useContext(tasksContext);
    const history = useHistory();

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        data.id = task.length;
        task.unshift(data);
        setTask(task);
        localStorage.setItem('Tasks', JSON.stringify(task));
        history.push('/');
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 bg-light p-4">
                    <h1 className="text-center text-warning pb-3">Add New Task</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="form-control"
                            name="Title"
                            placeholder="Task Title"
                            ref={register({ required: true })}
                        /> <br></br>
                        <span className="text-danger">
                            {errors.Title && "Task Title is required"}
                        </span>
                        <select className="form-control" name="Priority" ref={register}>
                            <option value="Low">Low</option>
                            <option value="Mediun">Medium</option>
                            <option value="High">High</option>
                        </select>
                        {errors.Priority && "Task Priority is required"}
                        <br></br>
                        <input className="btn btn-success" type="submit" />
                    </form>
                    <div className="text-right">
                        <Link to='/home'>
                            <button className="btn btn-secondary">Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskForm;