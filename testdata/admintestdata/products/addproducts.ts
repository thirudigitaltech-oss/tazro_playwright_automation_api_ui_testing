export const addproduct = {
    name: "FinaApple",
    price: 90,
    original_price: 120,
    cost_price: 90,
    unit: "1kg",
    description: "best vitmins c avialble",
    image: "https://pngimg.com/uploads/pineapple/small/pineapple_PNG95135.png",
    stock: 20,
    category: "fruites",
    is_active: true

}

// Nagative Payloads

export const invalidPayload = {
    name: "thi", // empty name
    price: -10, // invalid negative price
    original_price: 120,
    cost_price: 90,
    unit: "1kg",
    description: "Invalid product test",
    image: "https",
    stock: -5, // invalid negative stock
    category: "fruits",
    is_active: true
};