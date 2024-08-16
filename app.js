// callback hell
/*// callbacks (synchronously)
function HOF(param, callback) {
    callback(param)
}

function callbackFnc(id) {
    console.log(`hello user ${id}`)
}

HOF(1, callbackFnc)
HOF(2, callbackFnc)
HOF(3, callbackFnc)
HOF(4, callbackFnc)
HOF(5, callbackFnc)*/

/*// callbacks (asynchronously using setTimeout)

function HOF(param, callback) {
    setTimeout(() => {
        callback(param)
    }, 3000);
}

function callbackFnc(id) {
    console.log(`hello user ${id}`)
}

HOF(1, callbackFnc)
HOF(2, callbackFnc)
HOF(3, callbackFnc)
HOF(4, callbackFnc)
HOF(5, callbackFnc) // here it works asynchronously but all fnc executes at same time. that's why we want that pass a hof fnc as an argument in hof fnc yni hm hof fnc k undr callback fnc k tor pr hof fnc ko hi pass krke hr callback pe utne time ka delay laaskte hn lkn issue ye h k agr hm hof fnc k undr agr hm hof fnc ko direct pass krdnge t wo infinite br call hga t islye hof ko hm direct hof k undr pass nh krnge blke hof k undr ek anonymous callback pass krke uske undr hof pass krnge.*/

/*// callback hell
console.log('before outside')
function HOF(param, callback) {
    console.log(`fetching user ${param}....`)
    setTimeout(() => {
        console.log(`hello user ${param}.`)
        if(callback) {
            callback()
        }
    }, 3000);
}

HOF(1, () => {
    HOF(2, () => {
        HOF(3, () => {
            HOF(4, () => {
                HOF(5)
            })
        })
    })
})
console.log('after outside')*/

// promises
/*// callback hell first compare from callback hell

function HOF(id, callback) {
    setTimeout(() => {
        console.log(`hello user ${id}`)
        if(callback) {
            callback()
        }
        else{
            console.log('fetched all data')
        }
    }, 1500);
}

HOF(1, () => {
    HOF(2, () => {
        HOF(3, () => {
            HOF(4, () => {
                HOF(5)
            })
        })
    })
})*/

/*// promises: let's create an empty promise

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert('inside asynchronously.')
        resolve('successfully executed')
    }, 1500);
})
console.dir(promise)*/

/*// let's settle a simple promise
let pro = true
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(pro) {
            resolve('success')
        }
        else{
            reject('rejected.')
        }
    }, 3000);
})

promise.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})*/

/*// let's create our own fake api type program.
let pro = true
function HOF() {
    return new Promise((resolve, reject) => {
        if(pro) {
            resolve('success')
        }
        else{
            reject('rejected.')
        }
    })
}
HOF().then((msg) => {
    console.log(msg)
})*/

/*// let's create our own fake api type program with setTimeout.
function HOF() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            alert('promise in function')
            resolve('success')
        }, 3000);
    })
}

HOF().then((msg) => {
    console.log(msg)
})*/

/*// now the final api fnc for multiple data fetching.

function getData(id, url) {
    return new Promise((resolve, reject) => {
        if(id, url) {
            console.log(`fetching user ${id}....`)
            setTimeout(() => {
                console.log(`hello user ${id} Your link is: ${url}.`)
                resolve('successfully')
            }, 1500);
        }
        else{
            reject('Please give all required data!')
        }
    })
}

getData(1, 'facebook.com')
    .then(() => {
        return getData(2, 'instagram.com')
    })
    .then(() => {
        return getData(3, 'twitter.com')
    })
    .then(() => {
        return getData(4, 'youtube.com')
    })
    .then(() => {
        return getData(5, 'linkedin.com')
    })
    .then((msg) => {
        console.log(`fetched all users ${msg}!`)
    })*/

// async await

/*// async fnc always returns a promise with fulfilled state.
function nameFnc() {
    console.log('simple function')
}
console.dir(nameFnc())

async function asyncFnc() {
    console.log('async fnc')
    return 'hello'
}
console.dir(asyncFnc())*/

/*// throws an error from async fnc
console.log('1 : message')
async function asyncFnc() {
    console.log('2 : message')
    throw new Error('something went wrong')
    console.log('3 : message')
}
console.dir(asyncFnc())
console.log('4 : message')
asyncFnc().catch((err) => {
    if(err){
        console.log('error occurs')
    }
})*/

/*// asynchronous programming from async keyword
console.log('1: message')
async function asyncFnc1() {
    console.log('2: message')
    await console.log('3: message')
    console.log('4: message')
}

asyncFnc1()
console.log('5: message')
// yhn mne kaha h 3 pe jaake aage k lye wt kro yni usne 3 tk print kia phr fnc se bahar ki execution ki bahar ka complete hne k baad dbara fnc k undr await k baad ka krwya*/

