import ChatMessages from "@/components/Chat/ChatMessages.vue";
import { ChatMessage } from "@/interfaces/chat-message.interface";

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
  test('renders messages correctly', () => {
    const wrapper = mount(ChatMessages, {
      props: { messages },
    });



    const chatBubbles = wrapper.findAllComponents({name: 'ChatBubble'});
    expect(chatBubbles).toHaveLength(messages.length);

  });



});