module.exports =  function lexer(input){
    const tokens = []
    let cursor = 0;

    while(cursor < input.length){
        let char = input[cursor]
        
        if(char == ' ' || char == '\n'){
            cursor++;
            continue;
        }

        if(char <= 'z' && char >= 'a'){
            let word = ''

            while(cursor < input.length && input[cursor] != ' ' && input[cursor] != '\n' ){
                word += input[cursor]
                cursor++
            }

            if(word == 'matter' || word == 'observe'){
                tokens.push({
                    content: word,
                    type: "Keyword"
                })
            }else{
                tokens.push({
                    content: word,
                    type: "Variable"
                })
            }
            
            cursor++
            continue;
        }

        if(char >= '0' && char <= '9'){
            let num = ''

            while(cursor < input.length && input[cursor] != ' ' && input[cursor] != '\n' ){
                num += input[cursor]
                cursor++
            }

            tokens.push({
                content: parseInt(num),
                type: "Number"
            })
            
            
            cursor++
            continue;
        }

        if(char == '=' || char == '+' || char == '-' || char == '*' || char == '/'){
            tokens.push({
                content: char,
                type: "Assignment"
            })
            cursor++
            continue;
        }
    }



    return tokens;
}