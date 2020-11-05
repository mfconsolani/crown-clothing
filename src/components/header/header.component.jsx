import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option type1'>
                SHOP
            </Link>
            <Link to='/shop' className='option type1'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option type1' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option type1' to='/signin'>
                    SIGN IN
                </Link>
            }
        </div>
    </div>
)


export default Header;