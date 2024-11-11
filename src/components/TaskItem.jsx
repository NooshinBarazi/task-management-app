const TaskItem = () => {
    return (
        <div className='w-full md:w-auto flex justify-between items-center bg-gray-100 rounded p-2 shadow-md mb-4'>
            <div className='flex justify-center items-center gap-2'>
                <div><input type='checkbox'
                            className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"/>
                </div>
                <div className='flex flex-col items-start'>
                    <h3 className='text-lg font-semibold text-gray-800'>title</h3>
                    <p className='text-sm text-gray-600'>description</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <button className='bg-red-500 px-2 py-1 rounded text-white'>Delete</button>
                <button className='bg-blue-500 px-2 py-1 rounded text-white'>Edit</button>
            </div>
        </div>
    )
}

export default TaskItem;
