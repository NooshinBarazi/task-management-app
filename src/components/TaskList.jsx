import TaskItem from "./TaskItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteTasks, fetchTasks} from "../redux/features/tasks/tasksSlice.jsx";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

const TaskList = () => {
    const {tasks, loading} = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])

    const handleEdit = (task) => {
        navigate(`/task/${task.id}`)
    }

    const handleDelete = async (taskId) => {
        try {
            await dispatch(deleteTasks(taskId));
            toast.success("Task deleted successfully");

        } catch (error) {
            toast.error(error.message);
        }
    }

    if (loading) return <p>Loading...</p>;

    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4 text-blue-700 text-start">Tasks List</h2>
            {tasks && tasks.length > 0 ? (tasks.map(task => (
                <TaskItem
                    key={task.id}
                    taskId={task.id}
                    title={task.title}
                    description={task.description}
                    completed={task.completed}
                    onEdit={() => handleEdit(task)}
                    onDelete={() => handleDelete(task.id)}
                />
            ))) : <p className="text-center text-gray-600">No tasks available</p>}
        </div>
    )
}

export default TaskList;