import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";
import "./ChatBot.css";

export default function ChatBot() {
  useEffect(() => {
    const chat = createChat({
      webhookUrl: "https://abdosofy.n8n.nexhost.tech/webhook/07fada34-5586-45e5-8be3-180dae0a2e66/chat",
      initialMessages: [
        "Hi! I'm KAVRO's assistant. How can I help you?",
      ],
      i18n: {
        en: {
          title: "KAVRO Support",
          subtitle: "",
          footer: "",
          getStarted: "New chat",
          inputPlaceholder: "Type your question...",
        },
      },
    });
    return () => chat.unmount();
  }, []);

  return null;
}