
export default async function CartDeleteConfirmation(context) {
    try {
        console.log('CartDeleteConfirmation start')
        console.time('CartDeleteConfirmation')
        let result = await context.executeAction({
            'Name': '/ProductCatalog2/Actions/DeleteConfirmation.action'
        })
        if (result.data) {
            await context.executeAction({
                'Name': '/ProductCatalog2/Actions/Cart/DeleteCart.action'
            })
            await context.executeAction({
                'Name': '/ProductCatalog2/Actions/Cart/NaviTo_CartList.action'
            })

        } else {
            console.log('User rejected')
        }
             
    } catch (e) {
        console.error(e);
    } finally {
        console.timeEnd('CartDeleteConfirmation')
        console.log('CartDeleteConfirmation end')
    }
}
