import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function StudentForm() {
    
    const [student, setStudent] = useState('');


    // Called when the submit button is pressed
    const addStudent = (newStudent) => {
        // POST student to the server
        axios({
            method: 'POST',
            url: '/students',
            data: {github_name: newStudent}
        }).then((response) => {
            console.log(response);


//I think this is the place to envoke a function to return to the home page after successfully adding a student, but I think what I tried doesn't work because I'm trying to use a react component without it being embedded in another component.
            // const history = useHistory()

            //     const navigateHome = () => {
            //         history.push('/')
            //     }

        }).catch((err) => {
            console.log(err);
        });
    };

    // Called when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        addStudent(student);
        clearStudentFields();
    }

    // Clear fields of the form by reseting the user
    const clearStudentFields = () => {
        setStudent('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(event) => setStudent(event.target.value)} 
                    placeholder="GitHub username"
                    value={student} />
            <input type="submit" value="Submit" />
        </form>
    );
    
}



export default StudentForm;
