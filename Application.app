{
	"_Name": "ProductCatalog2",
	"Version": "/ProductCatalog2/Globals/AppDefinition_Version.global",
	"MainPage": "/ProductCatalog2/Pages/Main.page",
	"OnLaunch": [
		"/ProductCatalog2/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/ProductCatalog2/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/ProductCatalog2/Actions/Service/InitializeOffline.action",
	"Styles": "/ProductCatalog2/Styles/Styles.less",
	"Localization": "/ProductCatalog2/i18n/i18n.properties",
	"_SchemaVersion": "6.2"
}