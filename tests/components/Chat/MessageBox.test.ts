import MessageBox from "@/components/Chat/MessageBox.vue";

describe("<MessageBox />", () => {
    test("renders input and button element correctly", () => {
        const wrapper = mount(MessageBox);


        // expect(wrapper.html()).toMatchSnapshot();
        expect(wrapper.find("input[type='text']").exists()).toBe(true);
        expect(wrapper.find("button").exists()).toBe(true); 
        expect(wrapper.find("button svg").exists()).toBe(true); 

    });
});