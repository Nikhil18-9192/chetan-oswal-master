export const state = () => ({
    menu: false
  })
  
   
  
  export const mutations = {
    TOGGLE_MENU_STATE: state => {
      state.menu = !state.menu
    }
  }
  