import React from 'react';
import Aux from '../../hoc/Auxillary';
import classes from './layout.css';
const layout = (props) =>{    
 
return <Aux>
    <div>Toolbar Sidebar Back</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux>

}

export default layout;