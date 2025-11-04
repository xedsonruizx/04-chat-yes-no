import MessageBox from "@/components/Chat/MessageBox.vue";

describe("<MessageBox />", () => {
    const wrapper = mount(MessageBox);

    test("renders input and button element correctly", () => {

        // expect(wrapper.html()).toMatchSnapshot();
        expect(wrapper.find("input[type='text']").exists()).toBe(true);
        expect(wrapper.find("button").exists()).toBe(true); 
        expect(wrapper.find("button svg").exists()).toBe(true); 

        //console.log(wrapper.find("button").attributes() );
    });

    test("emits 'new-message' event with input value when form is submitted", async () => {

        const message = "Hello, World!?";

        await wrapper.find("input[type='text']").setValue(message);
        await wrapper.find("button").trigger("click");

        // console.log(wrapper.emitted('SendMessage'));

        expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
         expect((wrapper.vm as any).message).toBe('');

    });
});