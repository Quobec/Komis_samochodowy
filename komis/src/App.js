import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

	const [CurrentSite, setCurrentSite] = useState('MainSite');

	switch (CurrentSite) {
		case 'MainSite':
			return (
				<>
					
				</>
			);
		default:
			break;
	}
}

export default App;
