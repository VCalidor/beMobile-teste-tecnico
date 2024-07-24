import { Dispatch } from "react";
import { Employee } from "../interfaces";

export async function getEmployees(setEmployees: Dispatch<Employee[]>) {
  const url = "http://localhost:3000/employees";
  const response = await fetch(url);
  const data = await response.json();
  setEmployees(data);
}