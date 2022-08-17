
export default function UpdateCartItemHandler(context) {

    context.executeAction({
        "Name": "/ProductCatalog2/Actions/Cart/UpdateCartItem.action", 
        'Properties': {
            'Properties': {
                'parent_ID': context.binding.ID,
                'product_ID': prod.ID
            }
        }
    }).then(
        success => {
            alert(JSON.stringify(success))
        },
        failure => {
            alert(JSON.stringify(failure))
        }
    )
}
