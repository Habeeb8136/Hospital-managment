import React from 'react';
import './Dashboard.css'
import Departments from '../Departments/Departments';
import Employees from '../Employees/Employees';
import DepartmentHeads from '../DepartmentHeads/DepartmentHeads';


const Dashboard = () => {
    
        
        
    return (
        <div className='dash'>

                <div className='selector-department'>
                    <Departments />
                </div>

                <div className='selector-employees'>
                    <Employees />
                </div>

                <div className='selector-heads'>
                    <DepartmentHeads />
                </div>
            
                {/* <div className='selector-department'>
                <Link to='departments'>
                <div className='dept'>
                Departments
                </div>    
                </Link>
                </div>

                <div className='selector-employees'>
                <Link to='employees'>
                <div className='dept'>
                Employees
                </div>
                </Link>
                </div>

                <div className='selector-heads'>
                <Link to='heads'>
                <div className='dept'>
                Department Heads
                </div>
                </Link>
                </div> */}
          
           
        </div>
    );
}

export default Dashboard;
