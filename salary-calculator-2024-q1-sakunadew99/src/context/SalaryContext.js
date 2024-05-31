import React, { createContext, useReducer } from 'react';

const SalaryContext = createContext();

const initialState = {
  basicSalary: 0,
  earnings: [{ name: '', amount: 0, epf: false }],
  deductions: [{ name: '', amount: 0 }],
};

const salaryReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_BASIC_SALARY':
      return { ...state, basicSalary: action.payload };
    case 'UPDATE_EARNING':
      const updatedEarnings = state.earnings.map((earning, index) =>
        index === action.payload.index
          ? { ...earning, [action.payload.key]: action.payload.value }
          : earning
      );
      return { ...state, earnings: updatedEarnings };
    case 'UPDATE_DEDUCTION':
      const updatedDeductions = state.deductions.map((deduction, index) =>
        index === action.payload.index
          ? { ...deduction, [action.payload.key]: action.payload.value }
          : deduction
      );
      return { ...state, deductions: updatedDeductions };
    case 'DELETE_EARNING':
      return {
        ...state,
        earnings: state.earnings.filter((_, index) => index !== action.payload),
      };
    case 'DELETE_DEDUCTION':
      return {
        ...state,
        deductions: state.deductions.filter((_, index) => index !== action.payload),
      };
    case 'ADD_EARNING':
      return {
        ...state,
        earnings: [...state.earnings, { name: '', amount: 0, epf: false }],
      };
    case 'ADD_DEDUCTION':
      return {
        ...state,
        deductions: [...state.deductions, { name: '', amount: 0 }],
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const SalaryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(salaryReducer, initialState);

  return (
    <SalaryContext.Provider value={{ state, dispatch }}>
      {children}
    </SalaryContext.Provider>
  );
};

export { SalaryContext, SalaryProvider };
