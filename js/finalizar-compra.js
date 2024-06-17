document.addEventListener('DOMContentLoaded', function() {
    const listaProdutos = document.getElementById('lista-produtos');
    const totalCompra = document.getElementById('total-compra');
    const cupomInput = document.getElementById('cupom-input');
    const aplicarCupomBtn = document.getElementById('aplicar-cupom-btn');
    const confirmarCancelarBtn = document.getElementById('confirmar-cancelar-btn');
    const cancelarCompraDiv = document.getElementById('confirmar-cancelar');
    const cancelarCompraBtn = document.getElementById('cancelar-compra-btn');
    const fecharConfirmacaoBtn = document.getElementById('fechar-confirmacao-btn');
    const enderecoForm = document.getElementById('endereco-form');

    let produtos = [
        { nome: 'Produto 1', preco: 50.00 },
        { nome: 'Produto 2', preco: 30.00 },
        { nome: 'Produto 3', preco: 20.00 }
    ];

    // Função para atualizar a lista de produtos
    function atualizarListaProdutos() {
        listaProdutos.innerHTML = '';
        produtos.forEach(produto => {
            const li = document.createElement('li');
            li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
            listaProdutos.appendChild(li);
        });
        atualizarTotalCompra();
    }

    // Função para atualizar o total da compra
    function atualizarTotalCompra() {
        let total = produtos.reduce((acc, produto) => acc + produto.preco, 0);
        totalCompra.textContent = `R$ ${total.toFixed(2)}`;
    }

    // Função para aplicar o cupom de desconto
    aplicarCupomBtn.addEventListener('click', function() {
        const cupom = cupomInput.value.trim().toUpperCase();
        if (cupom === 'DESCONTO10') {
            let total = produtos.reduce((acc, produto) => acc + produto.preco, 0);
            total *= 0.9; // Aplicar 10% de desconto
            totalCompra.textContent = `R$ ${total.toFixed(2)}`;
            alert('Cupom aplicado com sucesso!');
        } else {
            alert('Cupom inválido!');
        }
    });

    // Função para exibir a confirmação de cancelamento
    confirmarCancelarBtn.addEventListener('click', function() {
        cancelarCompraDiv.style.display = 'block';
    });

    // Função para cancelar a compra
    cancelarCompraBtn.addEventListener('click', function() {
        alert('Compra cancelada com sucesso!');
        cancelarCompraDiv.style.display = 'none';
        // Resetar formulário de endereço
        enderecoForm.reset();
        // Limpar lista de produtos
        produtos = [];
        atualizarListaProdutos();
        totalCompra.textContent = 'R$ 0,00';
    });

    // Função para fechar a confirmação de cancelamento
    fecharConfirmacaoBtn.addEventListener('click', function() {
        cancelarCompraDiv.style.display = 'none';
    });

    // Atualizar a lista de produtos inicialmente
    atualizarListaProdutos();
});
