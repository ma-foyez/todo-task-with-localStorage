import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { tasksContext } from '../App';
import { useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const UpdateTaskForm = () => {
    const { id } = useParams();
    const history = useHistory();

    const [task, setTask] = useContext(tasksContext);
    const { register, handleSubmit, errors } = useForm();
    const [selectedTask, setSelectedTask] = useState(task[id]);
    const handleUpdateTask = (data) => {
        // task[id].id = id;
        task[id].Title = data.Title;
        task[id].Priority = data.Priority;
        setTask(task)
        localStorage.setItem('Tasks', JSON.stringify(task));
        history.push('/');
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center mt-S">
                <div className="col-md-8 bg-light p-4">
                    <h1 className="text-center pb-3">Update Your Task</h1>
                    <form onSubmit={handleSubmit(handleUpdateTask)}>
                        <input
                            className="form-control"
                            name="Title"
                            placeholder="Task Title"
                            defaultValue={selectedTask ? selectedTask.Title : "Title"}
                            ref={register({ required: true })}
                        /> <br></br>
                        <span className="text-danger">
                            {errors.Title && "Task Title is required"}
                        </span>
                        <select className="form-control" name="Priority" ref={register} defaultValue={selectedTask ? selectedTask.Priority : "Priority"}>
                            <option value="Low">Low</option>
                            <option value="Mediun">Medium</option>
                            <option value="High">High</option>
                        </select>
                        {errors.Priority && "Task Priority is required"}
                        <br></br>
                        <input className="btn btn-success" type="submit" value="Confirm Update" />
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

export default UpdateTaskForm;