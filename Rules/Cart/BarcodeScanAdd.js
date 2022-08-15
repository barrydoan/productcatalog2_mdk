
import { formatBarcode } from '../Scan/BarcodeUtil/FormatBarcode';

export default function BarcodeScanAdd(context) {
    let pageProxy = context.getPageProxy();
    var message = '';
    var actionResult = context.getActionResult('BarcodeScannerResult');
    var scannedResult = actionResult.data;
    let formatedBarcode = formatBarcode(scannedResult)
    context.read('/ProductCatalog2/Services/productcatalog2.service', 'Products', [], `$filter=UPC eq '${formatedBarcode}'`)
    .then(results => {
        if (results && results.length) {
            let prod = results.getItem(0);
            //alert(context.binding.ID)
            //alert(prod.ID)
            context.executeAction({
                "Name": "/ProductCatalog2/Actions/Cart/AddItemToCart.action",
                'Properties': {
                    'Properties': {
                        'parent_ID': context.binding.ID,
                        'product_ID': prod.ID
                    }
                }
            }).then(
                results => {
                    //alert(JSON.stringify(results))
                    console.log(results)
                },
                error => {
                    //alert(JSON.stringify(error))
                    console.log(error)
                }                
            )
            context.executeAction({
                'Name': '/ProductCatalog2/Actions/Cart/NaviTo_CartDetail.action'
            })
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
