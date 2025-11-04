import ChatBubble from "@/components/Chat/ChatBubble.vue";

describe("<ChatBubble />", () => {
    test("renders own message correctly", () => {
        const msg =  "Hello, this is my message.";
        const wrapper = mount(ChatBubble, {
            props: {
                text: msg,
                itsMine: true,
            },
        });

        expect(wrapper.find(".bg-blue-200").exists()).toBe(true);
        expect(wrapper.find(".bg-blue-200").exists()).toBeTruthy();
        expect(wrapper.find(".bg-blue-200").text()).toContain(msg);


        expect(wrapper.find(".bg-gray-300").exists()).toBe(false);
        expect(wrapper.find(".bg-gray-300").exists()).toBeFalsy();


    });

    test("Renders received message", () => {
        const msg =  "Hello, this is an answerd.";
        const wrapper = mount(ChatBubble, {
            props: {
                text: msg,
                itsMine: false,
            },
        });


        expect(wrapper.find(".bg-gray-300").exists()).toBe(true);
        expect(wrapper.find(".bg-gray-300").exists()).toBeTruthy();
        expect(wrapper.find(".bg-gray-300").text()).toContain(msg);


        expect(wrapper.find("img").exists()).toBe(false);
        expect(wrapper.find("img").exists()).toBeFalsy();

        expect(wrapper.find(".bg-blue-200").exists()).toBe(false);
        expect(wrapper.find(".bg-blue-200").exists()).toBeFalsy();

    });


    test("Renders received message with image", () => {
        const msg =  "Hello, this is an answerd.";
        const image = "https://example.com/image.jpg";
        const wrapper = mount(ChatBubble, {
            props: {
                text: msg,
                itsMine: false,
                image: image,
            },
        });


        expect(wrapper.find(".bg-gray-300").exists()).toBe(true);
        expect(wrapper.find(".bg-gray-300").exists()).toBeTruthy();
        expect(wrapper.find(".bg-gray-300").text()).toContain(msg);


        expect(wrapper.find("img").exists()).toBe(true);
        expect(wrapper.find("img").exists()).toBeTruthy();
        expect(wrapper.find("img").attributes("src")).toBe(image);

        expect(wrapper.find(".bg-blue-200").exists()).toBe(false);
        expect(wrapper.find(".bg-blue-200").exists()).toBeFalsy();

    });
});
