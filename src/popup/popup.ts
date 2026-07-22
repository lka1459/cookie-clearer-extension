document.addEventListener('DOMContentLoaded', () => {
    let slider = document.getElementById('switch_checkbox') as HTMLInputElement
    let message = document.querySelector('.test') as HTMLParagraphElement
    let cookies = document.cookie as string

    slider.addEventListener("change", () => {
        if (slider.checked) {
            message.textContent = "On"
        } else {
            message.textContent = "Off"
        }
})
})

console.log("workrrr")
