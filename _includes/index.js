let property;
let propertyId;

let whenDocumentReady = (f) => {
    /in/.test(document.readyState) ? setTimeout('whenDocumentReady(' + f + ')', 9) : f()
}

let submitTranche = () => {
    /*
    	todo 

    	tranches check 2 many

    */
    console.log(property)
    const tLeft = property.tranches - property.tranchesSold
    const amount = document.getElementById('inputAmount').value;
    const email = document.getElementById('inputEmail').value;
    if ((amount == "") || (amount > tLeft) || (amount == 0)) {
        alert('please enter a valid tranche amount');
        return;
    }
    const res = validateEmail(email)
    if (res == false) {
        alert('please enter a valid email');
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', apiUrl + `properties/crowdfund/?tranches=${amount}&email=${email}&id=${propertyId}`, true);
    xhr.onload = function() {
        //check it was ok
        if (this.status === 200) {
            alert('thanks we will contact you soon.')
        }
    };
    xhr.send();


}

//this fucntion validates an email address.
let validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

let formatCurencyUSD = (number, digits = 2) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: digits
    })
    let currency = formatter.format(number)
    return (currency)
}

//this function checks if an element exits
let checkElement = (element) => {
    let checkedElement = document.getElementById(element);
    //If it isn't "undefined" and it isn't "null", then it exists.
    if (typeof(checkedElement) != 'undefined' && checkedElement != null) {
        return (true)
    } else {
        return (false)
    }
}

let getUrlParamater = (param) => {
    let searchParams = new URLSearchParams(window.location.search)
    let res = searchParams.has(param) // true
    if (res != false)
        return (searchParams.get(param))
    else
        return ("");

}


whenDocumentReady(isReady = () => {


})