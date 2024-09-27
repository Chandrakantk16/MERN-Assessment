import axios from 'axios';

const API_URL = '/api/employees/';

const getEmployees = async () => {
  const res = await axios.get(API_URL, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
  });
  return res.data;
};

const addEmployee = async (employeeData) => {
  const res = await axios.post(API_URL, employeeData, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
  });
  return res.data;
};

const updateEmployee = async (id, employeeData) => {
  const res = await axios.put(API_URL + id, employeeData, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
  });
  return res.data;
};

const employeeService = {
  getEmployees,
  addEmployee,
  updateEmployee,
};

export default employeeService;
