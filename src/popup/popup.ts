document.addEventListener('DOMContentLoaded', () => {
    let slider = document.getElementById('switch_checkbox') as HTMLInputElement
    let message = document.querySelector('.test') as HTMLParagraphElement

    async function getCurrentTab() {
      let tabs = await chrome.tabs.query({active: true, currentWindow: true})
      return tabs[0]?.url
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
        
      

    slider.addEventListener("change", async () => {
        if (slider.checked) {
          message.textContent = "On"
          let urls = await getCurrentTab()
          //console.log(urls)
          if (urls) {
            await removeCookies(urls)
}
      

        } else {
            message.textContent = "Off"
            //console.log(getCurrentTab())
        }
})})