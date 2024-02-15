import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

const Layout = () => {
    // maintain the state - title
    const [title, setTitle] = useState('State and Props!');
    const [data, setData] = useState('default');
    /**
     * Go to the Development Console of browser window, In console window, press escape and then click
     * on the rendering tab, select paint flashing checkbox.
     * It will show only specific part of the page in green background, that needs to be rerendered or
     * repainted.
     */
    // This is not at all a good idea to use setTimeout in render but just to understand VirtualDOM
    // setTimeout(() => {
    //     setTitle('Props & State');
    //     setData(Date.now());
    // },1000)
    return(
        <div>
            {/* via props - passing data from parent to child */}
            <Header
            headerTitle={title}
            // to communicate from child to parent
            changeTitle={(newTitle) => setTitle(newTitle)} />
            <div id='simpleDiv' className='display-3 text-success'>
                This is simple div just to have some space in between!
                {/* <h1>{title}</h1>
                <h3>{data}</h3> */}
            </div>
            <Footer />
        </div>
    )
}
export default Layout;