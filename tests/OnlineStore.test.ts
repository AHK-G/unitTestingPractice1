import OnlineStore from "../src/OnlineStore";
import { Product, Order } from "../src/OnlineStore";

describe("Online Store", () => {
  let testProduct: Product;
  let onlineStore: OnlineStore;

  beforeEach(() => {
    testProduct = {
      productId: "123",
      name: "test product",
      price: 99,
    };
    onlineStore = new OnlineStore();
  });

  describe("Products", () => {
    it("should be able to add a product", () => {
      const { productId, name, price } = testProduct;

      onlineStore.addProduct(productId, name, price);

      const foundProduct = onlineStore.getProduct(productId);
      expect(foundProduct).toStrictEqual(testProduct);
    });

    it("should throw an error if the product can't be found", () => {
      const unknownProduct = () => onlineStore.getProduct("unknown");

      expect(unknownProduct).toThrow("Product not found");
    });
  });

  describe("Orders", () => {
    const orderId = "12345";
    const quantity = 2;

    beforeEach(() => {
      const { productId, name, price } = testProduct;
      onlineStore.addProduct(productId, name, price);
    });

    it("should be able to create an order", () => {
      const { productId } = testProduct;
      const expectedOrder: Order = {
        orderId: "12345",
        productId: testProduct.productId,
        productName: testProduct.name,
        quantity: quantity,
        totalPrice: quantity * testProduct.price,
      };

      const processedOrder = onlineStore.processOrder(
        orderId,
        productId,
        quantity
      );

      expect(processedOrder).toStrictEqual(expectedOrder);
    });

    it("should be able to get an order", () => {
      const { productId } = testProduct;
      const processedOrder = onlineStore.processOrder(
        orderId,
        productId,
        quantity
      );

      const fetchedOrder = onlineStore.getOrder(orderId);

      expect(fetchedOrder).toStrictEqual(processedOrder);
    });

    it("should throw an error if the order can't be found", () => {
      const order = () => onlineStore.getOrder("nonExistingOrder");

      expect(order).toThrow("Order not found");
    });
  });
});
