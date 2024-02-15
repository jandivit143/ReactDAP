// import React, { Suspense, lazy } from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Cricketers from "./cricketers";
// import Schedule from "./schedule";
// import Home from "./home";
// import AllCricketers from "./allcricketers";
// import Player from "./player";
// import PageNotFound from "./pagenotfound";

// // importing this lazily
// const AboutUs = lazy(() => import('./about'));
// const ContactUs = lazy(() => import('./contact'));

// const Main = () => (
//     <Routes>
//         {/* <Route path="/" element={<Home />} /> */}

//         {/* For user accessibility perspective i should navigate to another path */}
//         <Route path="/" element={<Navigate to='/home' />} />
//         <Route path="/home" element={<Home />} />
//         {/* Nested Routing */}
//         <Route path="/cricketer" element={<Cricketers />} >
//             <Route path="/cricketer/allCricketers" element={<AllCricketers />} />
//             <Route path=":id" element={<Player />} />
//         </Route>
//         <Route path="/schedule" element={<Schedule />} />
//         <Route path="/about" element={
//             <Suspense fallback={<>... </>}>
//                 <AboutUs />
//             </Suspense>
//         } />
//         <Route path="/contact" element={
//             <Suspense fallback={<>... </>}>
//                 <ContactUs />
//             </Suspense>
//         } />
//         <Route path="*" element={<PageNotFound />} />
//     </Routes>
// )
// export default Main;

// using @loadable/component
import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cricketers from "./cricketers";
import Schedule from "./schedule";
import Home from "./home";
import AllCricketers from "./allcricketers";
import Player from "./player";
import PageNotFound from "./pagenotfound";
// loadable library applies React lazy loading and also take care of Suspense
import loadable from '@loadable/component';

// importing this lazily
const AboutUs = loadable(() => import('./about'));

// For default export
// const ContactUs = loadable(() => import('./contact'));

// For named export
const ContactUs = loadable(() => import('./contact'),{
    resolveComponent: (components) => components.ContactUs,
});

const Main = () => (
    <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        {/* For user accessibility perspective i should navigate to another path */}
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Home />} />
        {/* Nested Routing */}
        <Route path="/cricketer" element={<Cricketers />} >
            <Route path="/cricketer/allCricketers" element={<AllCricketers />} />
            <Route path=":id" element={<Player />} />
        </Route>
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
)
export default Main;