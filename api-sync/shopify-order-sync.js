/**
 * Demo: Shopify → Airtable Order Sync
 * Purpose: Illustrates safe automation logic for syncing orders from Shopify to Airtable.
 *
 * NOTE:
 * - This is a demonstration file only
 * - No real API keys or client data
 * - Payload and logic are simplified for clarity
 */

// Sample order data (mock)
const shopifyOrder = {
  order_id: "ORDER_12345",
  customer: {
    name: "Jane Doe",
    email: "jane@example.com"
  },
  items: [
    { sku: "SKU_001", name: "T-shirt", quantity: 2 },
    { sku: "SKU_002", name: "Cap", quantity: 1 }
  ],
  total_price: 150.0,
  status: "paid"
};

// Airtable record format
const airtableRecord = {
  fields: {
    OrderID: shopifyOrder.order_id,
    CustomerName: shopifyOrder.customer.name,
    CustomerEmail: shopifyOrder.customer.email,
    Items: shopifyOrder.items.map(i => `${i.quantity}x ${i.name}`).join(", "),
    Total: shopifyOrder.total_price,
    Status: shopifyOrder.status
  }
};

// Demo function to illustrate sending to Airtable
function syncToAirtable(record) {
  // Normally you would use Airtable API client here
  console.log("Syncing the following record to Airtable:", record);
}

// Run demo
syncToAirtable(airtableRecord);
