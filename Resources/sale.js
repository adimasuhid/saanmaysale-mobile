var win = Titanium.UI.currentWindow;

function loadImage(url){
    var image = url;

    if (typeof image == "undefined" || image.indexOf("external") > -1){
        image = "saanmaysale.jpg"
    }

    return image;
}

function loadSale(){
    var rowData = [];
    var loader = Titanium.Network.createHTTPClient();
    loader.open("GET", "http://saanmaysale-api.herokuapp.com/");
    loader.onload = function(){
        var sales = eval('('+this.responseText+')');
        for (var i=0; i<sales.length; i++){
            var sale = sales[i].message;
            var from = sales[i].from.name;
            var avatar = sales[i].picture;
            var row = Titanium.UI.createTableViewRow({height: 'auto'});
            var post_view = Titanium.UI.createView({height:'auto',
                                                    layout:'vertical',
                                                    top: 5,
                                                    right: 5,
                                                    bottom: 5,
                                                    left:5 });

            var av_image = Titanium.UI.createImageView({
                image: loadImage(avatar),
                top: 0,
                left: 0,
                height: 80,
                width: 80
            });

            var from_lbl = Titanium.UI.createLabel({
                text: from,
                left: 90,
                width: 120,
                top: 0,
                bottom: 2,
                height: 16,
                textAlign: 'left',
                color: '#fff',
                font: {
                    fontFamily: 'Trebuchet MS', fontSize: 14, fontWeight: 'bold'
                }
            });

            var sale_lbl = Titanium.UI.createLabel({
                text: sale,
                left: 90,
                top: -75,
                bottom: 2,
                height: 100,
                width: 'auto',
                textAlign: 'left',
                font: { fontSize: 14 }
            });

            post_view.add(av_image);
            post_view.add(sale_lbl);
            post_view.add(from_lbl);
            if (sale_lbl.height < 90){
                sale_lbl.height = 100;
            }

            row.add(post_view);
            row.className = "item"+ i;
            rowData[i] = row
        }

        var tableView = Titanium.UI.createTableView({ data : rowData });
        win.add(tableView);
    };
    loader.send();
}

loadSale();
