import React, { useEffect, useState } from 'react';
import './DepartmentHeads.css'
import data from '../../Assets/MOCK_DATA.json'
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
const DepartmentHeads = () => {
    const [heads, setHeads] = useState([]);
    const filtereddata=data.filter(item=>
        item.head.status===true
        )
    useEffect(() => {
        setHeads(filtereddata)
    }, []);

    return (
        <div className='heads-container'>
        <h3>Department Heads</h3>
        <br></br>
            {heads?.map((heads,index)=>
                <EmployeeCard employee={heads} key={index}/>
            )}
                

        </div>
    );
}

export default DepartmentHeads;
