
export default async function AddProductToCart(context) {

    try {
        console.log('AddProductToCart start')
        console.time('AddProductToCart')
        let pageProxy = context.getPageProxy()
        // application level
        let clientData = pageProxy.getAppClientData()
        if (clientData.defaultCartId) {
            // add product to cart
            let result = await context.executeAction({
                "Name": "/ProductCatalog2/Actions/Cart/AddItemToCart.action",
                'Properties': {
                    'Properties': {
                        'parent_ID': clientData.defaultCartId,
                        'product_ID':context.binding.ID
                    }
                }
            })
            var message = `Product : ${context.binding.name} has been added to cart`
            await context.executeAction({
                'Name': '/ProductCatalog2/Actions/GenericToastMessage.action',
                'Properties': {
                    'Message': message
                }
            })
        } else {
            // open page to select car to add product
            await context.executeAction({
                'Name': '/ProductCatalog2/Actions/Cart/NaviTo_CartSelection.action'
            })

            var message = `Product with id: ${context.binding.name} cannot be added to cart. Please select the cart first`
            await context.executeAction({
                'Name': '/ProductCatalog2/Actions/GenericToastMessage.action',
                'Properties': {
                    'Message': message
                }
            })
            
        }
             
    } catch (e) {
        console.error(e);
        var message = `Product with id: ${context.binding.name} cannot be added to cart.`
        await context.executeAction({
            'Name': '/ProductCatalog2/Actions/GenericToastMessage.action',
            'Properties': {
                'Message': message
            }
        })
    } finally {
        console.timeEnd('AddProductToCart')
        console.log('AddProductToCart end')
    }
}
