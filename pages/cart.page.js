const BasePage = require('./base.page')

class CartPage extends BasePage {

    get titulo_produto(){
        return $$('id=com.saucelabs.mydemoapp.android:id/titleTV')
    }

    get preco_produto(){
        return $$('id=com.saucelabs.mydemoapp.android:id/priceTV')
    }

    get preco_total_produto(){
        return $('id=com.saucelabs.mydemoapp.android:id/totalPriceTV')
    }

}

module.exports = new CartPage()