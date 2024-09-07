function pesquisar() {
// Seleciona a seção HTML onde os resultados serão exibidos.   
let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value 

// Se campoPequisa for vazio, não mostra nada !!!

if (!campoPesquisa) {
    section.innerHTML = "<p>Instrutor(a) não encontrato, Voce precisa digitar o instrutor ou alguma palavra chave !!!<p/>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()


// Inicializa uma string para armazenar o HTML dos resultados.
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

// Para cada instrutor faça a pesquisa !!!
// Itera sobre cada instrutor e cria o HTML correspondente.


for (let instrutor of instrutores) {
    titulo = instrutor.titulo.toLowerCase()
    descricao = instrutor.descricao.toLowerCase()
    tags = instrutor.tags.toLowerCase()
   
    // Se titulo includes campoPesquisa
   
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

        // Cria um novo elemento

        resultados += `
        <Div class="item-resultado">
                <h2>
                   <a href="#" target ="_blank">${instrutor.titulo}</a>
                </h2>
                <p>Biografia</p>
                <p class="descricao-meta">${instrutor.descricao}</p>
            <a href=${instrutor.link} target="_blank">Saiba mais aqui !!!</a>
        </Div>
    `
    }
}
    if (!resultados) {
        resultados = "<p>Nada foi encontrato</p>"
        


    }
    //console.log(instrutor.titulo.includes(campoPesquisa))
       
    //Cria novo elemento HTML para cada resultado

    // Atualiza o conteúdo da seção com os resultados.
section.innerHTML = resultados;
    
}



