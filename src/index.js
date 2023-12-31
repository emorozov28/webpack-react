import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';

import './styles/normalize.scss';
import './styles/index.scss';

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);
root.render(<App />);
