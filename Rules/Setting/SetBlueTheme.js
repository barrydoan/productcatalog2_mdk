
export default function SetBlueTheme(context) {
    let pageProxy = context.getPageProxy()
    alert(JSON.stringify(pageProxy.getAvailableThemes()))
    pageProxy.setTheme('BlueTheme')
}
