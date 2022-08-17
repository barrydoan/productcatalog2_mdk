
export default function CartDeleteConfirmation(context) {
    context.executeAction({
        'Name': '/ProductCatalog2/Actions/DeleteConfirmation.action'}).then(result => {
        if (result.data) {
            context.executeAction({
                'Name': '/ProductCatalog2/Actions/Cart/DeleteCart.action'}).then(
                success => {
                    context.executeAction({
                        'Name': '/ProductCatalog2/Actions/Cart/NaviTo_CartList.action'
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
