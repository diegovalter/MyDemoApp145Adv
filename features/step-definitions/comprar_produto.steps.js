import { Given, When, Then, After } from "@wdio/cucumber-framework"
import ProductPage from "../../pages/products.page"
import ProductDetailPage from "../../pages/product_details.page"
import CartPage from "../../pages/cart.page"

Given("que estou na tela de Produtos", async() => {
   await driver.pause(1000) // pausa para aguardar a tela cerregar
   await expect(ProductPage.logo).toBeDisplayed() // está sendo exibido
   await expect(ProductPage.titulo_secao).toBeDisplayed()
   await expect(ProductPage.titulo_secao).toHaveText('Products')
    
})

When("seleciono o {string} na posicao {string}", async(produto1, index1) => {
    await ProductPage.clicar_no_produto(index1)
    await expect(ProductDetailPage.titulo_produto).toHaveText(produto1)
})

When("adiciono o produto no carrinho", async() =>{
    await ProductDetailPage.arrasta_para_cima(1)
    await ProductDetailPage.botao_adicionar_no_carrinho.click()
})

When("retorno para a pagina de Produtos", async() => {
    await driver.back()
    await expect(ProductPage.titulo_secao).toHaveText('Products')
    await ProductPage.arrasta_para_cima(1)
})

When("na segunda pagina seleciono o {string} na posicao {string}", async (produto2, index2) => {
    await ProductPage.clicar_no_produto(index2)
    await expect(ProductDetailPage.titulo_produto).toHaveText(produto2)
})

When("adiciono o segundo produto no carrinho", async() => {
    await ProductDetailPage.arrasta_para_cima(1)
    await ProductDetailPage.botao_adicionar_no_carrinho.click()
})

Then("o icone do carrinho exibe o numero 2", async() => {
    await expect(ProductDetailPage.icone_carrinho).toHaveText('2')
})

Then("clico no carrinho", async() => {
    await ProductDetailPage.icone_carrinho.click()
})

Then("vejo o {string} e o {string} no carrinho", async(produto1, produto2) => {
    await expect(CartPage.titulo_produto[0]).toHaveText(produto1)
    await expect(CartPage.titulo_produto[1]).toHaveText(produto2)
})

Then("vejo o {string} e o {string} corretamente", async(preco1, preco2) => {
    await expect(CartPage.preco_produto[0]).toHaveText(preco1)
    await expect(CartPage.preco_produto[1]).toHaveText(preco2)
})

Then("vejo o valor {string}", async(total) => {
    await expect(CartPage.preco_total_produto).toHaveText(total)
})
