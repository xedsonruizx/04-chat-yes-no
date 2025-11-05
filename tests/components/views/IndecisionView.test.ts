import IndecisionView from "@/views/IndecisionView.vue";

const mockChatMessages = {
    template: '<div class="mock-chat-messages"></div>'
};


describe('<IndecisionView>', () => {
    test('renders chat messages and messagebox Correctly', () => {
        const wrapper = mount(IndecisionView, {});

        // expect(wrapper.html()).toMatchSnapshot();

        expect(wrapper.findComponent({ name: 'ChatMessages' }).exists()).toBeTruthy();
        expect(wrapper.findComponent({ name: 'MessageBox' }).exists()).toBeTruthy();
    });


    test('calls getAnswer method when "?" is entered', async ()  => {
          const wrapper = mount(IndecisionView, {
            global: {
                stubs: {
                    ChatMessages: mockChatMessages,
                }   
            }
        });

        const messageboxComponent = wrapper.findComponent({ name: 'MessageBox' });
        messageboxComponent.vm.$emit('sendMessage', '?');
        await new Promise((resolve) => setTimeout(resolve, 150));
        
        expect(wrapper.html()).toMatchSnapshot();
    });
});