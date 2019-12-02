import Cookies from 'js-cookie'
import '@/styles.scss'

const c = element => document.createElement(element)
const t = text => document.createTextNode(text)

const headerText = `Updates to Terms & Privacy`
const bodyContent = `We've updated our <a href="https://get.tithe.ly/terms-of-service" target="_blank">terms of service</a> and <a href="https://get.tithe.ly/privacy-policy" target="_blank">privacy policy</a>. Your continued use of the services will be subject to these updates.`
const acceptText = `Accept`
const popupDate = `2019-10-02`
const cookieKey = `tithely_popup_${popupDate.replace(/-/gi, `_`)}`

window.tithelyConfirm = {
    popup: c(`div`),
    load({ accountCreationDate }) {
        const confirm = new Date(popupDate)
        const created = new Date(accountCreationDate)

        if (
            confirm >= created &&
            !Cookies.get(cookieKey)
        ) {
            this.launch()
        }
    },
    launch() {
        const header = c(`div`)
        const body = c(`div`)
        const footer = c(`div`)
        const button = c(`button`)

        this.popup.setAttribute(`id`, `tithely-popup`)
        this.popup.classList.add(`transition`)
        header.classList.add(`header`)
        body.classList.add(`body`)
        footer.classList.add(`footer`)

        body.innerHTML = bodyContent
        header.appendChild(t(headerText))
        button.appendChild(t(acceptText))
        button.onclick = () => this.accept()
        footer.appendChild(button)
        this.popup.appendChild(header)
        this.popup.appendChild(body)
        this.popup.appendChild(footer)

        document.body.appendChild(this.popup)

        setTimeout(() => {
            this.popup.classList.remove(`transition`)
        }, 250)
    },
    close() {
        this.popup.classList.add(`transition`)

        setTimeout(() => {
            this.popup.remove()
        }, 250)
    },
    accept() {
        Cookies.set(cookieKey, true, { expires: 365 })

        this.close()
    }
}
