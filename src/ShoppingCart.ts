class ShoppingCart {
    private items: Item[];

    public constructor() {
        this.items = [];
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public removeItem(item: Item): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    public getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    public applyDiscount(): number {
        const total = this.getTotal();
        let discountPercentage = 0;

        if (total > 100) {
            discountPercentage = 10;
        } else if (total > 50) {
            discountPercentage = 5;
        }

        if (this.items.length >= 5) {
            discountPercentage += 5;
        }

        discountPercentage = Math.min(discountPercentage, 20);
        const discount = (discountPercentage / 100) * total;

        return total - discount;
    }
}

class Item {
    public name: string;
    public price: number;

    public constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

export { ShoppingCart, Item };
