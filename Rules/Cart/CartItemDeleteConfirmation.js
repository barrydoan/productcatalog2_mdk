
export default function CartItemDeleteConfirmation(context) {
    console.log('go to application')
    context.executeAction({
        'Name': '/ProductCatalog2/Actions/DeleteConfirmation.action'}).then(result => {
        if (result.data) {
            context.executeAction({
                'Name': '/ProductCatalog2/Actions/Cart/DeleteCartItem.action'}).then(
                success => {
                    context.executeAction({
                        'Name': '/ProductCatalog2/Actions/Cart/NaviTo_CartDetail.action'
                    })
                },
                failure => {
                    console.log(failure)
                }
            )

        } else {
            console.log('User rejected')
        }
    });
}
