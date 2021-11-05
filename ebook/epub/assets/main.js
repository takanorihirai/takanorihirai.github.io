/**
 * 電子書籍サンプル｜印刷・DTPは岡山県岡山市の印刷会社、株式会社内外プロセス https://www.naigai-net.co.jp/ebook/sample.html
 */
var epub_array = [
    'epub/moby-dick.epub',
    'epub/arisihino_uta.epub',
    'epub/choifurudougu.epub',
    'epub/chumonno_oi_ryoriten.epub',
    'epub/gaitokidan.epub',
    'epub/harapekorobot.epub',
    'epub/naigai_guide.epub',
    'epub/ondemand.epub',
    'epub/oretoshoujyo.epub',
    'epub/alice.epub',
];

var index_epub = getParameterByName('e');
console.log('index_epub', index_epub)
if (!index_epub || index_epub.length == 0) {
    index_epub = 0;
}
console.log('index_epub', index_epub)
if (!epub_array[index_epub]) {
    index_epub = 0;
}
var url_epub = getCurrentUrlPath()+epub_array[index_epub];
console.log('url_epub', url_epub)

var book = ePub(url_epub);
var rendition = book.renderTo('viewer', {
    flow: 'paginated',
    width: '100%',
    height: '100%',
    allowScriptedContent: true
});


var displayed = rendition.display();
displayed.then(function (renderer) {
    // -- do stuff
    console.log('renderer', renderer);
    var currentLocation = rendition.currentLocation();
    console.log('currentLocation', currentLocation);
    // Get the Percentage (or location) from that CFI
    var c = book.locations.percentageFromCfi(currentLocation.start.cfi);

});

// Navigation loaded
book.loaded.navigation.then(function (toc) {
    console.log('toc', toc);
    console.log('book', book);
    console.log('rendition', rendition);
});

var next = document.getElementById('next');
next.addEventListener('click', function () {
    rendition.next();
}, false);

var prev = document.getElementById('prev');
prev.addEventListener('click', function () {
    rendition.prev();
}, false);

var keyListener = function (e) {

    // Left Key
    if ((e.keyCode || e.which) == 37) {
        rendition.prev();
    }

    // Right Key
    if ((e.keyCode || e.which) == 39) {
        rendition.next();
    }

};

// 
rendition.on('relocated', function (location) {
    console.log('location', location);
    var nodeMessage = document.getElementById('message');
    if (location.hasOwnProperty('atStart')){
        console.log('atStart');
        nodeMessage.textContent = '最初のページ';
    }else if (location.hasOwnProperty('atEnd')){
        console.log('atEnd');
        nodeMessage.textContent = '最後のページ';
    }else{
        console.log('normal');
        nodeMessage.textContent = '';
    }

    var percent = book.locations.percentageFromCfi(location.start.cfi);
    var percentage = Math.floor(percent * 100);
    console.log('percentage', percentage);

    console.log('book', book);
    console.log('rendition', rendition);

});

rendition.on('keyup', keyListener);
document.addEventListener('keyup', keyListener, false);