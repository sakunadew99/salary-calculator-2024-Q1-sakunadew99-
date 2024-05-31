import React, { useContext } from 'react';
import { SalaryContext } from '../context/SalaryContext';
import './SalaryForm.css';
import deleteIcon from '../assets/delete-icon.png'; 
import resetIcon from '../assets/reset-icon.png'; 

const SalaryForm = () => {
  const { state, dispatch } = useContext(SalaryContext);

  const handleBasicSalaryChange = (e) => {
    dispatch({ type: 'UPDATE_BASIC_SALARY', payload: Number(e.target.value) });
  };

  const handleEarningChange = (index, key, value) => {
    dispatch({
      type: 'UPDATE_EARNING',
      payload: { index, key, value },
    });
  };

  const handleDeductionChange = (index, key, value) => {
    dispatch({
      type: 'UPDATE_DEDUCTION',
      payload: { index, key, value },
    });
  };

  const handleDeleteEarning = (index) => {
    dispatch({
      type: 'DELETE_EARNING',
      payload: index,
    });
  };

  const handleDeleteDeduction = (index) => {
    dispatch({
      type: 'DELETE_DEDUCTION',
      payload: index,
    });
  };

  const handleAddEarning = () => {
    dispatch({ type: 'ADD_EARNING' });
  };

  const handleAddDeduction = () => {
    dispatch({ type: 'ADD_DEDUCTION' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div className="salary-form">
      <button className="reset-button" onClick={handleReset}>
        <img src={resetIcon} alt="Reset" className="button-icon" /> Reset
      </button>
      <h1>Calculate Your Salary</h1>
      <label>
      <h2>Basic Salary</h2>
        <input type="text" value={state.basicSalary} onChange={handleBasicSalaryChange} />
      </label>
      <div className="earnings">
        <h2>Earnings</h2>
        <p className='description'>Allowance, Fixed Allowance, Bonus and etc.</p>
        {state.earnings.map((earning, index) => (
          <div key={index} className="earning-item">
            <input
              type="text"
              value={earning.name}
              onChange={(e) => handleEarningChange(index, 'name', e.target.value)}
            />
            <input
              type="text"
              value={earning.amount}
              onChange={(e) => handleEarningChange(index, 'amount', Number(e.target.value))}
            />
            <button className="delete-button" onClick={() => handleDeleteEarning(index)}>
              <img src={deleteIcon} alt="Delete"  />
            </button>
            <label>
            <input
                type="checkbox"
                checked={earning.epf}
                onChange={(e) => handleEarningChange(index, 'epf', e.target.checked)}
              />
              EPF/ETF
              
            </label>
            
          </div>
        ))}
        <p className="add-button" onClick={handleAddEarning}>+ Add New Allowance</p>
      </div>
      <div className="separator"></div>
      <div className="deductions">
        <h2>Deductions</h2>
        <p className='description'>Salary Advances, Loan Deductions and all</p>
        {state.deductions.map((deduction, index) => (
          <div key={index} className="deduction-item">
            <input
              type="text"
              value={deduction.name}
              onChange={(e) => handleDeductionChange(index, 'name', e.target.value)}
            />
            <input
              type="text"
              value={deduction.amount}
              onChange={(e) => handleDeductionChange(index, 'amount', Number(e.target.value))}
            />
            <button className="delete-button" onClick={() => handleDeleteDeduction(index)}>
            <img src={deleteIcon} alt="Delete" />
            </button>
          </div>
        ))}
        <p className="add-button" onClick={handleAddDeduction}>+ Add New Deduction</p>
      </div>
    </div>
  );
};

export default SalaryForm;
