// StudentContext.js
import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState();
  const [subFees, setSubFees] = useState();

  return (
    <StudentContext.Provider
      value={{ student, setStudent, subFees, setSubFees }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => {
  return useContext(StudentContext);
};
