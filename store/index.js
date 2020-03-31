export const state = () => ({
    setting: {},
})

export const getters = {
    getSetting(state){
        return state.setting;
    }
}

export const mutations = {
    setSetting (state, payload) {
        state.setting = payload;
    }
}