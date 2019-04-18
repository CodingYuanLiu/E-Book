const state = {
    isLogin:false,
    userinfo:null,
    authority:null,
    userid:null
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
    },
    setUserid(state,data){
        state.userid=data;
    }
};

const actions = {
    login ({commit},{username,authority,userid}){
        commit('setIsLogin',true);
        commit('setUserInfo',username);
        commit('setAuthority',authority);
        commit('setUserid',userid);
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