import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export default function ProtectedRoute({ children }) {
    const user = useSelector(state=>state.user)

    if (user.loggedIn===false) {
        
        return <Navigate to='/signin' />
    }
    return (children)
}

export function Athenticated({ children }) {
    const user = useSelector(state=>state.user)

    if (user.loggedIn) {
        
        return <Navigate to='/' />
    }
    return (children)
}