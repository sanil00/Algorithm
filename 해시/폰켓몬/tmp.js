function solution(nums) {
    let n = nums.length / 2
    let monster = new Set(nums)
    return n < monster.size ? n : monster.size
}

let a = [3, 1, 2, 3]
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
