import { createStore } from 'vuex';
//import Vuex from 'vuex';



export default createStore({
  state: {
    posts: [
      {
        postHeader: {
          profilePicture: {
            src: "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg",
            alt: "Profile Picture",
            width: 40
          },
          date: "Oct 07, 2023"
        },
        postImage: {
          src: "https://media.istockphoto.com/id/1026144042/photo/cute-yellow-kittens.jpg?s=612x612&w=0&k=20&c=DC2lz1uSj7TZeXJYFMVtnxRr1BqYxNU_ShrnKGOVgw0=",
          alt: "Post1",
          class: "center"
        },
        postContent: "Selle suve kassipojad õunapuu otsas :)",
        likeButton: {
          src: "https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png",
          alt: "Like button",
          width: 40
        },
        likeCount: 0
      },
      {
        postHeader: {
          profilePicture: {
            src: "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg",
            alt: "Profile Picture",
            width: 40
          },
          date: "Sept 26, 2023"
        },
        postContent: "Mul on viimane aasta ülikoolis. Siis olen paberitega loomaarst!!!",
        src: "https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png",
        likeButton: {
          src: "https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png",
          alt: "Like button",
          width: 40
        },
        likeCount: 0
      },
      {
        postHeader: {
          profilePicture: {
            src: "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg",
            alt: "Profile Picture",
            width: 40
          },
          date: "Jun 02, 2023"
        },
        postImage: {
          src: "https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.honolulumagazine.com/content/uploads/2022/05/a/i/20220509-staycation-ctf-gettyimages-674830880.jpg",
          alt: "Post1",
          class: "center"
        },
        postContent: "Perega Tenerifel",
        likeButton: {
          src: "https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png",
          alt: "Like button",
          width: 40
        },
        likeCount: 0
      },
      {
        postHeader: {
          profilePicture: {
            src: "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg",
            alt: "Profile Picture",
            width: 40
          },
          date: "Dec 18, 2022"
        },
        postContent: "Palju õnne sünnipäevaks, Mari. Soovivad Mati ja Laura!",
        width: 40,
        likeButton: {
          src: "https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png",
          alt: "Like button",
          width: 40
        },
        likeCount: 0
      },
      {
        postHeader: {
          profilePicture: {
            src: "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg",
            alt: "Profile Picture",
            width: 40
          },
          date: "Nov 12, 2022"
        },
        postImage: {
          src: "https://media.istockphoto.com/id/500430393/photo/golden-retriever-dog.jpg?s=612x612&w=0&k=20&c=9wyW0_aMktFZV6j0A0sMltvbODDRhKpQ9EV0kBbkP1E=",
          alt: "Post1",
          class: "center"
        },
        postContent: "Pean kurbusega teatama, et meie hulgast lahkus täna öösel Pontu.",
        likeButton: {
          src: "https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png",
          alt: "Like button",
          width: 40
        },
        likeCount: 0
      },
      {
        postHeader: {
          profilePicture: {
            src: "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg",
            alt: "Profile Picture",
            width: 40
          },
          date: "Nov 5, 2022"
        },
        postContent: "Ei jõua uut Pilvede All hooaega ära oodata! Ainult paar päeva veel.",
        likeButton: {
          src: "https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png",
          alt: "Like button",
          width: 40
        },
        likeCount: 0
      },
      {
        postHeader: {
          profilePicture: {
            src: "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg",
            alt: "Profile Picture",
            width: 40
          },
          date: "Sept 26, 2022"
        },
        postContent: "Kas keegi annab ära kasutatud tugitooli?",
        likeButton: {
          src: "https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png",
          alt: "Like button",
          width: 40
        },
        likeCount: 0
      },
      {
        postHeader: {
          profilePicture: {
            src: "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg",
            alt: "Profile Picture",
            width: 40
          },
          date: "Jul 02, 2022"
        },
        postImage: {
          src: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Random_Processes_in_the_Brain-_from_experimental_data_to_math_and_back-135.jpg",
          alt: "Post1",
          class: "center"
        },
        postContent: "Aitäh, õpetaja Mart, et aitasid mind minu magistri lõputööga",
        likeButton: {
          src: "https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png",
          alt: "Like button",
          width: 40
        },
        likeCount: 0
      },
      {
        postHeader: {
          profilePicture: {
            src: "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg",
            alt: "Profile Picture",
            width: 40
          },
          date: "Jan 01, 2022"
        },
        postImage: {
          src: "https://live.s3.teliahybridcloud.com/s3fs-public/image_bank_foto/2022-06/289206.jpg",
          alt: "Post1",
          class: "center"
        },
        postContent: "Head uut aastat kõigile!!",
        likeButton: {
          src: "https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png",
          alt: "Like button",
          width: 40
        },
        likeCount: 0
      },
      {
        postHeader: {
          profilePicture: {
            src: "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg",
            alt: "Profile Picture",
            width: 40
          },
          date: "Oct 25, 2021"
        },
        postContent: "Müün erinevate disainidega covidi maske. Huvi korral võta ühendust.",
        likeButton: {
          src: "https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png",
          alt: "Like button",
          width: 40
        },
        likeCount: 0
      }
    ]
  },
  mutations: {
    UPDATE_POSTS(state, newPosts) {
      state.posts = newPosts;
    },
    RESET_LIKES(state) {
      state.posts = state.posts.map(post => ({
        ...post,
        likeCount: 0
      }));
    },
  },
  actions: {
    fetchPosts({ commit }) {
      // Placeholder for fetching posts from an API
      // For now, the posts are statically defined in the state
      const postData = this.state.posts;
      commit('UPDATE_POSTS', postData);
    },
    resetAllLikes({ commit }) {
      commit('RESET_LIKES');
    },
  },

  getters: {
    allPosts: state => state.posts
  }

});
