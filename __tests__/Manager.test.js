// Import Manager class
const Manager = require('../lib/Manager');

/* -------------------------------------------------------------------------- */
/*                            object creation tests                           */
/* -------------------------------------------------------------------------- */

// Test object instantiation
test('A new manager object can be created', () => {
    const employeeObject = new Manager();
    expect(typeof employeeObject).toBe('object');
});

// Test to see if officeNumber property has been added to Manager object
test('An office number can be added to the Manager object', () => {
    const testOfficeNumber = 4;
    const employeeInstance = new Manager(
        'George Fincher',
        2167,
        'pogchamp420@hotmail.com',
        './../assets/app_imgs/diego-hernandez-unsplash.jpg',
        testOfficeNumber
    );
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test('Manager has been added as the value for the property of role', () => {
    const returnValue = 'Manager';
    const employeeInstance = new Manager(
        'George Fincher',
        2167,
        'pogchamp420@hotmail.com',
        './../assets/app_imgs/diego-hernandez-unsplash.jpg',
        4
    );
    expect(employeeInstance.getRole()).toBe(returnValue);
});

/* -------------------------------------------------------------------------- */
/*                             object method tests                            */
/* -------------------------------------------------------------------------- */

test('office number is retrieved through the getOfficeNumber() method', () => {
    const testOfficeNumber = 4;
    const employeeInstance = new Manager(
        'George Fincher',
        2167,
        'pogchamp420@hotmail.com',
        './../assets/app_imgs/diego-hernandez-unsplash.jpg',
        testOfficeNumber
    );
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});
