import { configureStore } from "@reduxjs/toolkit";
import { Store } from "./redux/Store";
import Login from "./Slice/Login";
const Store = configureStore({
    reducer:{
        userLogin:Login
    }
})
export default Store;