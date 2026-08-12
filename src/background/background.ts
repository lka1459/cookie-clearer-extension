console.log("Testing")
chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    console.log(tabs[0]?.url)
    tabs.forEach(function(tab) {
        console.log("Tab URL", tab.url)
    })
})

function getCurrentTab() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    return tabs[0]?.url
})}

getCurrentTab()
