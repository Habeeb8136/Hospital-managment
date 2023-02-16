import React, { useEffect, useState } from 'react';
import './Employees.css'
import data from '../../Assets/MOCK_DATA.json'
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
const Employees = () => {
    const [employee, setEmployee] = useState();
    
    useEffect(() => {
       setEmployee(data)
    }, []);
    

    console.log(data)
    return (
        <div className='employees-container'>
        <h3>Employees</h3>
        <br></br>

            {employee?.map((employee)=>
                    <EmployeeCard employee={employee} key={employee.id}/>
            )}
            
        </div>
    );
}

export default Employees;
