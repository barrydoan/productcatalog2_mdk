
export default function HomeLoaded(context) {
    let currentCartNo = context.getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellSimpleProperty0')
    let currentCartAmount = context.getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellSimpleProperty1')
    let currentCartItem = context.getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellSimpleProperty2')
    let pageProxy = context.getPageProxy()
    // application level
    let clientData = pageProxy.getAppClientData()
    if (clientData.defaultCartId) {
        pageProxy.read('/ProductCatalog2/Services/productcatalog2.service', 'Carts', [], `$expand=Items&$filter=ID eq ${clientData.defaultCartId}`)
        .then(
            results => {
                if (results && results.length) {
                    let currentCart = results.getItem(0)
                    currentCartNo.setValue(currentCart.CardNo)
                    currentCartAmount.setValue(currentCart.total)
                    currentCartItem.setValue(currentCart.Items.length)
                }
            },
            error => {
                alert(error)
            }
        )
    }

    
}
