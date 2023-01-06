const Manager = require('../lib/Manager');

test ('manager values test', () => {
    const employee = new Manager('dylan', 1234, 'dylanquaale33@gmail.com', 1234)
    expect(employee.officeNumber).toBe(1234)

    expect(employee.getOfficeNumber()).toBe(1234)
}) 