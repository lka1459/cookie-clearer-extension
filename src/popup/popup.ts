document.addEventListener('DOMContentLoaded', () => {
    let buton = document.querySelector('#buton') as HTMLInputElement

    async function getCurrentTab() {
      let tabs = await chrome.tabs.query({active: true, currentWindow: true})
      return tabs[0]?.url
    }

    async function reloadCurrentTab(tab: any) {
      chrome.tabs.reload(tab.id)
    }

    async function removeCookies(url: any) {
      let allCookies = await chrome.cookies.getAll({url})
      console.log(allCookies)
      for (let cookie of allCookies) {
        let protocol = cookie.secure ? "https://" : "http://"
        let domain = cookie.domain.startsWith(".") ? cookie.domain.substring(1) : cookie.domain
        let cookieUrl = protocol + domain + cookie.path
        await chrome.cookies.remove({
          url: cookieUrl,
          name: cookie.name
        })
      }
        }
  
    buton.addEventListener("click", async () => {
      let urls = await getCurrentTab()
      await removeCookies(urls)
      await reloadCurrentTab(urls)
                
      })})