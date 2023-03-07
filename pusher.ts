import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: process.env.SERVER_PUSHER_ID!,
    key: process.env.SERVER_PUSHER_KEY!,
    secret: process.env.SERVER_PUSHER_SECRET!,
    cluster: "us3",
    useTLS: true,
});

export const clientPusher = new ClientPusher("3718ed9f4b737a0a47db", {
    cluster: "us3",
    forceTLS: true,
});
