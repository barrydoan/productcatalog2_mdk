
export default function CartDetailPageLoaded(context) {
    let objectTable = context.getControl('SectionedTable0').getSection('SectionObjectTable0')
    context.getPageProxy().redraw()
}
