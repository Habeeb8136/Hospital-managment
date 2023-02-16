import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './DepartmentDetails.css'
import employees from '../../Assets/MOCK_DATA.json';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard'
import { updateEmployee } from '../../features/details';
const DepartmentDetails = () => {
    const department=useSelector(state=>state.details.department)
    const [departmenttEmployees, setDepartmenttEmployees] = useState();
    const dispatch=useDispatch()

    useEffect(() => {
        const filteredData=employees.filter((emp)=>{
            return emp.department.name===department.name
        })
        
        setDepartmenttEmployees(filteredData)
    }, [department.name]);
    
    console.log(departmenttEmployees)
    
    function setState(head){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        const filteredData=employees.filter((emp)=>{
            return emp.name===head
        })
        dispatch(updateEmployee(...filteredData))
            console.log(...filteredData)

    }



    return (
        <>
        <div className='department-details-container'>
            <div className='details-left'>
                <h1>Department of {department.name}</h1>
                <p>Founded : {department.founded}</p>
                <br></br>
                <br></br>
                <h3>{department.description}</h3>
                <br></br>
                
                <h4 onClick={()=>setState(department.head)}>Head Of Department: <Link to='/employee-detail'><span >{department.head}</span></Link></h4>
                
            </div>
            <div className='details-right'>
                <img src={department.img} alt=""></img>
            </div>

        </div>

        <div className='list'>
            <h3>employees in department</h3>
            {departmenttEmployees?.map((employee)=>{
                return <EmployeeCard employee={employee} key={employee.id}/>
            })}
        </div>

            </>
            );
}

export default DepartmentDetails;
