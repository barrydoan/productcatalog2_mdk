/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SetDefaultTheme(context) {
    let pageProxy = context.getPageProxy()
    pageProxy.setTheme('Styles')
}
