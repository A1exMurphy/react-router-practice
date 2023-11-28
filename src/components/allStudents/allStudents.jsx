import React from 'react';
import StudentList from '../StudentList/StudentList.jsx';

function AllStudents() {
    // console.log('all the students')
    return (
    <div>
        <h1>
        <p>Student list:</p>
            <StudentList />
        </h1>
    </div>
    )
}


export default AllStudents;