import { create } from "zustand";
export const UseContentStore=create((set)=>({
    ContentType:"movie",
    SetContentType:(type)=>set({ContentType:type})
}))