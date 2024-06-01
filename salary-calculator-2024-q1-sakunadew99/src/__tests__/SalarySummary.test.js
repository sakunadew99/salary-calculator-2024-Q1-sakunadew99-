import React from 'react';
import { render } from '@testing-library/react';
import SalarySummary from '../components/SalarySummary';
import { SalaryProvider } from '../context/SalaryContext';

test('displays correct salary summary', () => {
  const { getByText } = render(
    <SalaryProvider>
      <SalarySummary />
    </SalaryProvider>
  );
  expect(getByText(/Basic Salary/i)).toBeInTheDocument();
  expect(getByText(/Gross Earning/i)).toBeInTheDocument();
  expect(getByText(/Net Salary/i)).toBeInTheDocument();
});
