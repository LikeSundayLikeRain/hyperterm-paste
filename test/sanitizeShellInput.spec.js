const expect = require('chai').expect
const sanitizeShellInput = require('../src/sanitizeShellInput')

describe('Sanitze shell input', function () {
  it('should remove any leading $', function () {
    expect(sanitizeShellInput('$ test')).to.be.eq('test')
  })

  it('should remove any leading spaces', function () {
    expect(sanitizeShellInput(' test')).to.be.eq('test')
  })

  it('should delete trailing new lines', function () {
    expect(sanitizeShellInput(' test\n')).to.be.eq('test')
  })

  it('should join multiline inputs', function () {
    expect(sanitizeShellInput(' test\ntest2')).to.be.eq('test && test2')
  })
})