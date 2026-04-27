let counter = 0;

function increment() {
    counter++;
}

function getCounter() {
    return counter;
}

module.exports = { increment, getCounter };