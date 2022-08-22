function solution(name) {
    let answer = 0
    let nameArray = [...name]
    let count = 0
    // let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    nameArray.map((value, index) => {
        let start = alphabet.indexOf(value)
        let last = 26 - alphabet.indexOf(value)
        let firstRightCount = 0
        let firstLeftCount = 0
        count += Math.min(last, start)
        if (index === 0) {
            for (let i = index + 1; i < nameArray.length; i++) {
                if (nameArray[i] !== "A") {
                    let firstRightleft = nameArray.length - (i - index)
                    let firstRightright = i
                    // console.log(firstRightleft, firstRightright)
                    // console.log(Math.min(firstRightleft, firstRightright))
                    firstRightCount += Math.min(firstRightleft, firstRightright)
                    break
                }
            }
            for (let i = nameArray.length - 1; i !== 0; i--) {
                if (nameArray[i] !== "A") {
                    let firstLeftleft = nameArray.length - (i - index)
                    let firstLeftright = i
                    // console.log(firstLeftleft, firstLeftright)
                    // console.log(Math.min(firstLeftleft, firstLeftright))
                    firstLeftCount += Math.min(firstLeftleft, firstLeftright)
                    break
                }
            }
            // console.log(firstRightCount, firstLeftCount)
            // console.log(Math.min(firstRightCount, firstLeftCount))
            count += Math.min(firstRightCount, firstLeftCount)
        } else {
            if (nameArray[index] !== "A" && index !== nameArray.length - 1) {
                for (let i = index + 1; i < nameArray.length; i++) {
                    if (nameArray[i] !== "A") {
                        let firstRightleft = nameArray.length - (i - index)
                        let firstRightright = i
                        // console.log(firstRightleft, firstRightright)
                        // console.log(Math.min(firstRightleft, firstRightright))
                        firstRightCount += Math.min(firstRightleft, firstRightright)
                        break
                    }
                }
                for (let i = nameArray.length - 1; i !== 0; i--) {
                    if (nameArray[i] !== "A") {
                        let firstLeftleft = nameArray.length - (i - index)
                        let firstLeftright = i
                        // console.log(firstLeftleft, firstLeftright)
                        // console.log(Math.min(firstLeftleft, firstLeftright))
                        firstLeftCount += Math.min(firstLeftleft, firstLeftright)
                        break
                    }
                }
                // console.log(firstRightCount, firstLeftCount)
                console.log(Math.min(firstRightCount, firstLeftCount))
                count += Math.min(firstRightCount, firstLeftCount)
            }
        }
    })

    return count
}

let a = "AKAAWAKX"
let b = [2, 4]
let c = [3]
document.querySelector("#answer").innerHTML = solution(a)

// AKAAWAKX 33

// LOAAAHAJAAFAEBAWO 79

// GTAASKKAE 52

// RCETAAAAVUEAETZAAAK 75
