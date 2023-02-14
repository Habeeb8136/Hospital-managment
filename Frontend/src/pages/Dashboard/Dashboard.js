import React, { useState } from 'react';
import { Link, Navigate} from 'react-router-dom'

const Dashboard = ({userLogged ,setUserLogged }) => {
    const [redirectToDashboard, setRedirectToDashboard] = useState(false);
    function handleLogout(){
        setRedirectToDashboard(true)
    }
    if(redirectToDashboard){
        return <Navigate replace to='/Signin'/>
    }
        
        
    return (
        <div>
            {/* <Link to='/Signin'> */}
            <h1 onClick={()=>handleLogout()}>dashboard</h1>
            {/* </Link> */}
        </div>
    );
}

export default Dashboard;
