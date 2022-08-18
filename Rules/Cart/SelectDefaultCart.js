
export default function SelectDefaultCart(context) {
    let pageProxy = context.getPageProxy()
    // application level
    let clientData = pageProxy.getAppClientData()
    let value = context.getValue()
    clientData['defaultCartId'] = value[0].ReturnValue
    clientData['defaultCartNo'] = value[0].DisplayValue
    context.executeAction({
        'Name': '/ProductCatalog2/Actions/CloseModalComplete.action'
    })
}
