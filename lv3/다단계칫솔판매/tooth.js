function solution(enroll, referral, seller, amount) {
    var answer = []
    const tree = []
    let money = []

    tree["-"] = { parent: null, money: 0 }

    enroll.map((value, index) => {
        tree[value] = { parent: referral[index], money: 0 }
    })

    const sum_money = function (value, money) {
        if (tree[value].parent == null || money == 0) {
            return
        }
        let next_money = Math.floor(money * 0.1)
        tree[value].money += money - next_money
        sum_money(tree[value].parent, next_money)
    }

    seller.map((value, index) => {
        sum_money(value, amount[index] * 100)
    })

    return enroll.map(value => {
        return tree[value].money
    })
}