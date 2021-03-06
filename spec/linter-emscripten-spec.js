"use babel";

describe('The Emscripten provider for AtomLinter', () => {
  const lint = require('../lib/main').provideLinter().lint

  beforeEach(() => {
    waitsForPromise(() => {
      return atom.packages.activatePackage("linter-emscripten")
    })
  })

  it('finds a fatal error in "missing_import.c"', () => {
    waitsForPromise(() => {
      return atom.workspace.open(__dirname + '/files/missing_import.c').then(editor => {
        return lint(editor).then(messages => {
          expect(messages.length).toEqual(1)
          expect(messages[0].type).toEqual("fatal error")
          expect(messages[0].text).toEqual("'nothing.h' file not found")
        })
      })
    })
  })

  it('finds a fatal error in "missing_import.cpp"', () => {
    waitsForPromise(() => {
      return atom.workspace.open(__dirname + '/files/missing_import.cpp').then(editor => {
        return lint(editor).then(messages => {
          expect(messages.length).toEqual(1)
          expect(messages[0].type).toEqual("fatal error")
          expect(messages[0].text).toEqual("'nothing.h' file not found")
        })
      })
    })
  })

  it('finds a fatal error in "missing_import.m"', () => {
    waitsForPromise(() => {
      return atom.workspace.open(__dirname + '/files/missing_import.m').then(editor => {
        return lint(editor).then(messages => {
          expect(messages.length).toEqual(1)
          expect(messages[0].type).toEqual("fatal error")
          expect(messages[0].text).toEqual("'nothing.h' file not found")
        })
      })
    })
  })

  it('finds a fatal error in "missing_import.mm"', () => {
    waitsForPromise(() => {
      return atom.workspace.open(__dirname + '/files/missing_import.mm').then(editor => {
        return lint(editor).then(messages => {
          expect(messages.length).toEqual(1)
          expect(messages[0].type).toEqual("fatal error")
          expect(messages[0].text).toEqual("'nothing.h' file not found")
        })
      })
    })
  })
})
