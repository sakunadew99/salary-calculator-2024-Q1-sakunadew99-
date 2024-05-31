import React, { useContext, useState } from 'react';
import { SalaryContext } from '../context/SalaryContext';
import './SalaryForm.css';

const SalaryForm = () => {
  const { state, dispatch } = useContext(SalaryContext);
  const [newEarning, setNewEarning] = useState('');
  const [newEarningAmount, setNewEarningAmount] = useState(0);
  const [isEpfAllowed, setIsEpfAllowed] = useState(false);
  const [newDeduction, setNewDeduction] = useState('');
  const [newDeductionAmount, setNewDeductionAmount] = useState(0);

  const handleBasicSalaryChange = (e) => {
    dispatch({ type: 'UPDATE_BASIC_SALARY', payload: Number(e.target.value) });
  };

  const handleAddEarning = () => {
    dispatch({
      type: 'ADD_EARNING',
      payload: { name: newEarning, amount: Number(newEarningAmount), epf: isEpfAllowed },
    });
    setNewEarning('');
    setNewEarningAmount(0);
    setIsEpfAllowed(false);
  };

  const handleAddDeduction = () => {
    dispatch({
      type: 'ADD_DEDUCTION',
      payload: { name: newDeduction, amount: Number(newDeductionAmount) },
    });
    setNewDeduction('');
    setNewDeductionAmount(0);
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div className="salary-form">
      <button className="reset-button" onClick={handleReset}>Reset</button>
      <h1>Calculate Your Salary</h1>
      <label>
        Basic Salary:
        <input type="text" value={state.basicSalary} onChange={handleBasicSalaryChange} />
      </label>
      <div className="earnings">
        <h2>Earnings</h2>
        {state.earnings.map((earning, index) => (
          <div key={index} className="earning-item">
            <input type="text" value={earning.name} readOnly />
            <input type="text" value={earning.amount} readOnly />
            <label>
              EPF/ETF:
              <input type="checkbox" checked={earning.epf} readOnly />
            </label>
          </div>
        ))}
        <input
          type="text"
          placeholder="Earning Name"
          value={newEarning}
          onChange={(e) => setNewEarning(e.target.value)}
        />
        <input
          type="text"
          placeholder="Earning Amount"
          value={newEarningAmount}
          onChange={(e) => setNewEarningAmount(e.target.value)}
        />
        <label>
          EPF Allowed:
          <input
            type="checkbox"
            checked={isEpfAllowed}
            onChange={() => setIsEpfAllowed(!isEpfAllowed)}
          />
        </label>
        <button onClick={handleAddEarning}>Add Earning</button>
      </div>
      <div className="deductions">
        <h2>Deductions</h2>
        {state.deductions.map((deduction, index) => (
          <div key={index} className="deduction-item">
            <input type="text" value={deduction.name} readOnly />
            <input type="text" value={deduction.amount} readOnly />
          </div>
        ))}
        <input
          type="text"
          placeholder="Deduction Name"
          value={newDeduction}
          onChange={(e) => setNewDeduction(e.target.value)}
        />
        <input
          type="text"
          placeholder="Deduction Amount"
          value={newDeductionAmount}
          onChange={(e) => setNewDeductionAmount(e.target.value)}
        />
        <button onClick={handleAddDeduction}>Add Deduction</button>
      </div>
    </div>
  );
};

export default SalaryForm;
