import "./_styles.css"

class Heading {

    create(text) {
        const title = document.createElement('h2')

        title.innerText = text

        title.classList.add('title')

        document.querySelector('body').appendChild(title)
    }
}

export default Heading