
export default function AddProductToCartReturning(context) {
    var message = `Product : ${context.binding.name} has not been added to cart yes`
    context.executeAction({
        'Name': '/ProductCatalog2/Actions/GenericToastMessage.action',
        'Properties': {
            'Message': message
        }
    }).then(success => {
        context.executeAction({
            'Name': '/ProductCatalog2/Actions/CloseModalComplete.action'
        
        }
    )})
}
