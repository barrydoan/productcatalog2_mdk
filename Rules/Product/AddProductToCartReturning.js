
export default async function AddProductToCartReturning(context) {
    try {
        console.log('AddProductToCartReturning start')
        console.time('AddProductToCartReturning')
        var message = `Product : ${context.binding.name} has not been added to cart yet`
        await context.executeAction({
            'Name': '/ProductCatalog2/Actions/GenericToastMessage.action',
            'Properties': {
                'Message': message
            }
        })
        await context.executeAction({
            'Name': '/ProductCatalog2/Actions/CloseModalComplete.action'
        })
             
    } catch (e) {
        console.error(e);
    } finally {
        console.timeEnd('AddProductToCartReturning')
        console.log('AddProductToCartReturning end')
    }
}
