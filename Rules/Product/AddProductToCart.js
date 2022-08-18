
export default function AddProductToCart(context) {
    
    let pageProxy = context.getPageProxy()
    // application level
    let clientData = pageProxy.getAppClientData()
  
    
    if (clientData.defaultCartId) {
        // add product to cart
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
                // show message
                var message = `Product : ${context.binding.name} has been added to cart`
                context.executeAction({
                    'Name': '/ProductCatalog2/Actions/GenericToastMessage.action',
                    'Properties': {
                        'Message': message
                    }
                })

            },
            error => {
                //alert(JSON.stringify(error))
                console.log(error)
                // show message
                var message = `Product with id: ${context.binding.name} cannot be added to cart.`
                context.executeAction({
                    'Name': '/ProductCatalog2/Actions/GenericToastMessage.action',
                    'Properties': {
                        'Message': message
                    }
                })
            }                
        )
    } else {
        // open page to select car to add product
        context.executeAction({
            'Name': '/ProductCatalog2/Actions/Cart/NaviTo_CartSelection.action'
        }).then(success => {
            var message = `Product with id: ${context.binding.name} cannot be added to cart. Please select the cart first`
                context.executeAction({
                    'Name': '/ProductCatalog2/Actions/GenericToastMessage.action',
                    'Properties': {
                        'Message': message
                    }
            })
        })
    }

}
