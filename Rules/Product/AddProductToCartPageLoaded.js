
export default async function AddProductToCartPageLoaded(context) {

    try {
        console.log('AddProductToCartPageLoaded start')
        console.time('AddProductToCartPageLoaded')
        let result = await context.executeAction({
            'Name': '/ProductCatalog2/Actions/AddProductToCartConfirmation.action'
        })
        if (result.data) {
            let pageProxy = context.getPageProxy()
            // application level
            let clientData = pageProxy.getAppClientData()
            
            if (clientData.defaultCartId) {
                //alert(JSON.stringify(context.binding))
                await context.executeAction({
                    "Name": "/ProductCatalog2/Actions/Cart/AddItemToCart.action",
                    'Properties': {
                        'Properties': {
                            'parent_ID': clientData.defaultCartId,
                            'product_ID':context.binding.ID
                        }
                    }
                })
                await context.executeAction({
                    'Name': '/ProductCatalog2/Actions/CloseModalComplete.action'
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
            }

        } else {
            console.log('User rejected')
        }
             
    } catch (e) {
        console.error(e);
    } finally {
        console.timeEnd('AddProductToCartPageLoaded')
        console.log('AddProductToCartPageLoaded end')
    }
}
