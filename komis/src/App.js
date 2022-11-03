import React from 'react';
import { useState } from 'react';
import MainSite from './sites/MainSite';

function App() {

	const [CurrentSite, setCurrentSite] = useState('MainSite');

	switch (CurrentSite) {
		case 'MainSite':
			return (
				<>
					<MainSite changeSite={setCurrentSite}></MainSite>
				</>
			);
		default:
			break;
	}
}

export default App;
