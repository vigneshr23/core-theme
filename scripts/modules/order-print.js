(function() {
    var beforePrint = function() {
    };

    var afterPrint = function() {
        window.close();
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

    //We need to make sure our style sheet is loaded before calling print.
    //For some unknown reason I was unable to get Window.onload to trigger
    //So instead we set a small timeout in order to allow a break for our window to print.   
    setTimeout(function(){ window.print();}, 100);
    
}());