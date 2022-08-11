import { fileExists } from './FileUtils/FileExists';
import { imageToPath } from './FileUtils/ImageToPath';
import { pathToFile } from './FileUtils/PathToFile';
import { writeSync } from './FileUtils/WriteSync';

export default async function GetDetailImage(context, folderName) {
	let pageProxy = context.getPageProxy();
	let prod = context.binding;
	console.log(prod.ProductId);
	console.log(prod["@odata.readLink"]);
    
	let targetFolderName = folderName ? folderName : 'ProductImages';
	
	//Get the filename based on the ProductId's value
	const fileName = imageToPath(prod, 'ID', targetFolderName);
	
		return context.executeAction({
			"Name": "/ProductCatalog2/Actions/Product/DownloadProductImage.action",
			"Properties": {
				"Target": {
					"ReadLink": prod["@odata.readLink"]
				}
			}
		}).then(result => {
                if (result && result.data) {
                    console.log("Downloaded: " + fileName);
                    const file = pathToFile(fileName);
                    console.log("Downloaded data: " + result.data);
                    writeSync(this, file, result.data);
                    alert('ok')
                    return fileName;
                }
                else {
                    alert('not ok')
                    //This shouldn't really happen unless something is wrong with the data.
                    console.log("NO DATA!!!!!!!");
                }
            },
                error => {
                    alert(error)
            }
        );
	
	//Otherwise you can maybe return a placeholder image path, if you wish
	
}