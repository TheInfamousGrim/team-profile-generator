// Import Intern class
const Intern = require('../lib/Intern');

/* -------------------------------------------------------------------------- */
/*                            object creation tests                           */
/* -------------------------------------------------------------------------- */

// Test object instantiation
test('A new intern object can be created', () => {
    const employeeObject = new Intern();
    expect(typeof employeeObject).toBe('object');
});

// Test to see if a school property has been added to the Intern object
test('A school can be added to the school property of the Intern object', () => {
    const testSchool = 'University of Birmingham';
    const employeeInstance = new Intern(
        'George Fincher',
        2697,
        'ripbozo@69.gmail.com',
        './../assets/app_imgs/diego-hernandez-unsplash.jpg',
        testSchool
    );
    expect(employeeInstance.school).toBe('University of Birmingham');
});

// Test to see if the property role has the value Intern
test('Intern has been added as the value for the property of role', () => {
    const returnValue = 'Intern';
    const employeeInstance = new Intern(
        'George Fincher',
        2697,
        'ripbozo@69.gmail.com',
        './../assets/app_imgs/diego-hernandez-unsplash.jpg',
        'University of Birmingham'
    );
    expect(employeeInstance.getRole()).toBe(returnValue);
});

/* -------------------------------------------------------------------------- */
/*                             object method tests                            */
/* -------------------------------------------------------------------------- */

// Test to see if getSchool() method works
test('school is retrieved through the getSchool() method', () => {
    const testSchool = 'University of Birmingham';
    const employeeInstance = new Intern(
        'George Fincher',
        2697,
        'ripbozo69@gmail.com',
        './../assets/app_imgs/diego-hernandez-unsplash.jpg',
        testSchool
    );
    expect(employeeInstance.getSchool()).toBe(testSchool);
});
