
import { formatBarcode } from './BarcodeUtil/FormatBarcode';

export default function BarcodeScanSuccess(context) {
    let pageProxy = context.getPageProxy();
    var message = '';
    var actionResult = context.getActionResult('BarcodeScannerResult');
    var scannedResult = actionResult.data;
    let formatedBarcode = formatBarcode(scannedResult)
    context.read('/ProductCatalog2/Services/productcatalog2.service', 'Products', [], `$filter=UPC eq '${formatedBarcode}'`)
    .then(results => {
        if (results && results.length) {
            let prod = results.getItem(0);
            alert(JSON.stringify(prod))
        }
        else {
            message = `Product with barcode: ${formatedBarcode} not found`
            context.executeAction({
                'Name': '/ProductCatalog2/Actions/GenericToastMessage.action',
                'Properties': {
                    'Message': message
                }
            })
        }
    })

}
