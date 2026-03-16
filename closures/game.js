function CreateGame(){

    let cookieCount = 0;

    const incrementCookie = () => {
        cookieCount += 1;
        console.log(cookieCount);
    }

    const decrementCookie = () => {
        cookieCount -= 1;
        console.log(cookieCount);
    }

    return { incrementCookie, decrementCookie };
}

const game = CreateGame();
game.incrementCookie();
game.decrementCookie();