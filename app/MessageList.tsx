"use client";
import { useEffect } from "react";
import useSWR from "swr";
import fetchMessages from "../lib/fetchMessages";
import { clientPusher } from "../pusher";
import { Message } from "../typings";
import MessageComponent from "./MessageComponent";

function MessageList() {
    const { data: messages, error, mutate } = useSWR<Message[]>("messages", fetchMessages);

    useEffect(() => {
        if (!messages) mutate(fetchMessages);
        const channel = clientPusher.subscribe("messages");
        channel.bind("new_message", async (data: Message) => {
            if (messages?.find((message) => message.id === data.id)) return;
            await mutate(fetchMessages, {
                optimisticData: [...messages!, data],
                rollbackOnError: true,
            });
        });

        // scroll to latest message
        if (messages) {
            const latestMessage = document.getElementById(messages[messages.length - 1].id);
            if (latestMessage) {
                latestMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [messages, mutate, clientPusher]);

    return (
        <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl xl:mx-auto">
            {messages?.map((message) => (
                <MessageComponent key={message.id} message={message} />
            ))}
        </div>
    );
}

export default MessageList;
