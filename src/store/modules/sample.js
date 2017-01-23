export default {
    state: {
        count: 0
    },
    mutations: {
        increment(state, i) {
            if (i != undefined)
                state.count += i;
            else
                state.count++;
        }
    },
    actions: {
        increment(ctx, i) {
            ctx.commit('increment', i);
        }
    },
    getters: {

    }
}