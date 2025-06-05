interface IceCreamItem {
    flavor: string;
    calorieCount: number;
}

class IceCreamTracker {
    private consumedIceCreams: IceCreamItem[];

    public constructor() {
        this.consumedIceCreams = [];
    }

    // Add a consumed ice cream item with its calorie count
    public addConsumedIceCream(flavor: string, calorieCount: number): void {
        if (calorieCount <= 0 || isNaN(calorieCount)) {
            throw new Error('Invalid calorie count');
        }
        const iceCreamItem: IceCreamItem = {flavor, calorieCount};
        this.consumedIceCreams.push(iceCreamItem);
    }

    // Calculate the total calorie intake from consumed ice cream
    public calculateTotalCalories(): number {
        let totalCalories = 0;
        for (const iceCreamItem of this.consumedIceCreams) {
            totalCalories += iceCreamItem.calorieCount;
        }
        return totalCalories;
    }

    // Provide recommendations based on ice cream intake goals
    public getRecommendation(goalCalories: number): string {
        const totalCalories = this.calculateTotalCalories();
        const remainingCalories = goalCalories - totalCalories;

        if (remainingCalories > 0) {
            return `You have ${remainingCalories} calories remaining for your ice cream goal.`;
        } else if (remainingCalories === 0) {
            return 'You have reached your ice cream intake goal for the day.';
        } else {
            return `You have exceeded your ice cream intake goal by ${Math.abs(remainingCalories)} calories.`;
        }
    }
}

export default IceCreamTracker;
