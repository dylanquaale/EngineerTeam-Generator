const Employee = require('../lib/Employee');

test ('employee values test', () => {
    const employee = new Employee('dylan', 1234, 'dylanquaale33@gmail.com')
    expect(employee.name).toBe('dylan')
    expect(employee.id).toBe(1234) 
    expect(employee.email).toBe('dylanquaale33@gmail.com')
    expect(employee.getName()).toBe('dylan')
    expect(employee.getId()).toBe(1234) 
    expect(employee.getEmail()).toBe('dylanquaale33@gmail.com')
}) 


