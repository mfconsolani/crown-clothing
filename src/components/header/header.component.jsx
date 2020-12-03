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

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles.jsx';

import './header.styles'

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop' className='option type1'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop' className='option type1'>
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                <OptionDiv className='option type1' onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                :
                <OptionLink className='option type1' to='/signin'>
                    SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        { hidden ? null : <CartDropdown/> }
    </HeaderContainer>
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