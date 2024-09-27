import React, { useState } from 'react';
import employeeService from '../services/employeeService';

const EmployeeForm = ({ employeeData, onSave }) => {
  const [formData, setFormData] = useState(employeeData || { name: '', email: '', mobile: '', designation: '' });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formData._id) {
      await employeeService.updateEmployee(formData._id, formData);
    } else {
      await employeeService.addEmployee(formData);
    }
    onSave();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={onChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="mobile"
        value={formData.mobile}
        onChange={onChange}
        placeholder="Mobile"
      />
      <input
        type="text"
        name="designation"
        value={formData.designation}
        onChange={onChange}
        placeholder="Designation"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;
