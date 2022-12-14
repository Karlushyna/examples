// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch

function getFruit(name) {
    const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
    };
    return new Promise(resolve =>
    setTimeout(() => resolve(fruits[name]), 500),
);
}

async function aMakeSmoothie() {
    try {
    console.time('aMakeSmoothie');
    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');
    const berry = getFruit('strawberry');
    const fruits = await Promise.all([apple, kiwi, berry]);
    console.log(fruits);
    
    return fruits;

    console.timeEnd('aMakeSmoothie');
} catch (error) {
    console.log('Mistake');
}
}
aMakeSmoothie();


// function makeSmoothie() {
//     getFruit('apple').then(apple => {
//         console.log(apple);
//         getFruit('kiwi').then(apple => {
//         console.log(apple)
//     });

//     });

// }

// makeSmoothie();

// getFruit('apple').then(apple => console.log(apple));

// const fn =  async function () {}

// const arr = async() => {}

// const x = {
//     async getname() {}
// }

// class x {
//     async getName () {}
// }