import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import TicketForm from './component/TicketForm';
import TicketList from './component/TicketList';
import SprintForm from './component/SprintForm';
import SprintList from './component/SprintList';
import Home from './pages/Home';
import Layout from './layout/Layout';

function App() {
	return (
		<>
			<BrowserRouter>
				<div>
					{/* <nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/tickets">All Tickets</Link>
							</li>
							<li>
								<Link to="/sprints">All Sprints</Link>
							</li>
							<li>
								<Link to="/create-ticket">Create Ticket</Link>
							</li>
							<li>
								<Link to="/create-sprint">Create Sprint</Link>
							</li>
							
						</ul>
					</nav> */}

					<Routes>
						<Route element={<Layout />}>
							<Route path="/tickets" element={<TicketList />} />
							<Route path="/sprints" element={<SprintList />} />
							<Route
								path="/create-ticket"
								element={<TicketForm />}
							/>
							<Route
								path="/create-sprint"
								element={<SprintForm />}
							/>
							<Route path="/" element={<Home />} />
						</Route>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
