(function() {
    var beforePrint = function() {
    };

    var afterPrint = function() {
        windw.close();
    };

    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                beforePrint();
            } else {
                afterPrint();
            }
        }); 
    }

    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
}());