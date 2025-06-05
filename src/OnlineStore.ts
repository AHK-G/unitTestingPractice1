export interface Product {
  productId: string;
  name: string;
  price: number;
}

export interface Order {
  orderId: string;
  productId: string;
  productName: string;
  quantity: number;
  totalPrice: number;
}

class OnlineStore {
  private products: Product[];
  private orders: Order[];

  public constructor() {
    this.products = [];
    this.orders = [];
  }

  // Add a product to the store
  public addProduct(productId: string, name: string, price: number): void {
    const product: Product = { productId, name, price };
    this.products.push(product);
  }

  // Retrieve product information
  public getProduct(productId: string): Product {
    const product = this.products.find((p) => p.productId === productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  // Process an order
  public processOrder(
    orderId: string,
    productId: string,
    quantity: number
  ): Order {
    const product = this.getProduct(productId);
    const order: Order = {
      orderId,
      productId,
      productName: product.name,
      quantity,
      totalPrice: product.price * quantity,
    };
    this.orders.push(order);
    return order;
  }

  // Retrieve order details
  public getOrder(orderId: string): Order {
    const order = this.orders.find((o) => o.orderId === orderId);
    if (!order) {
      throw new Error("Order not found");
    }
    return order;
  }
}

export default OnlineStore;
