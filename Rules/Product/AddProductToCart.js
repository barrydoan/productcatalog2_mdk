
export default function AddProductToCart(context) {
    
    let pageProxy = context.getPageProxy()
    // application level
    let clientData = pageProxy.getAppClientData()
    
    if (clientData.defaultCartId) {
        // add product to cart
        context.executeAction({
            'Name': '/ProductCatalog2/Actions/Product/NaviTo_AddProductToCart.action'
        })
    } else {
        // open page to select car to add product
        context.executeAction({
            'Name': '/ProductCatalog2/Actions/Cart/NaviTo_CartSelection.action'
        })
    }

}
