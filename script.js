function realizarCalculo(event) {  
    event.preventDefault();  

    const nomeCliente = document.getElementById('nomeCliente')?.value || "";  
    const telefoneCliente = document.getElementById('telefoneCliente')?.value || "";  
    const vendedor = document.getElementById('vendedor')?.value || "";  
    const tamanhoFrente = parseFloat(document.getElementById('tamanhoFrente')?.value) || 0;  
    const tamanhoLateral = parseFloat(document.getElementById('tamanhoLateral')?.value) || 0;  
    const tipoPedra = document.getElementById('tipoPedra')?.value || "";   
    const valorPedra = parseFloat(document.getElementById('valorPedra')?.value) || 0;  
    const modeloViolao = document.getElementById('modeloViolao')?.value || "não";
    const valorCuba = parseFloat(document.getElementById('valorCuba')?.value) || 0;
    const espelhoFrente = parseFloat(document.getElementById('espelhoFrente')?.value) || 0;  
    const espelhoAtras = parseFloat(document.getElementById('espelhoAtras')?.value) || 0;  
    const espelhoEsquerda = parseFloat(document.getElementById('espelhoEsquerda')?.value) || 0;  
    const espelhoDireita = parseFloat(document.getElementById('espelhoDireita')?.value) || 0;    

    if (tamanhoFrente === 0 || tamanhoLateral === 0 || valorPedra === 0) {  
        alert("Por favor, preencha todos os campos numéricos corretamente.");  
        return;  
    }    
    
    const frenteTotal = tamanhoFrente + (espelhoEsquerda + espelhoDireita) / 100;
    const lateralTotal = tamanhoLateral + (espelhoFrente + espelhoAtras) / 100;
    const metrosQuadrados = frenteTotal * lateralTotal;

    let custoBancada = (metrosQuadrados * valorPedra) + valorCuba;
    if (modeloViolao.toLowerCase() === "sim") {
        custoBancada += 30;
    }

    document.getElementById('tipoPedraResultado').textContent = tipoPedra;  
    document.getElementById('nomeResultado').textContent = nomeCliente;  
    document.getElementById('telefoneResultado').textContent = telefoneCliente;  
    document.getElementById('vendedorResultado').textContent = vendedor;  
    document.getElementById('valorPedraResultado').textContent = valorPedra.toFixed(2);  
    document.getElementById('areaProjetoResultado').textContent = metrosQuadrados.toFixed(2);  
    document.getElementById('valorTotalResultado').textContent = custoBancada.toFixed(2);  
}
