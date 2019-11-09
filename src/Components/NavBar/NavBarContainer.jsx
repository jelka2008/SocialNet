import React from 'react';
import NavBar from './NavBar'
import StoreContext from '../../storeContex';

const  NavBarContainer = () => {
// debugger
    return (
        // <div>rrrrrrr</div>
        <StoreContext.Consumer> 
            {
                (store) => {
                let state = store.getState();

                return (
                    <NavBar NavBars= {state.NavBars} />
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default NavBarContainer