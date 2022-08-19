
export default async function ExecuteCreateCart(context) {
    try {
        console.log('ExecuteCreateCart start')
        console.time('ExecuteCreateCart')
        return await context.executeAction({
            'Name': '/ProductCatalog2/Actions/Cart/CreateCart.action'
        })
    } catch (e) {
        console.error(e);
    } finally {
        console.timeEnd('ExecuteCreateCart')
        console.log('ExecuteCreateCart end')
    }
}
