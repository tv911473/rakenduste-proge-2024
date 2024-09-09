// ylesanne 11: filtreeri valja suuremad kui 4
const array = [1, 2, 3, 4, 5, 6]

const filteredArray = array.filter((element) => element > 4);

console.log({ filteredArray });
// sama asi
console.log({ filteredArray: filteredArray });

// ylesanne 12:
const names = ["Anni", "Mati", "Mari", "Juku"];

const objectifiedNames = names.map(name => {
    return {
        name: name,
        age: 24,
        email: `${name}@company.com`,
        address: `${name} Street 55`,
        username: name.split("").reverse().join("")
    };
})

console.log(objectifiedNames);

// ylesanne 13: spread syntax
let taavi = {
    name: "Taavi",
    school: "TLU"
}

taavi = {...taavi, height: 180};

console.log({taavi});
// 1 == "1" yhtlustab
// 1 === "1" vordub

// asunc/await Promise:
const myPromise = () => {
    return new Promise((resolve) => setTimeout(() => resolve("done"), 1000))
};

const runPromise = async () => {
    console.log(await myPromise()); // await ootab Promise 2ra
};

runPromise();

// ylesanne 15:
