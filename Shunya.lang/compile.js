const lexer  = require('./lexer');
const runner  = require('./runner');
const parser  = require('./ast');
const codeGenerator = require('./exec')

let input = `
matter a = 22
matter b = 10 
observe a-b
`

function compiler(input){
    const tokens = lexer(input)
    const ast = parser(tokens)
    const executableCode = codeGenerator(ast)
    runner(executableCode)
}



 
compiler(input)

