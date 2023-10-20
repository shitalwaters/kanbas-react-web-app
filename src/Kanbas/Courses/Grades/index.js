import React from 'react';
import users from "../../Database/users.json"; 

function Grades() {
  const grades = {
    "121": { assignment1: "A", assignment2: "B" },
    "122": { assignment1: "B", assignment2: "A" },
  
  };

  return (
    <div>
      <h1>Grades</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Assignment 1</th>
            <th>Assignment 2</th>
          </tr>
        </thead>
        <tbody>
          {users.filter(user => user.role === "STUDENT").map(student => (
            <tr key={student._id}>
              <td>{`${student.firstName} ${student.lastName}`}</td>
              <td>{grades[student._id]?.assignment1 || "-"}</td>
              <td>{grades[student._id]?.assignment2 || "-"}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grades;
