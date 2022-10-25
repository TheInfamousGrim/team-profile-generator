// Import 
const Engineer = require('../lib/Engineer');

/* -------------------------------------------------------------------------- */
/*                            object creation tests                           */
/* -------------------------------------------------------------------------- */

// Test object instantiation
test('A new engineer can be created', () => {
    const employeeObject = new Engineer();
    expect(typeof employeeObject).toBe('object');
});

// Test to see if a gitHub property has been created
test('A GitHub username can be added to the Engineer obj', () => {
    const github = 'TheInfamousGrim';
    const employeeInstance = new Engineer(
        'George Fincher',
        2,
        'bozo141@company.com',
        './../assets/app_imgs/diego-hernandez-unsplash.jpg',
        github
    );
    expect(employeeInstance.gitHub).toBe('TheInfamousGrim');
});

// Test to see if the property role has the value Engineer
test('Employee has been added as the value for the property of role', () => {
    const returnValue = 'Engineer';
    const employeeInstance = new Engineer(
        'George Fincher',
        2,
        'bozo141@company.com',
        './../assets/app_imgs/diego-hernandez-unsplash.jpg',
        'TheInfamousGrim'
    );
    expect(employeeInstance.getRole()).toBe(returnValue);
});

/* -------------------------------------------------------------------------- */
/*                             object method tests                            */
/* -------------------------------------------------------------------------- */

// Test to see if getGitHub() method works
test('GitHub username is retrieved through the getGitHub() method', () => {
    const testGithub = 'TheInfamousGrim';
    const employeeInstance = new Engineer(
        'George Fincher',
        2,
        'bozo141@company.com',
        './../assets/app_imgs/diego-hernandez-unsplash.jpg',
        testGithub
    );
    expect(employeeInstance.getGitHub()).toBe(testGithub);
});
