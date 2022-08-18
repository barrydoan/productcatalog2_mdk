
export default function CartItemDeleteConfirmation(context) {
    console.log('go to application')
    context.executeAction({
        'Name': '/ProductCatalog2/Actions/DeleteConfirmation.action'}).then(result => {
        if (result.data) {
            context.executeAction({
                'Name': '/ProductCatalog2/Actions/Cart/DeleteCartItem.action'}).then(
                success => {
                    
                },
                failure => {
                    console.log(failure)
                   
                }
            )

        } else {
            console.log('User rejected')
            context.executeAction({
                'Name': '/ProductCatalog2/Actions/CloseModalComplete.action'
            })
        }
    });
}
