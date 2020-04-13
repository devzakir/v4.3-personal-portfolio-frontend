export const state = () => ({
    setting: {},
})

export const getters = {
    getSetting(state){
        return state.setting;
    },
    updateImageURL(){
        return function(image){
            // return 'https://api.zakirhossen.com'+image;
            return process.env.APP_URL  + image;
        }
    }
}

export const mutations = {
    setSetting (state, payload) {
        state.setting = payload;
    },

}