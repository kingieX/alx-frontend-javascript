interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	readonly fullTimeEmployee: boolean;
	readonly yearsOfExperience?: number;
	readonly location: string;
}

interface Directors extends Teacher {
	numberOfReports: number;
	}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
	const firstInitial = firstName.charAt(0).toUpperCase();
	const formattedName = `${firstInitial}. ${lastName}`;
	return formattedName;
}

interface StudentInterface {
	firstName: string;
	lastName: string;
}

interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements StudentClassInterface {
	constructor(private student: StudentInterface) {}

workOnHomework(): string {
	return "Currently working";
}

displayName(): string {
	return this.student.firstName;
	}
}
