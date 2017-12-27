Component({
    options: {
        multipleSlots: true
    },
    properties: {
        innerText: {
            type: String,
            value: 'default value'
        }
    },
    data: {
        someData: 1
    },
    methods: {
        customMethod: function() {
            console.log('customMethod')
        }
    }
})
// 外界传入 prop
// data 内部数据