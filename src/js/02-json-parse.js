const validJSON = '{ "name": "Mango", "age": 3 }';
const invalidJSON = '{ вот что вернул бекенд }';



try {
    console.log(1);

    console.log(JSON.parse(invalidJSON));

    console.log(2);
} catch(error){
    console.log(error);
    if(error.name === 'SyntaxError'){
        console.log('Oшибка парса json надо что-то сделать');
    }
}

console.log('После try...catch');
