// start of script.js
class Student {
    constructor(name) {
        this.name = name; 
        this.isPresent = null; 
    }

    // methods to change state of object
    markPresent() {
        this.isPresent = true;
    }

    markAbsent() {
        this.isPresent = false;
    }
}

// DOM elements selection
const studentName = document.getElementById('studentName');
const addStudentBtn = document.getElementById('addStudentBtn');
const attendanceList = document.getElementById('attendanceList');

// main event listener
addStudentBtn.addEventListener('click', () => {
    const nameValue = studentName.value.trim(); // this will capture input value

    // validation that checks empty inputs and alerts user to enter a name
    if (nameValue === "") {
        alert("Please enter a student name."); 
        return; 
    }

    // instantiate a new Student object
    const newStudent = new Student(nameValue);
    
    // console.log("New Student Object Created:", newStudent);

    // create DOM elements to represent the student in the attendance list
    const li = document.createElement('li'); 
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = newStudent.name;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'action-buttons';

    // action buttons for marking present, absent, and removing the student from the list
    const presentBtn = document.createElement('button');
    presentBtn.textContent = 'Mark Present';
    presentBtn.className = 'btn-present';

    const absentBtn = document.createElement('button');
    absentBtn.textContent = 'Mark Absent';
    absentBtn.className = 'btn-absent';

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'btn-remove';

    // button functionaliy
    presentBtn.addEventListener('click', () => {
        newStudent.markPresent();
        console.log("Updated Object:", newStudent);
        nameSpan.innerHTML = `${newStudent.name} <span class="text-present">(Present)</span>`;

        li.classList.remove('box-absent');
        li.classList.add('box-present');
    });

    absentBtn.addEventListener('click', () => {
        newStudent.markAbsent(); 
        console.log("Updated Object:", newStudent);
        nameSpan.innerHTML = `${newStudent.name} <span class="text-absent">(Absent)</span>`;

        li.classList.remove('box-present');
        li.classList.add('box-absent');
    });

    removeBtn.addEventListener('click', () => {
        li.remove(); 
        console.log(`Removed ${newStudent.name} from the tracker.`);
    });

    // 
    buttonContainer.append(presentBtn, absentBtn, removeBtn);
    li.append(nameSpan, buttonContainer);
    attendanceList.appendChild(li);

    // clears input field after adding student to the list
    studentName.value = "";
});