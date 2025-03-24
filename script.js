function realizarCalculo(event) {  
    // Evita que a página recarregue ao enviar o formulário  
    event.preventDefault();  

    // Captura os valores dos campos do formulário  
    const nomeCliente = document.getElementById('nomeCliente').value;  
    const telefoneCliente = document.getElementById('telefoneCliente').value;  
    const vendedor = document.getElementById('vendedor').value;  
    const tamanhoFrente = parseFloat(document.getElementById('tamanhoFrente').value);  
    const tamanhoLateral = parseFloat(document.getElementById('tamanhoLateral').value);  
    
    // Captura o valor digitado da pedra  
    const valorPedra = parseFloat(document.getElementById('valorPedra').value);  
    
    // Adiciona espelhos se necessário  
    const espelhoFrente = parseFloat(document.getElementById('espelhoFrente').value) || 0;  
    const espelhoAtras = parseFloat(document.getElementById('espelhoAtras').value) || 0;  
    const espelhoEsquerda = parseFloat(document.getElementById('espelhoEsquerda').value) || 0;  
    const espelhoDireita = parseFloat(document.getElementById('espelhoDireita').value) || 0;  

    // modelo violão, se escolhido como sim, adição de 30
    const modeloViolao = document.getElementById('modeloViolao').checked;  
    if (modeloViolao) {  
        custoBancada += 30;  
    }

    // Valida se todos os valores numéricos são válidos  
    if (isNaN(tamanhoFrente) || isNaN(tamanhoLateral) || isNaN(valorPedra)) {  
        alert("Por favor, preencha todos os campos numéricos corretamente.");  
        return;  
    }  

    // Calcular a área da bancada  
    const areaBancada = tamanhoFrente * tamanhoLateral;  

    // Calcular o custo da bancada com base no valor digitado  
    let custoBancada = areaBancada * valorPedra;  

    // Adicionar custo adicional para espelhos  
    const custoEspelhos = espelhoFrente + espelhoAtras + espelhoEsquerda + espelhoDireita;  
    custoBancada += custoEspelhos;  

    // Exibir o resultado na tela  
    document.getElementById('nomeResultado').textContent = nomeCliente;  
    document.getElementById('telefoneResultado').textContent = telefoneCliente;  
    document.getElementById('vendedorResultado').textContent = vendedor;  
    document.getElementById('valorPedraResultado').textContent = valorPedra.toFixed(2);  
    document.getElementById('areaProjetoResultado').textContent = areaBancada.toFixed(2);  
    document.getElementById('valorTotalResultado').textContent = custoBancada.toFixed(2);  
}  

// Função para mostrar/ocultar campos de espelho  
function toggleEspelhos() {  
    const temEspelhos = document.getElementById('temEspelhos').value;  
    const espelhos = document.querySelectorAll('.espelho');  
    espelhos.forEach(espelho => {  
        espelho.style.display = temEspelhos === "sim" ? "block" : "none";  
    });  
}  
// copiar o resultado para area de transferencia

function copiarResultado() {
    const nomeResultado = document.getElementById('nomeResultado').textContent;
    const telefoneResultado = document.getElementById('telefoneResultado').textContent;
    const vendedorResultado = document.getElementById('vendedorResultado').textContent;
    const valorPedraResultado = document.getElementById('valorPedraResultado').textContent;
    const areaProjetoResultado = document.getElementById('areaProjetoResultado').textContent;
    const valorTotalResultado = document.getElementById('valorTotalResultado').textContent;

    const resultadoCopiado = `${nomeResultado}\n${telefoneResultado}\n${vendedorResultado}\nValor da pedra: ${valorPedraResultado}\nÁrea do projeto: ${areaProjetoResultado}\nValor total: ${valorTotalResultado}`;

    navigator.clipboard.writeText(resultadoCopiado);
}