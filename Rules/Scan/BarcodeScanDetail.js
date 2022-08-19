
import { formatBarcode } from './BarcodeUtil/FormatBarcode';

export default async function BarcodeScanDetail(context) {
    try {
        console.log('BarcodeScanDetail start')
        console.time('BarcodeScanDetail')
        let pageProxy = context.getPageProxy();
        var message = '';
        var actionResult = context.getActionResult('BarcodeScannerResult');
        var scannedResult = actionResult.data;
        let formatedBarcode = formatBarcode(scannedResult)
        let results = await context.read('/ProductCatalog2/Services/productcatalog2.service', 'Products', [], `$filter=UPC eq '${formatedBarcode}'`)
        if (results && results.length) {
            let prod = results.getItem(0);
            pageProxy.setActionBinding(prod)
            await pageProxy.executeAction('/ProductCatalog2/Actions/Product/NaviTo_ProductDetail.action')
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
        console.timeEnd('BarcodeScanDetail')
        console.log('BarcodeScanDetail end')
    }
    

}
