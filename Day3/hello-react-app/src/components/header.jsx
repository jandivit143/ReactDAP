import React from 'react';
import Title from './title';

const Header = (props) => {
    return(
        <div>
            <header className='makeCenter'>
                {/* <h1>Welcome to React.js!</h1> */}
                {/* <h1>{props.headerTitle}</h1> */}
                <Title titleTitle={props.headerTitle} />
                <input type="text" value={props.headerTitle}
                onChange={(evt) => {
                    let newTitle = evt.target.value;

                    // props are immutable
                    // props.headerTitle = newTitle;

                    // calling parent's function here in the child
                    props.changeTitle(newTitle); // - callback method
                }} />
            </header>
        </div>
    )
}
export default Header;