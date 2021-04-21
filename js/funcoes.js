let guilherme = {
    nome: "Guilherme",
    vitorias:0,
    empates:0,
    derrotas:0,
    pontos:0
}

let julia = {
    nome: "Julia",
    vitorias:0,
    empates:0,
    derrotas:0,
    pontos:0
}

let daiani = {
    nome: "Daiani",
    vitorias:0,
    empates:0,
    derrotas:0,
    pontos:0
}


function CalculaPontos(jogador){
    let pontos = (jogador.vitorias * 3) + jogador.empates;
   return pontos;
}

let jogadores = [guilherme ,julia, daiani];
ExibirJogadoresNaTela(jogadores);

function ExibirJogadoresNaTela(jogadores){
    let html = "";
    for(let i = 0 ; i < jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].nome + "</td>";
        html += "<td>" + jogadores[i].vitorias + "</td>";
        html += "<td>" + jogadores[i].empates + "</td>";
        html += "<td>" + jogadores[i].derrotas + "</td>";
        html += "<td>" + jogadores[i].pontos + "</td>";
        html += "<td><button onclick='AdicionarVitoria(" + i + ")'>Vitótia</button></td>";
        html += "<td><button onclick='AdicionarEmpate()'>Empate</button></td>";
        html += "<td><button onclick='AdicionarDerrota(" + i + ")'>Derrota</button></td>";
        html += "</tr>";
    }

    let tabelajogadores = document.querySelector("#tabelaJogadores");
    tabelajogadores.innerHTML = html;
}

function AdicionarVitoria(i){
    let jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = CalculaPontos(jogador);
    ExibirJogadoresNaTela(jogadores);
}

function AdicionarEmpate(){
        for(let i = 0 ; i < jogadores.length; i++){
        let jogador = jogadores [i];
        jogador.empates++;
        jogadores.pontos = CalculaPontos(jogador);
        ExibirJogadoresNaTela(jogadores);
    }
}

function AdicionarDerrota(i){
    let jogador = jogadores [i];
    jogador.derrotas++;
    ExibirJogadoresNaTela(jogadores);
}