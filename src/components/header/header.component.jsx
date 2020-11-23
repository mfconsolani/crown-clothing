import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
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
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown/> }
    </div>
)

//Pay attention to the destructuring for nested values
// const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
//     currentUser,
//     hidden
// });


// This one using structured selector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);