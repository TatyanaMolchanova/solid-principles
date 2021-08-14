// Single Responsibility Principle

// This class is responsible for logic
class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified =  false
    }

    update(text) {
        this.text = text
        this.modified = true
    }

    // This method violate Single resp-ty principle
    // because it doesn't have attitude to news
    // it's a template.
    // Then the customer wants an mobile app
    // and you create toJSON() method
    // toHTML() {
    //     return `<div class="news">
    //         <h1>${this.title}</h1>
    //         <p>${this.text}</p>
    //     </div>`
    // }

    // toHTML() and toJSON methods doesn't have an attitude to news
    // they are responsible for the appearance
    // so it's a wrong, bad practice
    // toJSON() {
    //     return JSON.stringify({
    //         title: this.title,
    //         text: this.text,
    //         modified: this.modified
    //     }, null, 4)
    // }
}

const news = new News('Monika is a good dog', 'Gav-gav-gav')
console.log(news)
// console.log(news.toHTML())
// console.log(news.toJSON())

// To apply Single Responsibility Principle we have
// to create a new class for our templates:
// This class is responsible for the appearance, template
class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    html() {
        return `<div class="news">
            <h1>${this.news.title}</h1>
            <p>${this.news.text}</p>
        </div>`
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 4)
    }

    // If a customer will want an XML, we will can
    // easily to implement it
    xml() {
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
            </news>`
    }
}

const printer = new NewsPrinter(
    new News('Monika is a good dog', 'Gav-gav-gav')
)

console.log(printer.html());
console.log(printer.json());
console.log(printer.xml());

// Every class to be responsible just for one kind of functionality