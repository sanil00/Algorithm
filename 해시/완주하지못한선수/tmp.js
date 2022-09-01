var solution = (participant, completion) => {
    var obj = { multiplier: 42 }
    participant.find((a) => {
        console.log(this)
        return !completion[a]--
    }, obj)
}
let a = ["mislav", "stanko", "mislav", "ana"]
let b = ["stanko", "ana", "mislav"]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a, b)
