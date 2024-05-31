import React, { useContext } from 'react';
import { SalaryContext } from '../context/SalaryContext';
import './SalarySummary.css';

const SalarySummary = () => {
  const { state } = useContext(SalaryContext);
  const { basicSalary, earnings, deductions } = state;

  const totalEarnings = basicSalary + earnings.reduce((acc, curr) => acc + curr.amount, 0);
  const totalDeductions = deductions.reduce((acc, curr) => acc + curr.amount, 0);

  
  const employerEPF = basicSalary * 0.12;
  const employerETF = basicSalary * 0.03;

  const epfEarnings = earnings.filter(e => e.epf).reduce((acc, curr) => acc + curr.amount, 0);
  const totalEPF = (basicSalary + epfEarnings) * 0.08;
  const netSalary = totalEarnings - totalDeductions - totalEPF;

  return (
    <div className="salary-summary">
      <h2>Your Salary</h2>
      <div className="summary-topic">
        <span>Items</span>
        <span>Amount</span>
      </div>
      <div className="summary-item">
        <span>Basic Salary</span>
        <span>{basicSalary.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>Gross Earning</span>
        <span>{totalEarnings.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>Gross Deduction</span>
        <span>- {totalDeductions.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>Employee EPF (8%)</span>
        <span>- {totalEPF.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>APIT</span>
        <span>- {((totalEarnings - totalDeductions) * 0.02).toFixed(2)}</span>
      </div>
      <div className="net-salary">
        <span>Net Salary (Take Home)</span>
        <span>{netSalary.toFixed(2)}</span>
      </div>
      <div className="employer-contributions">
        <p className='contribution'>Contribution from the Employer</p>
        <div className="summary-item">
          <span>Employer EPF (12%)</span>
          <span>{employerEPF.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Employer ETF (3%)</span>
          <span>{employerETF.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>CTC (Cost to Company)</span>
          <span>{(basicSalary + employerEPF + employerETF).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default SalarySummary;
