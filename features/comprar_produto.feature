Feature: Fluxo de Compra

    Scenario: Comprar dois produto com sucesso
        Given que estou na tela de Produtos
        When seleciono o "<produto1>" na posicao "<index1>"
        And adiciono o produto no carrinho
        And retorno para a pagina de Produtos
        And na segunda pagina seleciono o "<produto2>" na posicao "<index2>"
        And adiciono o segundo produto no carrinho
        Then o icone do carrinho exibe o numero 2
        And clico no carrinho
        And vejo o "<produto1>" e o "<produto2>" no carrinho
        And vejo o "<preco1>" e o "<preco2>" corretamente
        And vejo o valor "<total>"

        Examples:
        | produto1              | preco1    | index1 | produto2                      | preco2  | index2 | total   |
        | Sauce Labs Backpack   | $ 29.99   | 0      | Sauce Labs Backpack (yellow)  | $ 29.99 | 1      | $ 59.98 |
       