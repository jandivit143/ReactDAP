import React, { useEffect, useState } from "react";
import empCol from "./EmployeesCollections";

const DisplayEmployees = () => {
    const [empList, setEmpList] = useState([
        {
            id: 1,
            name: 'Abhijith',
            city: 'Hyderabad'
        },
        {
            id: 2,
            name: 'Jayanth',
            city: 'Pune'
        },
        {
            id: 3,
            name: 'Raj',
            city: 'Bengaluru'
        }
    ]);

    // Event Listener for the change event
    const getEmployees = () => {
        setEmpList([...empCol.getAll()]);
    }

    useEffect(() => {
        setEmpList([...empCol.getAll()]);

        // subscribe to the 'change' event of EmployeeCol
        empCol.on('change', getEmployees);

        // unsubscribe
        return () => {
            empCol.off('change', getEmployees);
        }
    },[]);
    return(
        <div>
            <ul className="list-unstyled text-danger display-6">
                {
                    empList.map((emp) => (
                        <li key={emp.id}>{emp.name} from {emp.city}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default DisplayEmployees;