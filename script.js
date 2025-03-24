function realizarCalculo(event) {  
    // Evita que a página recarregue ao enviar o formulário  
    event.preventDefault();  

    // Captura os valores dos campos do formulário  
    const nomeCliente = document.getElementById('nomeCliente').value;  
    const telefoneCliente = document.getElementById('telefoneCliente').value;  
    const vendedor = document.getElementById('vendedor').value;  
    const tamanhoFrente = parseFloat(document.getElementById('tamanhoFrente').value);  
    const tamanhoLateral = parseFloat(document.getElementById('tamanhoLateral').value);  
    const tipoPedra = document.getElementById('tipoPedra').value;   
    const valorPedra = parseFloat(document.getElementById('valorPedra').value);  
    const modeloViolao = document.getElementById('modeloViolao').value;
    const espelhoFrente = parseFloat(document.getElementById('espelhoFrente').value) || 0;  
    const espelhoAtras = parseFloat(document.getElementById('espelhoAtras').value) || 0;  
    const espelhoEsquerda = parseFloat(document.getElementById('espelhoEsquerda').value) || 0;  
    const espelhoDireita = parseFloat(document.getElementById('espelhoDireita').value) || 0;  
  
    let custoBancada = 0; // Inicializa a variável aqui  

    // Valida se todos os valores numéricos são válidos  
    if (isNaN(tamanhoFrente) || isNaN(tamanhoLateral) || isNaN(valorPedra)) {  
        alert("Por favor, preencha todos os campos numéricos corretamente.");  
        return;  
    }  

    // Calcular a área da bancada  
    const areaBancada = tamanhoFrente * tamanhoLateral;  

    // Calcular o custo da bancada com base no valor digitado  
    custoBancada = areaBancada * valorPedra;  

    // Adicionar custo adicional para espelhos  
    const custoEspelhos = espelhoFrente + espelhoAtras + espelhoEsquerda + espelhoDireita;  
    custoBancada += custoEspelhos;  

    // valor adicional de 30 se a opção de modelo violão for escolhida como Sim

    if (modeloViolao === 'sim') {
        custoBancada += 30;
    }   
    
    
    // Exibir o resultado na tela   
    document.getElementById('tipoPedraResultado').textContent = tipoPedra;  
    document.getElementById('nomeResultado').textContent = nomeCliente;  
    document.getElementById('telefoneResultado').textContent = telefoneCliente;  
    document.getElementById('vendedorResultado').textContent = vendedor;  
    document.getElementById('valorPedraResultado').textContent = valorPedra.toFixed(2);  
    document.getElementById('areaProjetoResultado').textContent = areaBancada.toFixed(2);  
    document.getElementById('valorTotalResultado').textContent = custoBancada.toFixed(2);  
}  