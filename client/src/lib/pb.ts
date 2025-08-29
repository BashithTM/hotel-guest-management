// PocketBase client
import PocketBase from "pocketbase";

export const pb = new PocketBase(import.meta.env.VITE_PB_URL || "http://127.0.0.1:8090");
// If you use auth, restore from localStorage:
// pb.authStore.loadFromCookie(document.cookie)
