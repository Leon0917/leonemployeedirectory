import React from "react";


const Employee=(props)=>{
 

//   handleData = () => {
//     if (this.state.sortDirection === "asc") {
//       this.setState({
//         data: this.state.data.sort((a, b) => (a.name > b.name ? 1 : -1)),
//         sortDirection: "desc",
//       });
//     } else {
//       this.setState({
//         data: this.state.data.sort((a, b) => (a.name > b.name ? -1 : 1)),
//         sortDirection: "asc",
//       });
//     }
//   };

  
    let staffData = props.data;
    return (
      <div>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>
                <button onClick={props.handleData}>Name</button>
              </th>
              <th>Phone number</th>
              <th>Email</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((emp, key) => {
              return (
                <tr key={key}>
                  <th>{emp.name}</th>
                  <th>{emp.phoneNumber}</th>
                  <th>{emp.email}</th>
                  <th>{emp.location}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }


export default Employee;
