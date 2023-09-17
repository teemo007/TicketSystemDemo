import React, { useState, useEffect } from 'react';

function TicketList() {
	const [tickets, setTickets] = useState([]);

	useEffect(() => {
		const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
		setTickets(storedTickets);
	}, []);

	return (
		<div className="min-h-screen flex flex-col ">
			<div className="m-auto ">
			<h2 className='font-bold text-3xl p-3 text-center'>All Tickets</h2>
			
			<ul className="w-[600px]">
				{tickets.map((ticket, index) => (
					<li key={index} className='flex flex-col bg-gray-200 max-w-screen-sm shadow-md py-8 px-10 md:px-8 rounded-md my-4 '>
						<div className="text-gray-500 mb-3 whitespace-nowrap text-center">Name: {ticket.name}</div>
						<div className="truncate text-gray-500 mb-3 whitespace-nowrap text-center">Description: {ticket.description}</div>
					</li>
				))}
			</ul>
			</div>
		</div>
	);
}

export default TicketList;
