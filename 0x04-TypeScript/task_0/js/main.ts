interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "king",
    lastName: "kendrick",
    age: 19,
    location: "Lagos"
};

const student2: Student = {
    firstName: "chima",
    lastName: "Nnachi",
    age: 22,
    location: "Abakaliki"
};

const studentsList: Student[] = [student1, student2];

const tableBody = document.querySelector<HTMLTableSectionElement>("#myTable tbody");

studentsList.forEach(student => {
        const row = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        tableBody.appendChild(row);
});
