import React, { useState, useEffect } from 'react';

function SprintForm() {
	const [name, setName] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [existingSprints, setExistingSprints] = useState([]); // State to store existing sprints

	useEffect(() => {
		// Retrieve existing sprints from local storage when the component mounts
		const storedSprints = JSON.parse(localStorage.getItem('sprints')) || [];
		setExistingSprints(storedSprints);
	}, []);

	const handleCreateSprint = () => {
		// Create a new sprint object
		const id = Math.random().toString(36).substring(7);
		const newSprint = { name, startDate, endDate, id };

		// Retrieve existing sprints from local storage
		const existingSprints =
			JSON.parse(localStorage.getItem('sprints')) || [];

		// Add the new sprint and save it back to local storage
		localStorage.setItem(
			'sprints',
			JSON.stringify([...existingSprints, newSprint])
		);

		// Clear the form
		setName('');
		setStartDate('');
		setEndDate('');
	};

	return (
		<div className=" flex justify-center p-6">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
			<h2 className="text-center font-bold text-lg">Create a Sprint</h2>
            <div className="mb-4">
			<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">
				Name:</label>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id="Name"
				/></div>
			<div className="mb-2">
			<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="StartDate">
				Start Date:</label>
				<input
					type="date"
					placeholder="Start Date"
					value={startDate}
					onChange={(e) => setStartDate(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                    id="StartDate"
				/>
			</div>
            <div className="mb-2">
			<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="EndDate">
				End Date:</label>
				<input
					type="date"
					placeholder="End Date"
					value={endDate}
					onChange={(e) => setEndDate(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                    id="EndDate"
				/>
			</div>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={handleCreateSprint}
			>
				Create Sprint
			</button>
            </form>
		</div>
	);
}

export default SprintForm;
