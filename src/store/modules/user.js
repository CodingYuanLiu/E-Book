const state = {
    isLogin:false,
    userinfo:null,
    authority:null
};

const getters = {};

const mutations = {
    setIsLogin(state,data){
        state.isLogin=data;
    },
    setUserInfo(state,data){
        state.userinfo=data;
    },
    setAuthority(state,data){
        state.authority=data;
    }
};

const actions = {
    login ({commit},{username,authority}){
        commit('setIsLogin',true);
        commit('setUserInfo',username);
        commit('setAuthority',authority);
    },
    logout({commit}){
        commit('setIsLogin',false);
    }
};

export default {
  state,
  getters,
  mutations,
  actions
}