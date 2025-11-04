import { useCounter } from "@/composables/my-counter/useCounter";


describe("useCounter", () => {
    test("initial counter with provided value", () => {
        const initialValue = 15;
        const { counter, square } = useCounter(initialValue);
        expect(counter.value).toBe(initialValue);
        expect(square.value).toBe(initialValue * initialValue);
    });



    test("initial counter with default value", () => {
        const { counter, square } = useCounter();
        expect(counter.value).toBe(5);
        expect(square.value).toBe(25);
    }); 

    
    test("counter increments correctly", () => {
        const { counter, square } = useCounter();
        counter.value++;
        expect(counter.value).toBe(6);
        expect(square.value).toBe(36);
    });

});