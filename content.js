'use strict';

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        const selectedText = window.getSelection().toString();
        const win = window.open(
            `https://translate.google.com/?hl=ja#en/ja/${encodeURIComponent(selectedText)}`,
            'window1',
            'width=600,height=500,scrollbars=yes'
        );

        // 親ウィンドウを閉じたら、子ウィンドウも閉じる
        window.addEventListener('unload',function(e){
            win.close();
        });

        sendResponse({selectedText:selectedText});
    }
);

if(window.opener && location.href.startsWith('https://translate.google.com/?hl=ja#en/ja/')){
    // 親ウィンドウがあり、Google 翻訳(英和)のURLの場合
    const res = document.getElementById('gt-res-wrap');
    const src = document.getElementById('gt-src-wrap');
    document.body.innerHTML = '';
    document.body.appendChild(res);
    document.body.appendChild(src);
}
