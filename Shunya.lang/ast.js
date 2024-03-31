module.exports = function parser(tokens){
    const ast = {
        type: "Program",
        body: []
    }

    while(tokens.length > 0){
        let token = tokens.shift()

        if(token.type === 'Keyword' && token.content === 'matter'){
            let declaration = {
                type: "Declaration",
                name: tokens.shift().content,
                value: null
            }

            if(tokens[0].type === 'Assignment' && tokens[0].content === '='){
                tokens.shift()

                let expression = ''

                while(tokens.length > 0 && tokens[0].type != "Keyword"){
                    expression += tokens.shift().content
                }

                declaration.value = expression
            } 

            ast.body.push(declaration)
        }

        if(token.type === 'Keyword' && token.content === 'observe'){
            ast.body.push({
                type: "Print",
                expression: tokens.shift().content
            })
        }
    }

    return ast
}