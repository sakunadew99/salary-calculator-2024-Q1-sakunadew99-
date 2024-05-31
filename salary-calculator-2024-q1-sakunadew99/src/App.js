import React from 'react';
import SalaryForm from './components/SalaryForm';
import SalarySummary from './components/SalarySummary';
import { SalaryProvider } from './context/SalaryContext';
import './App.css';

function App() {
  return (
    <SalaryProvider>
      <div className="app">
        <SalaryForm />
        <SalarySummary />
      </div>
    </SalaryProvider>
  );
}

export default App;
