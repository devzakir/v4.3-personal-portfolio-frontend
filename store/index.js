export const state = () => ({
    setting: {},
})

export const getters = {
    getSetting(state){
        return state.setting;
    },
    updateImageURL(){
        return function(image){
            return 'http://localhost:8000'+image;
        }
    }
}

export const mutations = {
    setSetting (state, payload) {
        state.setting = payload;
    },

}