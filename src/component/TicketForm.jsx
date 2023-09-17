import React, { useState, useEffect } from 'react';

function TicketForm() {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [sprintId, setSprintId] = useState(''); // State to store the selected sprint
	const [existingSprints, setExistingSprints] = useState([]); // State to store existing sprints

	useEffect(() => {
		// Retrieve existing sprints from local storage when the component mounts
		const storedSprints = JSON.parse(localStorage.getItem('sprints')) || [];
		setExistingSprints(storedSprints);
	}, []);

	const handleCreateTicket = () => {
		// Create a new ticket object with the selected sprintId
		const newTicket = { name, description, sprintId };

		// Retrieve existing tickets from local storage
		const existingTickets =
			JSON.parse(localStorage.getItem('tickets')) || [];

		// Add the new ticket and save it back to local storage
		localStorage.setItem(
			'tickets',
			JSON.stringify([...existingTickets, newTicket])
		);

		// Clear the form
		setName('');
		setDescription('');
		setSprintId(''); // Reset the selected sprint
	};

	return (
		<div className=" flex justify-center p-6">
			
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-center font-bold text-lg">Create a Ticket</h2>
      <div className="mb-4">
			<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">
				Name:</label>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Name"
				/></div>
			<div className="mb-2">
			<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Description">
				Description: </label>
				<textarea
					placeholder="Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="Description"
				/>
        </div>
			
      <div className="mb-4">
			<div className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Description">Sprint:</div>
				<select
					value={sprintId}
					onChange={(e) => setSprintId(e.target.value)}
					className="border "
				>
					<option value="">Select Sprint</option>
					{existingSprints.map((sprint) => (
						<option key={sprint.id} value={sprint.id}>
							{sprint.name}
						</option>
					))}
				</select>
			</div>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCreateTicket}>Create Ticket</button>
      
      </form>

		</div>
	);
}

export default TicketForm;
