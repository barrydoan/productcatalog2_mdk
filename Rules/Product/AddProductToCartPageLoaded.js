
export default function AddProductToCartPageLoaded(context) {
    context.executeAction({
        'Name': '/ProductCatalog2/Actions/AddProductToCartConfirmation.action'}).then(result => {
        if (result.data) {
            let pageProxy = context.getPageProxy()
            // application level
            let clientData = pageProxy.getAppClientData()
            
            if (clientData.defaultCartId) {
               //alert(JSON.stringify(context.binding))
               context.executeAction({
                    "Name": "/ProductCatalog2/Actions/Cart/AddItemToCart.action",
                    'Properties': {
                        'Properties': {
                            'parent_ID': clientData.defaultCartId,
                            'product_ID':context.binding.ID
                        }
                    }
                }).then(
                    results => {
                        //alert(JSON.stringify(results))
                        console.log(results)
                    },
                    error => {
                        //alert(JSON.stringify(error))
                        console.log(error)
                    }                
                )
                context.executeAction({
                    'Name': '/ProductCatalog2/Actions/CloseModalComplete.action'
                })
            } else {
                // open page to select car to add product
                context.executeAction({
                    'Name': '/ProductCatalog2/Actions/Cart/NaviTo_CartSelection.action'
                })
            }

        } else {
            console.log('User rejected')
        }
    });
}
