import React, { createContext, useReducer } from 'react';

const SalaryContext = createContext();

const initialState = {
  basicSalary: 0,
  earnings: [],
  deductions: [],
};

const salaryReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_BASIC_SALARY':
      return { ...state, basicSalary: action.payload };
    case 'ADD_EARNING':
      return { ...state, earnings: [...state.earnings, action.payload] };
    case 'ADD_DEDUCTION':
      return { ...state, deductions: [...state.deductions, action.payload] };
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
