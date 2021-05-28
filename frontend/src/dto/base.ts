export default class Base {
    toJson() {
        return JSON.parse(JSON.stringify(this))
    }
    getClass() {
        return this.constructor.name
    }
}