import posts from './InfoForPost'

const initialState = {
    postInfo: posts
}

const IMAGE = "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png";

function myReducer (state = initialState, action) {
    switch (action.type) {
        case 'add-post': {
            return {
                postInfo: [...state.postInfo, {
                    name: action.newPost.addName,
                    photo: IMAGE,
                    nickname: `@${action.newPost.addName.toLowerCase().replace(" ","_")}`,
                    content: action.newPost.addText,
                    image: action.newPost.addImage,
                    date: `${Date().toString().slice(4, 10)}`,
                    // coments: `${Math.floor(Math.random() * 500) + 1}`,
                    // share: `${Math.floor(Math.random() * 100) + 1}`,
                    // likes: `${Math.floor(Math.random() * 1000) + 1}`,
                }]
            };
        }
        default:
            return state;
    }
}

export default myReducer;