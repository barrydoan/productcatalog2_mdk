export default async function ExecuteUpdateCartItem(context) {
    try {
        console.log('ExecuteUpdateCartItem start')
        console.time('ExecuteUpdateCartItem')
        await context.executeAction({
            'Name': '/ProductCatalog2/Actions/Cart/UpdateCartItem.action'
        })
    } catch (e) {
        console.error(e);
    } finally {
        console.timeEnd('ExecuteUpdateCartItem')
        console.log('ExecuteUpdateCartItem end')
    }
}