/*// settimeout in async fnc 
console.log('1: message')
async function asyncFnc() {
    console.log('2: message')
    await setTimeout(() => {
        console.log('3: message')
    }, 3000);
    await console.log('4: message')
    console.log('5: message')
}
asyncFnc()
console.log('6: message')

// yhn confuse nh hna mne 2 await use kye hn jb wo phla await dkhega t fnc se bahar ki execution krwa ke dbara fnc m aaya t usne dkha k phle wle k sth timer h t oose pending pe rkha r dsra await qk complete hochuka th t usne phle 4 data ko print krwaya phr 5 ko phr 3 ka timer complete hwa t uska krwaya*/

/*// multiple awaits with differ expressions

console.log('1: before')
async function asyncFnc1() {
    console.log('2: before')
    await setTimeout(() => {
        console.log('3: before')
    }, 3000);
    console.log('4: before')
    await console.log('5: before')
    console.log('6: before')
}
// asyncFnc()
console.log('7: before')
asyncFnc1().then(() => {
    console.log('successfully accepted')
})*/

/*// difference between async fnc with promise and without promise
// without promise
async function hi2(data) {
    console.log(`fetching data ${data}....`)
    setTimeout(() => {
        console.log(`data = ${data}`)
    }, 1500);
}

hi2(1).then(() => {
    return hi2(2)
}).then(() => {
    return hi2(3)
}).then(() => {
    return hi2(4)
}).then(() => {
    return hi2(5)
}).then(() => {
    console.log('fetched all data')
})
// with promise
async function hi(id) {
    console.log(`fetching data ${id}...`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data = ${id}`)
            resolve('success')
        }, 1500);
    })
}

hi(1).then(() => {
    return hi(2)
}).then(() => {
    return hi(3)
}).then(() => {
    return hi(4)
}).then(() => {
    return hi(5)
}).then(() => {
    console.log('fetched all data!')
})*/

/*// multiple awaits with differ expressions with promise

function timer(data) {
    setTimeout(() => {
        console.log(`${data}: after`)
    }, 3000);
}

console.log('1: after')
async function asyncFnc2() {
    return new Promise(async(resolve, reject) => {
        console.log('2: after')
        await timer(3)
        console.log('4: after')
        await timer(5)
        // await console.log('5: after')
        console.log('6: after')
        resolve('success')
    })
}
// asyncFnc()
asyncFnc2().then((msg) => {
    console.log(msg)
})
console.log('7: after')*/
// yhn 2non await ek sth timer complete krrh hn shyd islye k hmne jo async fnc k undr hi saara kaam krwya h jbke hmn kaam simple fnc k undr krna chahiye r cl oose async fnc m krna chahiye tb may be thk kaam kre

/*// step 02:

// this can work perfectly
async function hi(id) {
    console.log(`fetching data ${id}...`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data = ${id}`)
            resolve('success')
        }, 1500);
    })
}

hi(1).then(() => {
    return hi(2)
}).then(() => {
    return hi(3)
}).then(() => {
    return hi(4)
}).then(() => {
    return hi(5)
}).then(() => {
    console.log('fetched all data!')
})

// this can not work perfectly  
async function a() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('hi')
        }, 2000);
        res('success')
    })
}
a()
.then(() => {
    console.log('hm')
    return a()
}) */

/*// step 03:

function data(id) {
    console.log(`fetching data ${id}...`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data = ${id}`)
            resolve('success')
        }, 1500);
    }) // yhn hmne promise islye return kia h qk jb hm api fetch krte hn t fetch method by default promise hi return krta h r setTimeout islye use kia h qk api ko fetch hne m auto time lgta h.
}

async function getData() {
    await data(1)
    await data(2)
    await data(3)
    await data(4)
    await data(5)
    console.log('fetched all data!')
}
getData()*/

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

/*function getData(dataId) {
    return new Promise((resolve, reject) => {
        console.log(`fetching data ${dataId}.....`)
        setTimeout(() => {
        console.log(`data = ${dataId}`)
        resolve("success")
       }, 2000)
    })
}

async function getFinalData() {
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
    await getData(5)
    console.log("fetched all data!")
}
    
getFinalData()*/

/*// IIFE function

(function () {
    console.log("this is IIFE")
})();

(() => {
    console.log("this is also an IIFE but an arrow function")
})();

(async function() {
    console.log("this is also an IIFE but an async function")
})()

(async function () {
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
    await getData(5)
    console.log("fetched all data!")
})()*/