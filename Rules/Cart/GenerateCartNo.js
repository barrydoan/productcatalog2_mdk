/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function GenerateCartNo(clientAPI) {
    let d = new Date()
    let year = d.getFullYear()
    let month = (d.getMonth() + 1).toString()
    let day = d.getDate().toString()
    if (month.length < 2) {
        month = '0' + month
    }
    if (day.length < 2) {
        day = '0' + day
    }
    return [year, month, day].join('-')
}
