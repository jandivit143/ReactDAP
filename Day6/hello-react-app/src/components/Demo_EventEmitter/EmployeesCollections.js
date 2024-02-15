import EventEmitter from 'events';

class EmployeeCol extends EventEmitter{
    constructor(){
        super();
        this.employees = [
            {
                id: 111123213124,
                name: 'Sachin',
                city: 'Mumbai'
            },
            {
                id: 233223213124,
                name: 'Rahul',
                city: 'Bengaluru'
            },
            {
                id: 34543213124,
                name: 'Sourav',
                city: 'Kolkata'
            }
        ]
    }
    getAll(){
        return this.employees;
    }
    addEmployee(name,city){
        const id = Date.now();
        this.employees.push({
            id,
            name,
            city
        });
        // publish / raise an event
        this.emit('change'); // raising custom event 'change'
        console.log(this.employees);
    }
}

let empCol = new EmployeeCol();

window.empCol = empCol; // exposing empCol object at window property empCol;

export default empCol;