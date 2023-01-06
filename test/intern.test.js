const Intern = require('../lib/Intern');

test ('intern values test', () => {
    const employee = new Intern('dylan', 1234, 'dylanquaale33@gmail.com', 'Minnesota')
    expect(employee.school).toBe('Minnesota')

    expect(employee.getSchool()).toBe('Minnesota')
}) 