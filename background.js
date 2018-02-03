'use strict';

chrome.contextMenus.create({
    title: "English-Japanese",
    contexts: ["all"],
    type: "normal",
    onclick: function(){
        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id, {}, function(response) {
                console.log(response.selectedText);
            });
        });
    }
});
