import Vuex from 'vuex';
import Cookie from 'js-cookie';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null,
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
      setToken(state, token) {
        state.token = token
      },
      clearToken() {
        state.token = null;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios.$get('/posts.json')
          .then(data => {
            const postsArray = [];
            for(const key in data) {
              postsArray.push({ ...data[key], id: key });
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
        return this.$axios.$post(process.env.baseUrl + '/posts.json?auth=' + vuexContext.state.token, createdPost)
        .then(data => {
          vuexContext.commit('addPost', {...createdPost, id: data.name});
        })
        .catch(e => console.log(e));
      },
      editPost(vuexContext, editedPost) {
        return this.$axios.$put(process.env.baseUrl + '/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
        .then(res => {
          vuexContext.commit('editPost', editedPost);
        })
        .catch(e => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPost', posts)
      },
      authenticateUser(vuexContext, authData) {
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIKey;

        if(!authData.isLogin) {
        authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbAPIKey;
        }
      
        return this.$axios.$post(authUrl, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        }
        ).then(result => {
          vuexContext.commit('setToken', result.idToken);
          localStorage.setItem('token', result.idToken);
          localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(result.expiresIn));
          Cookie.set('jwt', result.idToken);
          Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(result.expiresIn))
        }).catch(e => console.log(e));
      },
      initAuth(vuexContext, req) {
        let token;
        let expirationDate;
        if(req) {
          if(!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='));
          if(!jwtCookie) {
            return;
          }
          token = jwtCookie.split('=')[1];
          expirationDate = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('expirationDate='))
            .split('=')[1];
        } else {
          token = localStorage.getItem('token');
          expirationDate = localStorage.getItem('tokenExpiration');
          if (new Date().getTime() > +expirationDate || !token) {
            console.log('No token or invalid token')
            vuexContext.commit('clearToken');
            return;
          }
        }
        vuexContext.commit('setToken', token);
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore