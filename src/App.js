/** @format */

import { useContext } from 'react';
import { AuthContext } from './AppContext';

function App() {
	const auth = useContext(AuthContext);
	console.log(auth);

	return (
		<div className='App'>
			<h1>Frontend Authentication</h1>
		</div>
	);
}

export default App;
