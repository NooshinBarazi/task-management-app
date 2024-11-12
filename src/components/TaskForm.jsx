import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addTasks} from "../redux/features/tasks/tasksSlice.jsx";
import {toast} from "react-toastify";

const TaskForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
const dispatch = useDispatch();

    const onSubmit = async (data) => {
        const newTask = {
            id: Date.now(),
            title: data.title,
            description: data.description,
            completed: false,
        };

        try {
          const response =  await dispatch(addTasks(newTask))
            if(addTasks.fulfilled.match(response)){
                toast.success('Task created successfully');
            }
        }catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <div className="w-full">
            <form className=' bg-gray-100 shadow-md rounded px-8 py-6 mb-4' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-blue-500 focus:border-blue-500"
                        id="title" type="text"
                        {...register("title", {required: "Title is required"})}
                    />
                    {errors.title && (
                        <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description</label>

                    <textarea
                        className='border border-gray-300 shadow w-full py-2 px-3 text-gray-700 leading-tight focus:ring-blue-500 focus:border-blue-500'
                              id="description"
                        {...register("description", {required: "Description is required"})}
                    />
                    {errors.description && (
                        <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>
                    )}
                </div>
                <button type='submit' className='bg-green-500 px-2 py-1 text-white rounded mt-2'>Add To List</button>
            </form>
        </div>
            )
            }

            export default TaskForm;