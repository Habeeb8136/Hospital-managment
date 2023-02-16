import React from 'react';
import { useDispatch } from 'react-redux';
import { updateDepartment } from '../../features/details';
import {Link} from 'react-router-dom'
import './DepartmentCard.css'

const DepartmentCard = ({department}) => {

    const dispatch=useDispatch()

    function handleClick(department){
        dispatch(updateDepartment(department))
        console.log(department.name)
    }

    return (
        
        <Link to='/department-detail'>
         <div className='department-card' onClick={()=>handleClick(department)}>
           <div className='card-left'>
                <p><strong>{department.name}</strong></p>
            </div>

            <div className='card-right'>
                <img src={department.img} alt="profilepic"></img>
            </div>
        </div>
        </Link>
        
    );
}

export default DepartmentCard;
