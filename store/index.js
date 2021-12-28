import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPost(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        if(!process.client) {
          console.log(context.req);
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPost', [
                {
                  id: '1',
                  title: 'First Post',
                  previewText: 'This is our first post!',
                  thumbnail: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/129668669/original/aac8282bcfe964e60b0753c8c8b04efe23a42207/design-you-static-website-in-vuejs-ans-nuxtjs.png',
                },
                {
                  id: '2',
                  title: 'Second Post',
                  previewText: 'This is our second post!',
                  thumbnail: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/129668669/original/aac8282bcfe964e60b0753c8c8b04efe23a42207/design-you-static-website-in-vuejs-ans-nuxtjs.png',
                },
                {
                  id: '3',
                  title: 'Third Post',
                  previewText: 'This is our third post!',
                  thumbnail: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/129668669/original/aac8282bcfe964e60b0753c8c8b04efe23a42207/design-you-static-website-in-vuejs-ans-nuxtjs.png',
                },
                {
                  id: '4',
                  title: 'Fourth Post',
                  previewText: 'This is our fourth post!',
                  thumbnail: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/129668669/original/aac8282bcfe964e60b0753c8c8b04efe23a42207/design-you-static-website-in-vuejs-ans-nuxtjs.png',
                },
                {
                  id: '5',
                  title: 'Fifth Post',
                  previewText: 'This is our fifth post!',
                  thumbnail: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/129668669/original/aac8282bcfe964e60b0753c8c8b04efe23a42207/design-you-static-website-in-vuejs-ans-nuxtjs.png',
                }
              ]);
            resolve();
          }, 1000);
          // reject(new Error());
        });
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