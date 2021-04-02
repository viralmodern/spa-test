const user = {
    namespaced: true,
    state: () => ({
        user: {}
    }),
    getters: {
        userProfile: state => {
            return state.user
        }
    },
    mutations: {

    },
    actions: {

    }
}

export default user