import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {EmployeeContext} from '../contexts/EmployeeContext';
import Employee from './Employee';
import AddForm from './AddForm';

const EmployeeList = () => {

    const {sortedEmployees} = useContext(EmployeeContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);


    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedEmployees])

    
    
    const currentEmployees = sortedEmployees;
    


    return (
    <>
    <Alert show={showAlert} variant="info">
        Animal Updated Successfully!
    </Alert>
    <div className="table-title titleCard">
        <div className="row">
            <div className="col-sm-6">
                <h2>Animals</h2>
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-info" data-toggle="modal"><i className="material-icons"></i> <span>Add</span></Button>					
            </div>
        </div>
    </div>

    

    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Species</th>
                <th>Age</th>
                <th>Habitat</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentEmployees.map(employee => (
                      <tr key={employee.id}>
                        <Employee employee={employee} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Animal
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
    </>
    )
}

export default EmployeeList;