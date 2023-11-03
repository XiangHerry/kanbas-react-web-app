import React from "react";
// import { Link, useParams } from "react-router-dom";
// import db from "../../Database";
import "../../../Vendors/kanbas.css";
import { useDispatch } from 'react-redux';
import { addAssignment } from './assignmentReducer';
import { useNavigate } from 'react-router-dom';

function AssignmentButtons() {
    const dispatch = useDispatch();
    const navigate = useNavigate();  

    const handleAddAssignment = () => {
        const newAssignmentData = {
            name: "New Assignment",
            description: "New Assignment Description",
            dueDate: "",
            availableFromDate: "",
            availableUntilDate: ""
        };
        dispatch(addAssignment(newAssignmentData));
        navigate('/Assignments/AssignmentEditor');  
    };
    

    return (
        <div>
            <input className="form-control kanbas-item-width-200 float-start"
                    placeholder="Search for Assignment"
                    style={{ width: "200px" }}
            />
    
            <button type="button" className="btn btn-light float-end">
                <i className="fa fa-ellipsis-vertical mt-1"></i>
            </button>

            <button type="button"
                    onClick={handleAddAssignment}
                    className="btn kanbas-light-gray-bg float-end me-1 kanbas-save-profile btn-danger">
                <i className="fa fa-plus mt-1 me-1"></i>
                Assignment
            </button>

            <button type="button" className="btn btn-light float-end me-1">
                <i className="fa fa-plus mt-1 me-1"></i>
                Group
            </button>
        </div>
    );
}

export default AssignmentButtons;
