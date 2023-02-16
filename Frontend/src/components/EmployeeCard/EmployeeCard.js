import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { updateEmployee } from '../../features/details';
import './EmployeeCard.css'

const EmployeeCard = ({employee}) => {
    const dispatch=useDispatch()

    async function handleClick(employee){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        dispatch(updateEmployee(employee))
        console.log(employee.name)
         return <Navigate to='employee-detail' />
    }
    return (
        <Link to='/employee-detail'>
        <div style={{textDecoration:'none'}} onClick={()=>handleClick(employee)} className={employee.head.status? 'employee-card employee-card-head':'employee-card'}>

            <div className='card-left'>
                <p>Name : <strong>{employee.name}</strong></p>
                <p>Phone : <strong>{employee.phone}</strong></p>
                <p>Department : <strong>{employee.department.name}</strong></p>
                {employee.head.status&& <strong className='headof'>head of {employee.department.name} </strong>}
            </div>
            
            <div className='card-right'>
                <img src={employee.img} alt="profilepic"></img>
            </div>

        </div>
        </Link>
    );
}

export default EmployeeCard;
