import { getServerSession } from "next-auth";
import { Message } from "../typings";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import Providers from "./providers";

async function HomePage() {
    // the following fetch fails on build time
    const session = await getServerSession();
    return (
        <Providers session={session}>
            <main>
                <MessageList />
                <ChatInput session={session} />
            </main>
        </Providers>
    );
}

export default HomePage;
