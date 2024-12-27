
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './global.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
	throw new Error('Root element not found in index.html');
}

createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>
);
