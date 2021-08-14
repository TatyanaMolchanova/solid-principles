// Dependency inversion Principle
// Upper level of modules don't have to get dependencies from
// lower level modules


// // 1. Incorrect realization with dependencies
// class Fetch {
//     request(url) {
//         // return fetch(url).then(r => r.json())
//         return Promise.resolve('data from fetch')
//     }
// }
//
// // Then a customer says that he doesn't want to store the data at database
// // and want them get in LocalStorage:
// class LocalStorage {
//     get() {
//         const dataFromLocalStorage = 'data from local storage'
//         return dataFromLocalStorage
//         // return localStorage.getItem('key')
//     }
// }
//
// // After adding LocalStorage class we have to rewrite Database class total
// // This class depends from concrete realizations
// class Database {
//     constructor() {
//         // this.fetch = new Fetch()
//         this.localStorage = new LocalStorage()
//     }
//
//     getData() {
//         // return this.fetch.request('instagram.com')
//         return this.localStorage.get('ls key')
//     }
// }
//
// const db = new Database()
//
// console.log(db.getData())

// 1. Correct realization without dependencies
// This is scalable architecture as in Angular
class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch')
    }
}

// Then a customer says that he doesn't want to store the data at database
// and want them get in LocalStorage:
class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
    }
}


// We have to create FetchClient, LocalStorageClient
// All dependencies we send to another level of abstractioon
class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('vk.com')
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }

    clientGet(key) {
        return this.localStorage.get(key)
    }
}

// Now Database class is independent
class Database {
    constructor(client) {
        this.client = client
    }

    getData(key) {
        return this.client.clientGet(key)
    }
}


const db = new Database(new LocalStorageClient())

console.log(db.getData('rand'))