const getEmployerRole = (employeeName, employees) => {
    let employeeProfile = employees.find((person)=>{
        return person.name === employeeName
    })
    return employeeProfile.role
};

module.exports = getEmployerRole;
