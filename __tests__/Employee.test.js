// Import Employee class from Employee file
const Employee = require('../lib/Employee');

/* -------------------------------------------------------------------------- */
/*                            test object creation                            */
/* -------------------------------------------------------------------------- */

// Test object instantiation
test('A new employee can be created', () => {
    const employeeObject = new Employee();
    expect(typeof employeeObject).toBe('object');
});

// Test name added to object
test('A name can be added as a property to an Employee Object', () => {
    const name = 'George';
    const employeeObject = new Employee(name);
    expect(employeeObject.name).toBe('George');
});

// Test id added to object
test('An ID can be added as a property to an Employee Object', () => {
    const id = 2457;
    const employeeObject = new Employee('George', id);
    expect(employeeObject.id).toBe(2457);
});

// Test email added to object
test('An email can be added as a property to an Employee Object', () => {
    const email = 'bigboy69@company.com';
    const employeeObject = new Employee('George', 2457, email);
    expect(employeeObject.email).toBe('bigboy69@company.com');
});

// Test imgSrc added to object
test('An imgSrc can be added as a property to an Employee Object', () => {
    const imgSrc = './../assets/app_imgs/alex-suprun-unsplash.jpg';
    const employeeObject = new Employee('George', 2457, 'bigboy69@company.com', imgSrc);
    expect(employeeObject.imgSrc).toBe('./../assets/app_imgs/alex-suprun-unsplash.jpg');
});

// Test that the correct role has been added
test('Employee has been added as the value for the property of role', () => {
    const returnValue = 'Employee';
    const employeeInstance = new Employee('George', 2457, 'bigboy69@company.com');
    expect(employeeInstance.getRole()).toBe(returnValue);
});

/* -------------------------------------------------------------------------- */
/*                                test methods                                */
/* -------------------------------------------------------------------------- */

// Test getName() method
test('name is retrieved through getName() method', () => {
    const testName = 'George';
    const employeeObject = new Employee(testName);
    expect(employeeObject.getName()).toBe(testName);
});

// Test getId() method
test('id is retrieved through getId() method', () => {
    const testID = 2457;
    const employeeInstance = new Employee('George', testID);
    expect(employeeInstance.getId()).toBe(testID);
});

// Test getEmail() method
test('email is retrieved through getEmail() method', () => {
    const testEmail = 'bigboy69@company.com';
    const employeeInstance = new Employee('George', 2457, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
});

// Test imgSrc added to object
test('imgSrc value is retrieved through getImgSrc() method', () => {
    const testImgSrc = './../assets/app_imgs/alex-suprun-unsplash.jpg';
    const employeeObject = new Employee('George', 2457, 'bigboy69@company.com', testImgSrc);
    expect(employeeObject.imgSrc).toBe('./../assets/app_imgs/alex-suprun-unsplash.jpg');
});
