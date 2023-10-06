import React from 'react';
import SubmitForm from './containers/Form/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <SubmitForm />
      <ToastContainer />
    </div>
  );
};

export default App;