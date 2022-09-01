function solution(values, edges, queries) {
    var answer = []
    // values = [1, 10, 100, 1000, 10000]
    // edges = [
    //     [1, 2],
    //     [1, 3],
    //     [2, 4],
    //     [2, 5]
    // ]
    // queries = [
    //     [1, -1],
    //     [2, -1],
    //     [3, -1],
    //     [4, -1],
    //     [5, -1],
    //     [4, 1000],
    //     [1, -1],
    //     [2, -1],
    //     [3, -1],
    //     [4, -1],
    //     [5, -1],
    //     [2, 1],
    //     [1, -1],
    //     [2, -1],
    //     [3, -1],
    //     [4, -1],
    //     [5, -1]
    // ]

    edges = edges.sort(function (a, b) {
        if (a[0] < b[0]) {
            return -1
        }
        if (a[0] > b[0]) {
            return 1
        }
        // a must be equal to b
        return 0
    })

    console.log(edges)
    let el = document.createElement("div")
    el.setAttribute("id", "1")
    el.setAttribute("value", values[0])
    el.setAttribute("name", "root")
    document.querySelector("html").appendChild(el)

    for (var i = 0; i < edges.length; i++) {
        let elem = document.createElement("div")
        elem.setAttribute("id", i + 2)
        elem.setAttribute("value", values[edges[i][1] - 1])
        document.getElementById(edges[i][0]).appendChild(elem)
    }

    for (var i = 0; i < queries.length; i++) {
        if (queries[i][1] === -1) {
            var sum = 0
            var key = queries[i][0]
            var check = document.getElementById(key).querySelectorAll("div")
            for (var j = 0; j < check.length; j++) {
                sum = sum + Number(check[j].attributes["value"].value)
            }
            sum = sum + Number(document.getElementById(1).attributes["value"].value)
            answer[i] = sum
        } else {
            let k = queries[i][0]
            while (document.getElementById(k).parentNode.id != "") {
                document.getElementById(k).attributes["value"].value = document.getElementById(k).parentNode.attributes["value"].value

                k = document.getElementById(k).parentNode.id
            }

            document.getElementById(1).attributes["value"].value = queries[i][1]
        }
    }
    return answer
}
// let a = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]
// let b = [
//     [10, 11],
//     [13, 11],
//     [12, 10],
//     [10, 9],
//     [8, 9],
//     [1, 2],
//     [2, 4],
//     [2, 3],
//     [5, 3],
//     [6, 5],
//     [5, 8],
//     [7, 5]
// ]
console.log(solution())
