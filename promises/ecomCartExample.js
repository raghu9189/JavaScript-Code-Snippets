
const cart = ["shoes", "pants", "kurtas"];

function validateCart(cart) {
    return true;
}
// Producer
// create order
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        // createOrder
        // validateOrder
        // orderId

        // rejecting the promise
        if (!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }

        // resolving the promise
        const orderId = "80911";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000)
        }
    });
    return pr;
}

// Producer
// proceed to payment
function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        if(true){
            resolve("payment successful");
        }
        else{
            reject(new Error("Payment failed"));
        }
    });
}

// consumer
createOrder(cart)
    .then(function(orderId){
        console.log("Order placed: " + orderId)
        return orderId;
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){
        console.log(err)
    })
    .finally(function(){
        console.log("Payment pipeline done")
    })