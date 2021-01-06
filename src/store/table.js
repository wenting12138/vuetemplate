export default {
    state: {
        isCollapse: false,
        menu: [],
        currentMenu: null,
        tabsList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "home",
              }
        ],
    },

    mutations: {
        selectMenu(state, value) {
            if(value.name !== "home") {
                state.currentMenu = value
                let result = state.tabsList.findIndex(item=> item.name === value.name)
                result === -1 ? state.tabsList.push(value) : ''
            }else{
                state.currentMenu = null
            }
        },
        closeTab(state, value){
            let result = state.tabsList.findIndex(item => item.name === value.name)
            state.tabsList.splice(result, 1)
        },

        isCollapseMenu(state){
            state.isCollapse = ! state.isCollapse
        }
    },

    actions: {
    }
}