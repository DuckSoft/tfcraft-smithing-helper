vue = new Vue({
    el: '#app',
    data: {
        mustreset: false,
        value: 0,
        route: "",
        operations: [
            ['轻击',-3], ['击打',-6], ['重击',-9], ['牵拉',-15],
            ['冲压',2], ['弯曲',7], ['镦锻',13], ['收缩',16]
        ]
    }, methods: {
        perform: function (op){
            this.value += op[1];
            this.route += op[0] + "→";
        },
        reset: function () {
            this.value = 0;
            this.route = "";
            this.mustreset = false;
        },
        autofill: function (target) {
            this.mustreset = true;
            ops = this.operations.slice();
            while (true){
                for (op in ops) {
                    if (ops[op][1] === target) {
                        this.value = 0;
                        this.route += '[' + ops[op][0] + ']';
                        this.mustreset = true;
                        return;
                    }
                }
                opss = [];
                for (op1 in ops) {
                    for (op2 in ops) {
                        opss.push([ops[op1][0]+'→'+ops[op2][0], ops[op1][1]+ops[op2][1]]);
                    }
                }
                ops = opss;
                console.log(ops);
            }
        }
    }
});