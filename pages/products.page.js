const BasePage = require('./base.page')

class ProductsPage extends BasePage {

    get logo() { 
        return $('~App logo and name')
    }

    get titulo_secao() {
        return $('~title')
    }

    get titulo_prod() {
        return $('android=new UiSelector().text("Sauce Labs Backpack")')
    }

    async clicar_no_produto(index){
        await $(`android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(${index})`).click()
    }
    
}

module.exports = new ProductsPage()