//This project will generate random messages.
//The output message should be made up of 3 pieces of data.
const messageGenerator = () => {
    let firstPiece = ['You are','Today is ','Take all '];
    let secondPiece = ['the chance to','blessed with'];
    let thirdPiece = ['of a good day','your destiny','your life'];

    let message = [firstPiece[Math.floor((Math.random()* firstPiece.length))],
        secondPiece[Math.floor((Math.random()* secondPiece.length))],
        thirdPiece[Math.floor((Math.random()* thirdPiece.length))]];

    return message.join(' ');
}
//There will be random topics/subjects stored in arrays.
//There will be random messages based on the topics, stored in arrays as well.
console.log(messageGenerator());