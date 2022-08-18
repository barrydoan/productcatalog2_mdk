export default function CartSelectionOnLoaded(context) {
    let pageProxy = context.getPageProxy()
    // application level
    let clientData = pageProxy.getAppClientData()
    let currentCartId = context.getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellSimpleProperty0')
    let currentCartNo = context.getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellSimpleProperty1')
    let cartSelection = context.getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellListPicker0')
    if (clientData.defaultCartId) {
        currentCartId.setValue(clientData.defaultCartId)
        currentCartNo.setValue(clientData.defaultCartNo)
    }
}
