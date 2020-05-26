import React from 'react';

// styles
import './styles/PageLoading.css';
// components
import Loader from './Loader';


function PageLoading () {
    return (
        <div className="PageLoading">
            <Loader/>
        </div>
    )
}

export default PageLoading;