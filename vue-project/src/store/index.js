import { createStore } from 'vuex'

// vuex核心作用管理组件之间的状态
export default createStore({
    // 所有的状态都放在这里（数据）
    state: {
        counter: 0
    },
    getters: {
        getCounter(state) {
            return state.counter > 0 ? state.counter : '数据异常'
        }
    },
    mutations:{
        addCounter(state){
            state.counter++
        }
    }
})