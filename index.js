var dados = []


function populaTabela(){
    if(Array.isArray(dados)) {

      $("#tblDados tbody").html("")

      dados.forEach(function(item){
          $("#tblDados tbody").append(`<tr>
          <td></td>
          </tr>`);
      });
    }
}

$(function (){
 // EXECUTA AO CARREGAR DA TELA

   dados =  JSON.parse(localStorage.getItem("__dados__"));

   if(dados){
    populaTabela()
   }

})