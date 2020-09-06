export const state = () => ({
    items: [],
})

export const getters = {
    getCourse: (state) => (slug) => {
        if(state.items.length){
            return state.items.find(course => course.slug === slug);
        }else {
            return {};
        }
    }
}

export const mutations = {
    ADD_COURSE(state, payload){
        state.items.push(payload);
    }
}

export const actions = {
    ADD_COURSE({ commit, state }, course){
        let data = state.items.find(course => course.slug === slug);
        if(!data){
            commit('ADD_COURSE', course);
        }
    },
}
