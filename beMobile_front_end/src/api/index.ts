import { Dispatch } from "react";
import { Employee } from "../interfaces";

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("pt-BR");
};

function formatPhoneNumber(phoneNumber: string) {
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{2})(\d{4}|\d{5})(\d{4})$/);

  if (match) {
    return [match[1]," (", match[2], ") ", match[3], "-", match[4]].join("");
  }

  return phoneNumber;
}

export async function getEmployees(setAllEmployees: Dispatch<Employee[]>, setEmployees: Dispatch<Employee[]>) {
  const url = "http://localhost:3000/employees";
  const response = await fetch(url);
  const data = await response.json();

  const formattedData = data.map((employee: Employee) => {
    return {
      ...employee,
      admission_date: formatDate(employee.admission_date),
      phone: formatPhoneNumber(employee.phone),
    };
  })

  setEmployees(formattedData);
  setAllEmployees(formattedData);
}