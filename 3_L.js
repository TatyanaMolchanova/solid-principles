// Liskov substitution Principle

// // 1. Incorrect:
// class Person {
//     access() {
//         console.log('You have access')
//     }
// }
//
// // Simple extends, inheritance from Person is incorrect
// // because everybody is Person (man)
// class Frontend extends Person {
//     canCreateFrontend() {}
// }
//
// class Backend extends Person {
//     canCreateBackend() {}
// }
//
// // This class violates Liskov substitution Principle
// // We have to add if's for code working properly
// class PersonFromDifferentCompany extends Person {
//     access() {
//         throw new Error('You dont have an access, go home!')
//     }
// }
//
// function openSecretDoor(person) {
//     person.access()
// }
//
// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany())

// 2. Correct Liskov Substitution Principle
class Person {
}

// We have to add one more level of abstraction - base classes
// Member and Guest
class Member extends Person {
    access() {
        console.log('You have access')
    }
}

class Guest extends Person {
    isGuest = true
}

// Now workers of the company are extended from Member
class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {}
}

// Now non-workers of the company are extended from Guest
class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error('You dont have an access, go home!')
    }
}

function openSecretDoor(member) {
    member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany()) // should be member here

// =========================================
// // Incorrect Liskov Substitution Principle - task 2
// class Component {
//     render() {
//         return `<div>Component</div>`
//     }
// }
//
// class HeaderComponent extends Component {
//     onInit() {}
// }
//
// class FooterComponent extends Component {
//     afterInit() {}
// }
//
// class HOC extends Component {
//     render() {
//         throw new Error('Render is impossible here')
//     }
//
//     wrapComponent(component) {
//         component.wrapped = true
//         return component
//     }
// }
//
// function renderComponent(component) {
//     console.log(component.render());
// }
//
// renderComponent(new HeaderComponent())
// renderComponent(new FooterComponent())
// renderComponent(new HOC())

// Correct Liskov Substitution Principle - task 2
// We have to divide the layers of abstraction
// Component has to be empty, this a base functional
class Component {
}

// add ComponentWithTemplate, HigherOrderComponent
class ComponentWithTemplate extends Component {
    render() {
        return `<div>Component</div>`
    }
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    render() {
        throw new Error('Render is impossible here')
    }

    wrapComponent(component) {
        component.wrapped = true
        return component
    }
}

function renderComponent(component) {
    console.log(component.render());
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
// renderComponent(new HOC()) // this is impossible










