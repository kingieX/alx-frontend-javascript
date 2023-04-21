export default function createReportObject(employeesList) {
  const departmentName = Object.keys(employeesList)[0];

  const allEmployees = {
    [departmentName]: [...employeesList],
  };
  const getNumberOfDepartments = () => Object.keys(employeesList).length;
  return { allEmployees, getNumberOfDepartments };
}
