/* callback */

/*function getData(dataId, getNextData) {
    setTimeout(()=> {
        console.log(`data = ${dataId}`)
        if(getNextData) {
            getNextData()
        }
    }, 2000)
}

getData(1, ()=> {
    getData(2, ()=> {
        getData(3, ()=> {
            getData(4, () => {
                getData(5)
            })
        })
    })
})*/

/*function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log(`data = ${dataId}`)
            if(getNextData) {
                getNextData()
            }
            resolve("success")
        }, 5000)
    })
}

let finalVal = getData(1)*/

/*getData(1, ()=> {
    getData(2, ()=> {
        getData(3, ()=> {
            getData(4, () => {
                getData(5)
            })
        })
    })
})*/

/* promise */

/*let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success")
})

console.log(promise)*/

/*const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success")
    })
}

let promise = getPromise();

promise.then((res) => {
    console.log("promise fulfilled", res)
})

promise.catch((err) => {
    console.log("promise rejected", err)
})*/

/*function asyncFnc1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data1")
        resolve("success")
      }, 4000)
    })
}

function asyncFnc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("data2")
          resolve("success")
        }, 4000)
      })
}

console.log("fetching data1.....")

let promise1 = asyncFnc1()
promise1.then((res) => {
    console.log(res)
    console.log("fetching data2.....")
    let promise2 = asyncFnc2()
    promise2.then((res) => {
        console.log(res)
    })
})*/

/*function getData(dataId) {
    return new Promise((resolve, reject) => {
        console.log("fetching data", dataId, "....")
      setTimeout(() => {
        console.log(`data = ${dataId}`)
      resolve("success")
      }, 2000)
    })
}

getData(1).then(() => {
   return getData(2)
}).then(() => {
    return getData(3)
});

getData(1)
    .then(() => {
        return getData(2)
    })
    .then(() => {
        return getData(3)
    })
    .then(() => {
        return getData(4)
    })
    .then(() => {
        return getData(5)
    })
    .then((res) => {
        console.log(res)
    });*/

/*async await */

/*async function hello() {
    console.log("hello")
}

hello()*/

/*function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data")
            resolve(2000)
        }, 5000)
    })
}

async function getWeatherData() {
    await api()
}

getWeatherData()*/

function getData(dataId) {
    return new Promise((resolve, reject) => {
        console.log(`fetching data ${dataId}.....`)
        setTimeout(() => {
        console.log(`data = ${dataId}`)
        resolve("success")
       }, 2000)
    })
}

/*async function getFinalData() {
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
    await getData(5)
    console.log("fetched all data!")
}
    
getFinalData()*/

/*IIFE function  */

/*(function () {
    console.log("this is IIFE")
})();

(() => {
    console.log("this is also an IIFE but an arrow function")
})();

(async function() {
    console.log("this is also an IIFE but an async function")
})()*/

(async function () {
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
    await getData(5)
    console.log("fetched all data!")
})()