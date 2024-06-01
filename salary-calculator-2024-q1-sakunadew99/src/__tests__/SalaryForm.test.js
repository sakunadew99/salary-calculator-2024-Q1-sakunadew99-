import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SalaryProvider } from '../context/SalaryContext';
import SalaryForm from '../components/SalaryForm';

test('updates basic salary', () => {
  const { getByLabelText } = render(
    <SalaryProvider>
      <SalaryForm />
    </SalaryProvider>
  );
  const input = getByLabelText(/basic salary/i);
  fireEvent.change(input, { target: { value: '5000' } });
  expect(input.value).toBe('5000');
});
