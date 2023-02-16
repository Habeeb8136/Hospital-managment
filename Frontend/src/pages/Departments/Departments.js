import React, { useEffect, useState } from 'react';
import './Departments.css'
import data from '../../Assets/MOCK DEPARTMENTS.json'
import DepartmentCard from '../../components/DepartmentCard/DepartmentCard';


const Departments = () => {
    const [department, setDepartment] = useState(data);

   
    return (
        <div className='department-container'>
        <h3>Departments</h3>
        <br></br>

            {department?.map((department)=>
                    <DepartmentCard department={department} key={department.id}/>
            )}
            
        </div>
    );
}

export default Departments;
