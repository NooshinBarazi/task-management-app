import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {updateTasks} from "../../redux/features/tasks/tasksSlice.jsx";
import {toast} from "react-toastify";

const EditTask = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: {errors} } = useForm();
    const {tasks} = useSelector((state) => state.tasks);
    const task = tasks.find((t) => t.id === parseInt(id));
    const dispatch = useDispatch();

    useEffect(() => {
        if(task){
            setValue('title', task.title);
            setValue('description', task.description);
            setValue('completed', task.completed);
        }
    }, [task, setValue]);

    const onSubmit = async (data) => {
        const updatedTask = {
            id: task.id,
            title: data.title,
            description: data.description,
            completed: data.completed,
        }
        try {
          const response =  await dispatch(updateTasks(updatedTask));
          if(updateTasks.fulfilled.match(response)){
              toast.success('Task updated successfully');
              navigate('/')
          }
        }catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
                Edit Task
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        {...register("title", {required: "Title is required"})}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Task title"
                    />
                    {errors.title && (
                        <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        {...register("description", {required: "Description is required"})}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Task description"
                        rows="4"
                    />
                    {errors.description && (
                        <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>
                    )}
                </div>
                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        {...register("completed")}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-700">Completed</label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-150"
                >
                    Update Task
                </button>
            </form>
        </div>
    )
}

export default EditTask;