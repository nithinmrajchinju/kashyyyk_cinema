import React from 'react'
import SearchField from './SearchField'
import { Icon } from '@iconify/react';
import './Header.css'

function Header() {
    return (
        <div className='header-warpper'>
            <div className='title-wrapper'>
                <Icon className='icon' icon="simple-icons:bookmyshow" />
                <div className='title'>Kashyyyk Cinema</div>
            </div>
            <SearchField />
        </div>
    )
}

export default Header