import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPost(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxt-blog-bdbbe-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
          .then(res => {
            const postsArray = [];
            for(const key in res.data) {
              postsArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit('setPost', postsArray);
          })
          .catch(e => context.error(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPost', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore