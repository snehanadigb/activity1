// Employee class
class Employee {
    constructor(employeeName, netPay, department) {
        this.employeeName = employeeName;
        this.netPay = netPay;
        this.department = department; // New department attribute
    }
}

// Node class for linked list
class Node {
    constructor(employee) {
        this.employee = employee;
        this.next = null;
    }
}

// LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add an employee to the list
    add(employee) {
        const newNode = new Node(employee);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Print all employees in the list
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(`Employee Name: ${current.employee.employeeName}, Net Pay: ${current.employee.netPay}, Department: ${current.employee.department}`);
            current = current.next;
        }
    }

    // Find an employee by name
    findByName(name) {
        let current = this.head;
        while (current !== null) {
            if (current.employee.employeeName === name) {
                return current.employee;
            }
            current = current.next;
        }
        return null;
    }
}

// Payroll class
class Payroll {
    constructor() {
        this.employeeList = new LinkedList();
    }

    // Add a new employee to the payroll
    addEmployee(employeeName, netPay, department) {
        const employee = new Employee(employeeName, netPay, department);
        this.employeeList.add(employee);
    }

    // Print all employees' details
    printPayroll() {
        this.employeeList.printList();
    }

    // Find an employee by name
    getEmployeeByName(name) {
        return this.employeeList.findByName(name);
    }
}

// Example usage
const payroll = new Payroll();

payroll.addEmployee('John Doe', 5000, 'Engineering');
payroll.addEmployee('Jane Smith', 5500, 'Marketing');

console.log('Payroll Details:');
payroll.printPayroll();

const employee = payroll.getEmployeeByName('Jane Smith');
if (employee) {
    console.log(`Found Employee: ${employee.employeeName}, Net Pay: ${employee.netPay}, Department: ${employee.department}`);
} else {
    console.log('Employee not found');
}
