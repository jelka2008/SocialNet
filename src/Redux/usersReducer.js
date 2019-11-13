const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState =  {
  users: [
    // {id:1, photoUrl: 'https://www.chem.ucsb.edu/sites/default/files/styles/people_node/public/people/photo/Dmitriy_Propkopovich_004.jpg?itok=Zldkx-iH', 
    //   followed: false, fullName: 'Dmitriy', status: 'I am a boss', location: {city:'Minsk', country: 'Belarus'} },
    // {id:2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2M6nAZx0bnCQgKnmaAXlYXSZblzSFqqhFXnXXqb1SXRcZ-TJn&s', 
    //   followed: false, fullName: 'Alesja', status: 'I make photos', location: {city:'Moskow', country: 'Russia'} },
    // {id:3, photoUrl: 'https://vokrug.tv/pic/person/5/b/f/0/5bf018d36c4ce8b75f8a9755d223e914.jpg', 
    //   followed: true, fullName: 'Marina', status: 'I am a boss', location: {city:'Kiev', country: 'Ukraine'} },
    // {id:4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTf948uYcHaMhlu9IS6tJFVsfWPUf6TiKzA-PKlxkRmDwwDp_&s', 
    //   followed: false, fullName: 'Andrey', status: 'I am a boss', location: {city:'Minsk', country: 'Belarus'} },
    // {id:5, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCktZr_LvogZjeptetrpAQZMHFaR9pUpxMDZuavWklLcFQI6GH&s', 
    //   followed: false, fullName: 'Anton', status: 'I am a boss too', location: {city:'Gomel', country: 'Belarus'} },
    ]
  }

    const usersReducer = (state = initialState, action) => {
      // debugger
      switch (action.type) {
        case FOLLOW: {
          return {
            ...state,
            users: state.users.map ( u => {
              if (u.id ===action.userId) {
                return {...u, followed: true}
              }
              return u;
            })
          }
        }
        case UNFOLLOW: {
          return {
            ...state,
            users: state.users.map ( u => {
              if (u.id ===action.userId) {
                return {...u, followed: false}
              }
              return u;
            })
          }
        }
        case SET_USERS: {
          return { ...state, users: [ ...state.users, ...action.users ] }
        }
        default:
          return state
     }
}

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer
