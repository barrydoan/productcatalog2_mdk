
export default async function CartItemDeleteConfirmation(context) {
    try {
        console.log('CartItemDeleteConfirmation start')
        console.time('CartItemDeleteConfirmation')
        let result = await context.executeAction({
            'Name': '/ProductCatalog2/Actions/DeleteConfirmation.action'
        })
        if (result.data) {
            await context.executeAction({
                'Name': '/ProductCatalog2/Actions/Cart/DeleteCartItem.action'
            })

        } else {
            console.log('User rejected')
            await context.executeAction({
                'Name': '/ProductCatalog2/Actions/CloseModalComplete.action'
            })
        }

    } catch (e) {
        console.error(e);
    } finally {
        console.timeEnd('CartItemDeleteConfirmation')
        console.log('CartItemDeleteConfirmation end')
    }
}
