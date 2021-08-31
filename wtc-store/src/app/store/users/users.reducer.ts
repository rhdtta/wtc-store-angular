import { createReducer, on } from "@ngrx/store";
import { User } from "./users.actions";
import { addUser } from "./users.actions";

export const hello: User = {
    email_id: "aa",
    name: "roh",
    password: "asd",
    phone_no: "111",
    cart: []
}



export const initialState: Array<User> = [hello];

export const userReducer = createReducer(
    initialState,
    on(addUser, (state, user) => {
        for(let i=0; i<state.length; i++){
            if(state[i].email_id === user.user.email_id){
                return state;
            }
        }
        return state.concat(user.user);
    })
    
)