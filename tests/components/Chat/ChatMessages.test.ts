import ChatMessages from "@/components/Chat/ChatMessages.vue";
import { ChatMessage } from "@/interfaces/chat-message.interface";
import { vi } from "vitest";

const messages:ChatMessage[] = [
  {
    id: 1,
    text: "Hello, how are you?",
    itsMine: true,
  },
  {
    id: 2,
    text: "Hi there!",
    itsMine: false,
    image: "https://example.com/image.png",
  },
];

describe('<ChatMessages />', () => {

   const wrapper = mount(ChatMessages, {
      props: { messages },
    });



    test('renders messages correctly', () => {

        const chatBubbles = wrapper.findAllComponents({name: 'ChatBubble'});
        expect(chatBubbles).toHaveLength(messages.length);

    });

    test('scroll down to the bottom after messages update', async () => {

        const scrollMockSpy = vi.fn();

        const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
        chatRef.scrollTo = scrollMockSpy;

        await wrapper.setProps({
            messages: [...messages, {
                id: 3,
                text: "New message",
                itsMine: true,
            }],

        });
       



        await new Promise((r)=> setTimeout(r, 150) );

        expect(scrollMockSpy).toHaveBeenCalledTimes(1);
        expect(scrollMockSpy).toHaveBeenCalledWith({
            behavior: 'smooth',
            top: expect.any(Number) ,
        });

    });

});