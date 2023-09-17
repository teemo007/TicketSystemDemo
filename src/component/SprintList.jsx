import React, { useState, useEffect } from 'react';



function SprintList() {
	const [sprints, setSprints] = useState([]);
	
    const idp = Math.random().toString(36).substring(7);
	useEffect(() => {
		// Retrieve sprints from local storage when the component mounts
		const storedSprints = JSON.parse(localStorage.getItem('sprints')) || [];
		setSprints(storedSprints);
	}, []);

	return (
		<div className="min-h-screen flex flex-col ">
            <div className="m-auto">
			<h2 className='font-bold text-3xl p-3 text-center'>Sprint List</h2>
			<ul className="w-[600px]">
				{sprints.map((sprint) => (
					<li className='flex flex-col bg-gray-200 max-w-screen-sm shadow-md py-8 px-10 md:px-8 rounded-md my-4' key={sprint.id}>
						<p className='text-gray-500 mb-3 whitespace-nowrap  font-bold text-lg'>Sprint Name: {sprint.name}</p>
						<p>Start Date: {sprint.startDate}</p>
						<p>End Date: {sprint.endDate}</p>

						{/* Display associated tickets */}
						<h4 className='text-gray-500 mb-3 whitespace-nowrap  font-bold text-lg my-2'>Associated Tickets:</h4>
						<ul className='p-1'>
							{getAssociatedTickets(sprint.id).map((ticket) => (
								<li key={idp}>
									<p>Name: {ticket.name}</p>
									<p>Description: {ticket.description}</p>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
            </div>
		</div>
	);

	// Function to get associated tickets for a sprint
	function getAssociatedTickets(sprintId) {
		const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
		return storedTickets.filter((ticket) => ticket.sprintId === sprintId);
	}
}

export default SprintList;
