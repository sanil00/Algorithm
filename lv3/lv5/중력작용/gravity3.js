function solution(values, edges, queries) {
    var answer = []
    let tree = []
    let sum = []
    tree[1] = { parent: null, value: values[0] }
    edges.sort((a, b) => {
        if (a[1] > b[1]) {
            return 1
        }
        if (a[1] < b[1]) {
            return -1
        }
        // a must be equal to b
        return 0
    })
    edges.map((value, index) => {
        tree[value[1]] = { parent: value[0], value: values[index + 1] }

        if (sum[value[0]] == undefined) {
            sum[value[0]] = 0
            sum[value[0]] += values[index + 1]
        } else {
            sum[value[0]] += values[index + 1]
        }
    })

    function make_sum() {
        sum.length = 0
        tree.map(value => {
            if (sum[value.parent] == undefined) {
                sum[value.parent] = 0
                sum[value.parent] += value.value
            } else {
                sum[value.parent] += value.value
            }
            1
        })
    }

    console.log(tree instanceof Array)
    let sum_x = []
    tree.map((value, index) => {
        if (sum_x[value.parent] instanceof Array) {
            sum_x[value.parent].push(index)
        } else {
            sum_x[value.parent] = []
            sum_x[value.parent].push(index)
        }
    })
    console.log(sum_x)
    const sum_node = function (start_node, child) {
        child[0] = 0
        if (sum[start_node] == undefined) return child
        child[start_node] = sum[start_node]
        console.log(sum_x[start_node])
        sum_x[start_node].map((value, index) => {
            sum_node(index, child)
        })
        return child
    }

    const change_node = function (start_node, last_value) {
        if (tree[start_node].parent != null) {
            tree[start_node].value = tree[tree[start_node].parent].value
            change_node(tree[start_node].parent, last_value)
        } else {
            tree[start_node].value = last_value
        }
    }
    answer = queries.map((value, index) => {
        let child = []

        if (value[1] == -1) {
            return (
                sum_node(value[0], child).reduce(function (accumulator, currentValue) {
                    return accumulator + currentValue
                }) + tree[value[0]].value
            )
        } else {
            change_node(value[0], value[1])
            make_sum()
        }
    })
    console.log(
        answer.filter(value => {
            if (value != undefined) {
                return value
            }
        })
    )
    return answer.filter(value => {
        if (value != undefined) {
            return value
        }
    })
}
let a = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]
let b = [
    [10, 11],
    [11, 13],
    [10, 12],
    [9, 10],
    [8, 9],
    [1, 2],
    [2, 4],
    [2, 3],
    [3, 5],
    [5, 6],
    [5, 8],
    [5, 7]
]

let c = [
    [13, 8192],
    [1, -1],
    [2, -1],
    [3, -1],
    [4, -1],
    [5, -1],
    [6, -1],
    [7, -1],
    [8, -1],
    [9, -1],
    [10, -1],
    [11, -1],
    [12, -1],
    [13, -1]
]
console.log(solution(a, b, c))
