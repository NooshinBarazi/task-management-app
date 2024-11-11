const TaskForm = () => {
    return (
        <div className="w-full">
            <form className=' bg-gray-100 shadow-md rounded px-8 py-6 mb-4'>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title" type="text"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description</label>

                    <textarea className='border shadow w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="description" required/></div>
                <button type='submit' className='bg-green-500 px-2 py-1 text-white rounded mt-2'>افزودن به لیست</button>
            </form>
        </div>
            )
            }

            export default TaskForm;