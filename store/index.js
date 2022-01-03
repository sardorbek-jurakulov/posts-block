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
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      },
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
      addPost(vuexContext, post) {
        const createdPost = {
          ...post, 
          updatedDate: new Date(),
        }
        return axios.post('https://nuxt-blog-bdbbe-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', createdPost)
        .then(result => {
          vuexContext.commit('addPost', {...createdPost, id: res.data.name});
        })
        .catch(e => console.log(e));
      },
      editPost(vuexContext, editedPost) {
        vuexContext.commit('editPost', editedPost);
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