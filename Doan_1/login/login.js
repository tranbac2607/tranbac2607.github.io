
// Constructor Function
function Validator(options) {
    const formElement = document.querySelector(options.form)

    if (formElement) {
        options.props.forEach(function (props) {
            let inputElement = formElement
        })
    }
}



// Constructor
Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test() {

        }
    }
}

Validator.isRequired = function(seletor) {
    return {
        selector: selector,
        test() {
            
        }
    }
}