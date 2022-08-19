
import { formatBarcode } from '../Scan/BarcodeUtil/FormatBarcode';

export default async function BarcodeScanAdd(context) {
    try {
        console.log('BarcodeScanAdd start')
        console.time('BarcodeScanAdd')
        let pageProxy = context.getPageProxy();
        var message = '';
        var actionResult = context.getActionResult('BarcodeScannerResult');
        var scannedResult = actionResult.data;
        let formatedBarcode = formatBarcode(scannedResult)
        let results = await context.read('/ProductCatalog2/Services/productcatalog2.service', 'Products', [], `$filter=UPC eq '${formatedBarcode}'`)
        if (results && results.length) {
            let prod = results.getItem(0);
            //alert(context.binding.ID)
            //alert(prod.ID)
            await context.executeAction({
                "Name": "/ProductCatalog2/Actions/Cart/AddItemToCart.action",
                'Properties': {
                    'Properties': {
                        'parent_ID': context.binding.ID,
                        'product_ID': prod.ID
                    }
                }
            })
            await context.executeAction({
                'Name': '/ProductCatalog2/Actions/Cart/NaviTo_CartDetail.action'
            })
        }
        else {
            message = `Product with barcode: ${formatedBarcode} not found`
            await context.executeAction({
                'Name': '/ProductCatalog2/Actions/GenericToastMessage.action',
                'Properties': {
                    'Message': message
                }
            })
        }
    } catch (e) {
        console.error(e);
    } finally {
        console.timeEnd('BarcodeScanAdd')
        console.log('BarcodeScanAdd end')
    }
}
