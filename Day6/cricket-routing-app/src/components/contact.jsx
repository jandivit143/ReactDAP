import React, { useEffect } from "react";

// const ContactUs = () => (
//     <h3 className="text-center" style={{textShadow: '5px 5px 6px palegreen', marginRight: '20px'}}>
//         Contact Details of the Association!<br/>
//         Mobile: 9876543210<br/>
//         Email: association@cricket.com<br/>
//         console.log('Contact Us');
//     </h3>
// )

export const ContactUs = () => {
    useEffect(() => {
        console.log('Contact Us');
    });
    return(
        <h3 className="text-center" style={{textShadow: '5px 5px 6px palegreen', marginRight: '20px'}}>
            Contact Details of the Association!<br/>
            Mobile: 9876543210<br/>
            Email: association@cricket.com<br/>
            console.log('Contact Us');
        </h3>
    )
}

// export default ContactUs;