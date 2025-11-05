import MyCounter from "@/components/my-counter-script/MyCounter.vue";
import { mount } from "@vue/test-utils";

describe("<MyCounter />", () => {
    test("should match snapshot", () => {
        // Test implementation
        const wrapper = mount(MyCounter,{
            props:{ value: 5 }
        }); 
        expect(wrapper.html()).toMatchSnapshot();
    });


    test('renders value properly', () => {
        // Test implementation
        const wrapper = mount(MyCounter,{
            props:{ value: 7 }
        }); 
        // console.log(wrapper.html());
        expect(wrapper.find('[data-testid="counter-value"]').text()).toBe('Counter 7');
    })



    test('renders the square value correctly', () => {
        // Test implementation
        const value = 20
        const wrapper = mount(MyCounter,{
            props:{ value: value }
        }); 
        // console.log(wrapper.html());
        // expect(wrapper.find('[data-testid="square-value"]').text()).toContain(`Square ${20*20}`);



        const [counterValue, squareValue] = wrapper.findAll('h3');
        expect(counterValue.text()).toContain(`Counter ${value}`)
        expect(squareValue.text()).toContain(`Square ${value*value}`)
    })



    test("Increment counter when pressing the button", async () =>{
        let value = 10
        const wrapper = mount(MyCounter,{
            props:{ value: value }
        });
        const [incrementButton, decrementButton] = wrapper.findAll('button');
        const [counterValue, squareValue] = wrapper.findAll('h3');


        await incrementButton.trigger('click');
        value += 1;
        expect(counterValue.text()).toContain(`Counter ${value}`)
        expect(squareValue.text()).toContain(`Square ${value*value}`)
    })


    
    test("Decrement counter when pressing the button on click twice", async () =>{
        let value = 10
        const wrapper = mount(MyCounter,{
            props:{ value: value }
        });
        const [incrementButton, decrementButton] = wrapper.findAll('button');
        const [counterValue, squareValue] = wrapper.findAll('h3');

        await decrementButton.trigger('click');
        await decrementButton.trigger('click');
        value -= 2;
        expect(counterValue.text()).toContain(`Counter ${value}`)
    })



    
});