import React, { useEffect } from "react";

// const AboutUs = () => (
//     <h3 className="text-center" style={{textShadow: '5px 5px 6px navy', marginRight: '20px', fontSize: '5em'}}>
//         Cricket India Association!
//         console.log('About Us');
//     </h3>
// )

const AboutUs = () => {
    useEffect(() => {
        console.log('About Us');
    });
    return(
        <h3 className="text-center" style={{textShadow: '5px 5px 6px navy', marginRight: '20px', fontSize: '5em'}}>
            Cricket India Association!
        </h3>
    )
}


export default AboutUs;