import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import CreateView from './routes/CreateView.jsx';
import CharListView from './routes/CharListView.jsx';
import CharView from './components/CharView.jsx';
import UpdateView from './routes/UpdateView.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/createCharacter" element={<CreateView />} />
        <Route path="/char/:id" element={<CharView />} />
        <Route path="/charList" element={<CharListView />} />
        <Route path="/char/:id/update" element={<UpdateView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
