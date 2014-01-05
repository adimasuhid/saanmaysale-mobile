// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var mainWin = Titanium.UI.createWindow({
    title: "Sale Sale Sale!",
    backgroundColor: "#000",
    url: "sale.js"
});

var mainTab = Titanium.UI.createTab({
	title: "Sale for 2014",
    icon: "KS_nav_ui.png",
    window: mainWin
});


tabGroup.addTab(mainTab);
tabGroup.open();
