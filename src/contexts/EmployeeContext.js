import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext()

const EmployeeContextProvider  = (props) => {

    const [employees, setEmployees] = useState([
        {id:uuidv4(), name: 'Kake Tier', email: 'jaketier@mail.com', address: '89 New York', phone: '(083) 345-8753'},
        {id:uuidv4(), name: 'Aguasha Atanis', email: 'aquasha atanis@mail.com', address: '54 St. Dubai', phone: '(234) 097-3245'},
        {id:uuidv4(), name: 'Daisy Rosie', email: 'daisy@mail.com', address: 'La ves, Italy', phone: '(543) 705-3213'},
        {id:uuidv4(), name: 'Peter Pinapple', email: 'peter@mail.com', address: 'Ohaio, Hawaii', phone: '(204) 468-3568'},
        {id:uuidv4(), name: 'Attiva Blanca', email: 'attiva@mail.com', address: 'China', phone: '(364) 436-9764'}
])

useEffect(()=> {
    setEmployees(JSON.parse(localStorage.getItem('employees')))
},[])

useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
})



const sortedEmployees = employees.sort((a,b)=>(a.name < b.name ? -1 : 1));



const addEmployee = (name, email, address, phone) => {
    setEmployees([...employees , {id:uuidv4(), name, email, address, phone}])
}

const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id))
}

const updateEmployee = (id, updatedEmployee) => {
    setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee : employee))
}

    return (
        <EmployeeContext.Provider value={{sortedEmployees, addEmployee, deleteEmployee, updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;