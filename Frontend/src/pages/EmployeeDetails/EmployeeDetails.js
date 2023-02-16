import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {BsFillTelephoneForwardFill} from 'react-icons/bs'
import employees from '../../Assets/MOCK_DATA.json'
import departments from '../../Assets/MOCK DEPARTMENTS.json'
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import './EmployeeDetails.css'
import { updateDepartment  } from '../../features/details';

const EmployeeDetails = () => {
    const [DepartmentHead, setDepartmentHead] = useState();
    const employee=useSelector(state=>state.details.employee)
    console.log(employee)
    const dispatch=useDispatch()

    useEffect(() => {
        const filteredData=employees?.filter((emp)=>{
            return emp.department.name===employee.department.name
            && emp.head.status===true
        })
        
        setDepartmentHead(filteredData)
    }, [employee.department.name]);
    console.log(DepartmentHead)

    function setState(head){
        const filteredData=departments.filter((departments)=>{
            return departments.name===head
        })
        dispatch(updateDepartment(...filteredData))
            console.log(...filteredData)

    }
    

    return (
        
        <div className='employee-details-container'>
            <div className='details-left'>
                <h1>{employee?.name}</h1>
                <h4 className='head-indicator'>{employee?.head.status ?"Head of Department":null}</h4>
                <p><BsFillTelephoneForwardFill/> {employee?.phone}</p>
                
                <h4>Age <strong>{employee?.age}</strong></h4>
                <br></br>
                <p>{employee?.descrition}</p>
                <h4 onClick={()=>setState(employee?.department.name)}>Department :
                 <Link to='/department-detail'> {employee?.department.name}</Link>
                 </h4>
                <br></br>
                {employee?.head.status ?null:
                
                
                <h3>Report to HOD:<br></br><br></br> <span style={{color:'red'}}>
                    {DepartmentHead?.map((employee)=>
                        <Link to='employee-detail'><EmployeeCard employee={employee}/></Link>
                    ) }
                 </span></h3>
                


                }


            </div>
            <div className={employee?.head.status ?'employee-right-head':'employee-right'}>
                <img src={employee?.img} alt=""></img>
            </div>

        </div>
    );
}

export default EmployeeDetails;
