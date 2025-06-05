import IceCreamTracker from "../src/IceCreamTracker";



describe("IceCreamTracker", ()=>{

    it("should return an empty array",()=>{

    const iceCreamTracker = new IceCreamTracker();
    
    expect(iceCreamTracker['consumedIceCreams']).toStrictEqual([]);
    })



    //hmmm
    it("should add an valid consumed ice cream", ()=>{
        
        const iceCreamTracker = new IceCreamTracker();

        iceCreamTracker.addConsumedIceCream("vanila", 1);

        expect(iceCreamTracker['consumedIceCreams'][0]).toStrictEqual({
            flavor: "vanila",
            calorieCount: 1});
    })




})