// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array containing the two students
const studentsList: Array<Student> = [student1, student2];

// Render a table using Vanilla JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Create table element
  const table: HTMLTableElement = document.createElement("table");
  table.style.border = "1px solid black";
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";

  // Create table header
  const thead: HTMLTableSectionElement = document.createElement("thead");
  const headerRow: HTMLTableRowElement = document.createElement("tr");
  
  const th1: HTMLTableCellElement = document.createElement("th");
  th1.textContent = "First Name";
  th1.style.border = "1px solid black";
  th1.style.padding = "8px";
  
  const th2: HTMLTableCellElement = document.createElement("th");
  th2.textContent = "Location";
  th2.style.border = "1px solid black";
  th2.style.padding = "8px";
  
  headerRow.appendChild(th1);
  headerRow.appendChild(th2);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody: HTMLTableSectionElement = document.createElement("tbody");

  // Append a new row for each student
  studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = document.createElement("tr");
    
    const cell1: HTMLTableCellElement = document.createElement("td");
    cell1.textContent = student.firstName;
    cell1.style.border = "1px solid black";
    cell1.style.padding = "8px";
    
    const cell2: HTMLTableCellElement = document.createElement("td");
    cell2.textContent = student.location;
    cell2.style.border = "1px solid black";
    cell2.style.padding = "8px";
    
    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Append the table to the document body
  document.body.appendChild(table);
});
