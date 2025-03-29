function realizarCalculo(event) {  
    event.preventDefault();  

    const nomeCliente = document.getElementById('nomeCliente').value.trim();  
    const telefoneCliente = document.getElementById('telefoneCliente').value.trim();  
    const vendedor = document.getElementById('vendedor').value.trim();  
    const tamanhoFrente = parseFloat(document.getElementById('tamanhoFrente').value.replace(',', '.')) || 0;  
    const tamanhoLateral = parseFloat(document.getElementById('tamanhoLateral').value.replace(',', '.')) || 0;  
    const tipoPedra = document.getElementById('tipoPedra').value;   
    const valorPedra = parseFloat(document.getElementById('valorPedra').value.replace(',', '.')) || 0;  
    const modeloViolao = document.getElementById('modeloViolao').value;
    const valorCuba = parseFloat(document.getElementById('valorCuba').value.replace(',', '.')) || 0;

    const temEspelhos = document.getElementById('temEspelhos').value;  
    const espelhoFrente = parseFloat(document.getElementById('espelhoFrente')?.value.replace(',', '.') || 0) / 100;  
    const espelhoAtras = parseFloat(document.getElementById('espelhoAtras')?.value.replace(',', '.') || 0) / 100;  
    const espelhoEsquerda = parseFloat(document.getElementById('espelhoEsquerda')?.value.replace(',', '.') || 0) / 100;  
    const espelhoDireita = parseFloat(document.getElementById('espelhoDireita')?.value.replace(',', '.') || 0) / 100;  

    if (tamanhoFrente <= 0 || tamanhoLateral <= 0 || valorPedra <= 0) {  
        alert("Por favor, preencha todos os campos numéricos corretamente.");  
        return;  
    }    
    
    const metrosQuadrados = (tamanhoFrente + espelhoEsquerda + espelhoDireita) * (tamanhoLateral + espelhoFrente + espelhoAtras);
    let custoBancada = (metrosQuadrados * valorPedra) + valorCuba;
    if (modeloViolao.toLowerCase() === "sim") {
        custoBancada += 30;
    }

    document.getElementById('nomeResultado').textContent = nomeCliente;  
    document.getElementById('telefoneResultado').textContent = telefoneCliente;  
    document.getElementById('vendedorResultado').textContent = vendedor;  
    document.getElementById('tipoPedraResultado').textContent = tipoPedra;  
    document.getElementById('valorPedraResultado').textContent = valorPedra.toFixed(2);  
    document.getElementById('areaProjetoResultado').textContent = metrosQuadrados.toFixed(2);  
    document.getElementById('valorTotalResultado').textContent = custoBancada.toFixed(2);  
}

function toggleEspelhos() {
    const select = document.getElementById('temEspelhos');
    const espelhos = document.querySelectorAll('.espelho');
    
    if (select.value === "sim") {
        espelhos.forEach(espelho => {
            espelho.style.display = "block";
        });
    } else {
        espelhos.forEach(espelho => {
            espelho.style.display = "none";
        });
    }
}

document.getElementById('temEspelhos').addEventListener('change', toggleEspelhos);
toggleEspelhos();

function copiarResultado() {
    const resultado = document.getElementById('resultado');
    if (!resultado) {
        alert("Nenhum resultado encontrado para copiar.");
        return;
    }

    let texto = "";
    resultado.querySelectorAll("p").forEach(p => {
        texto += p.textContent + "\n";
    });

    const textarea = document.createElement("textarea");
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Resultado copiado para a área de transferência.");
}
