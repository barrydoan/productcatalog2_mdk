
export function formatBarcode(barcode) {
    if (barcode.length === 12) {
        // add dash to the barcode
        let barcode0 = barcode.substring(0, 1)
        let barcode1 = barcode.substring(1, 6)
        let barcode2 = barcode.substring(6, 10)
        let barcode3 = barcode.substring(11)
        return [barcode0, barcode1, barcode2, barcode3].join('-')
    }
    return barcode
}
