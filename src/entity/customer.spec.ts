import Address from "./address";
import Customer from "./customer";

describe("Customer unit testes", () => {
    it("should get throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("", "John");
        }).toThrowError("Id is required");
    })

    it("should get throw error when name is empty", () => {
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrowError("Name is required");
    })

    it("should change name", () => {
        const customer = new Customer("123", "John");

        customer.changeName("Jane");

        expect(customer.name).toBe("Jane");
    })

    it("should activate customer", () => {
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Rua dois", 2, "12345-678", "Tubarao");
        customer.Adrress = address;

        customer.activate();

        expect(customer.isActive()).toBe(true);
    })

    it("should deactivate customer", () => {
        const customer = new Customer("1", "Customer 1");

        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    })

    it("should throw error when address is undefined when you activate a customer", () => {
        expect(() => {
            const customer = new Customer("1", "Customer 1");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    })

    it("should add reward points", () => {
        const customer = new Customer("1", "Customer 1");
        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
    })
})