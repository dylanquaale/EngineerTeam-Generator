const Engineer = require('../lib/Engineer');

test ('engineer values test', () => {
    const employee = new Engineer('dylan', 1234, 'dylanquaale33@gmail.com', 'dylanquaale')
    expect(employee.github).toBe('dylanquaale')

    expect(employee.getGithub()).toBe('dylanquaale')
}) 