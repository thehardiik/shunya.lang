module.exports = function codeGenerator(ast){
    if(ast.type === 'Program' ){
        // Apply CodeGenerator Function recursively on each elements of body array
        return ast.body.map(codeGenerator).join("\n")
    }

    if(ast.type === 'Declaration' ){
        const expression = "const " + ast.name + " " + "= " + ast.value
        return expression
    }

    if(ast.type === 'Print' ){
        const expression = `console.log(${ast.expression})`
        return expression
    }
    
}