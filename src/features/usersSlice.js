import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  allUsers: [
    {
      id: "33625d29-dd93-4db5-8254-9186c7656197",
      name: "M.Ateeq",
      status: "notin",
      msg: "notin",
      date: "4:34:07 PM",
    },
    {
      id: "33625d29-dd93-4db5-8254-9186c7656196",
      name: "Haseeb",
      status: "notin",
      msg: "notin",
      date: "4:34:07 PM",
    },
    {
      id: "33625d29-dd93-4db5-8254-9186c7656195",
      name: "Shahbaz",
      status: "notin",
      msg: "notin",
      date: "4:34:07 PM",
    },
  ],
};

const users = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserAct(state, action) {
      state.user.push(action.payload);
   
    },
    removeUserAct(state, action) {
      const nextUser = state.user.filter(
        (item) => item.id !== action.payload.id
      );
      state.user = nextUser;
    
    },
    changeStatus(state,action){
        const updateUser = state.allUsers.filter((item)=> item.id !== action.payload.id)
        state.allUsers = [
            ...updateUser,
               action.payload
        ]
    }
  },
});

export const { addUserAct, removeUserAct,changeStatus } = users.actions;

export default users.reducer;
