
function New(constructor,...args){
    const newObj = {}
    Object.setPrototypeOf(newObj,constructor.prototype)
    constructor.apply(newObj,[...args])
    return newObj
}

module.exports = New