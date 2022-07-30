const fs = require('fs')
const path = require('path')

module.exports = { 
    lerDados:function(caminho){
       const dados = JSON.parse(fs.readFileSync(path.join(__dirname, caminho), { encoding:"utf-8" }));

       return dados;
    },

    gravarDados:function(caminho, dados){
        const dadosTextos = JSON.stringify(dados);

        fs.writeFileSync(path.join(__dirname, caminho), dadosTextos);
         
     }
}