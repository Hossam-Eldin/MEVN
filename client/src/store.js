import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      token:null,
      user:null,
      userId:null
  },

  mutations: {
      // user auth information
      authUser(state, userData) {
          state.token = userData.token
          state.userId = userData.userId
      },  
      // store user information 
      storeUser(state, user){
        state.user =  user
      },
      // clear data from state store 
      clearAuthData(state){
        state.token = null
        state.userId = null
      }
  },
  
  actions: {
      //logout from the app when the token expire
      setLogoutTimer({commit}, expirationTime) {
          setTimeout(() => {
              commit('clearAuthData')
          }, expirationTime * 1000)
      },
      //sign up  function and storing the data in localstorage
      signup({commit, dispatch},authData) {

          axios.post('http://localhost:3000/auth/signup',{
            email:authData.email,
            name:authData.name,
            password: authData.password,
          })
          .then(res => {
            console.log(res.data)
             commit('authUser',{
              //coming form the server token and id 
              token:res.data.token,
              userId: res.data.userId
            }) 
            // localStorage expirein and token and user id
            const now = new Date()
            const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userId', res.data.userId)
            localStorage.setItem('expirationDate', expirationDate)

            /*dispatch('storeUser', authData)*/
          //  dispatch('storeUser', authData);
            dispatch('setLogoutTimer', res.data.expiresIn)  
          })
          .catch(err => console.log(err))
          router.replace('/welcome')

      },
      //login and store data in localstorage
      login({commit,dispatch}, authData) {
        axios.post('http://localhost:3000/auth/login',{
          email: authData.email,
          password: authData.password
        })
        .then(res => {
          console.log(res)

          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expireIn * 1000)
          
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('userId', res.data.id)
          localStorage.setItem('expirationDate', expirationDate)
          commit('authUser',{
            token:res.data.token,
            userId: res.data.id
          })

          dispatch('setLogoutTimer', res.data.expireIn)
        })
        .catch(err => { console.log(err)})
        router.replace('/welcome')

      },
      tryAutoLogin({commit}) {
          const token = localStorage.getItem('token')
          if (!token) {
            return
          }
          const expirationDate =localStorage.getItem('expirationDate')
          const now = new Date()
          if (now >= expirationDate) {
            return
          }
          const userId= localStorage.getItem('userId')
         commit('authUser', {
           token: token,
           userId: userId
         }) 
      },
  logout({commit}) {
    commit('clearAuthData')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    router.replace('/login')
  },
 /*      storeUser({commit, state}, userData){
        if (!state.token) {
          return
        }
        axios.post('',userData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
      }, */
      // function user data 



     fetchUser({commit, state}){
        if (!state.token) {
          return
        }
        axios.get('http://localhost:3000/auth/user-info').then(res=>{
          console.log(res)
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key];
            user.id = key
            users.push(user)
          }
          console.log(users)
          commit('storeUser',users[0])
        }).catch(err => console.log(err))
      } 
  },
  getters:{
    user(state){
      return state.user
    },
    isAuthenticated(state) {
      //return state.token  !==null

      return localStorage.getItem('token') !==null;
    }
  }
})
