//Dado um array de objetos representando produtos com propriedades categoria e preco, crie uma função que agrupe os produtos por categoria e calcule o preço total de cada categoria.

function agruparPorCategoria(produtos) {
    return produtos.reduce((agrupado, produto) => {
        if (!agrupado[produto.categoria]) {
            // Se a categoria ainda não estiver no objeto agrupado, inicialize com 0
            agrupado[produto.categoria] = 0;
        }
        // Adicione o preço do produto à categoria correspondente
        agrupado[produto.categoria] += produto.preco;
        return agrupado;
    }, {});
}

let produtos = [
    { categoria: 'eletrônicos', preco: 99.99 },
    { categoria: 'livros', preco: 19.99 },
    { categoria: 'eletrônicos', preco: 199.99 },
    { categoria: 'livros', preco: 29.99 },
    { categoria: 'roupas', preco: 49.99 }
];

console.log(agruparPorCategoria(produtos));