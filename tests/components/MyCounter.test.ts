import MyCounter from "@/components/my-counter-script/MyCounter.vue";
import { mount } from "@vue/test-utils";

describe("<MyCounter />", () => {
    test("should match snapshot", () => {
        // Test implementation
        const wrapper = mount(MyCounter,{
            props:{ value: 5 }
        }); 
    });
});