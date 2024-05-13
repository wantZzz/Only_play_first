chrome.contextMenus.onClicked.addListener(function (info, tab) {
	switch (info.menuItemId) {
		case 'YOPF_YoutubeUrlGet':
			const clicked_url = new URL(info.linkUrl);
			if (clicked_url.host == "www.youtube.com" && clicked_url.searchParams.has('v')){
				const frist_voido_url = "https://www.youtube.com/watch?v=" + clicked_url.searchParams.get('v');
				chrome.tabs.create({url: frist_voido_url, openerTabId: tab.openerTabId});
			}
	}
});

chrome.runtime.onInstalled.addListener(function (details){
	chrome.contextMenus.create({  
        id: 'YOPF_YoutubeUrlGet',
        type: 'normal',
        title: '只播放第一部影片',
        contexts: ['link'],
		documentUrlPatterns: ["https://www.youtube.com/*", "https://youtu.be/*"],
		targetUrlPatterns: ["https://www.youtube.com/watch*"]
    });
});