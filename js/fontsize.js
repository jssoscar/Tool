/**
 * Author       jssoscar
 * Date         2017-2-23 17:23:58
 * Version      1.0
 * Description  Fontsize
 * Note
 */

(function(doc, win){
    var docElement = doc.documentElement;
    
    // calculate base font size
    function calcFontSize(){
        // 600 : max client width
        docElement.style.fontSize = 20 * (Math.min(docElement.clientWidth, 600) / 320) + "px";
    }
    
    // Event : content loaded
    doc.addEventListener('DOMContentLoaded', calcFontSize, false);
    
    // orientationchange or page resize event handler
    win.addEventListener('orientationchange' in win ? "orientationchange" : "resize", function(){
        setTimeout(function(){
            calcFontSize();
        }, 300);
    } , false);
})(document, window);
