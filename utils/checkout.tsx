// Placeholder.
// This will be a collection of checkout page/functions/components.
// To start with, it will just utilise stripe.
// Other providers will be added in the future. 

// Something like this (Chris to review and redesign this placeholder stuff):

// interface PaymentMethod {
//   type: string; // Cash, Card, NFC, etc.
//   amount: number; // in cents
// }

// const Checkout: React.FC = () => {
//   const [totalAmount, setTotalAmount] = useState<number>(0); // in cents
//   const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

//   const addPayment = (paymentMethod: PaymentMethod) => {
//     setPaymentMethods([...paymentMethods, paymentMethod]);
//   };

//   const calculateTotalAmount = () => {
//     const total = paymentMethods.reduce((acc, method) => acc + method.amount, 0);
//     setTotalAmount(total);
//   };

//   const completeCheckout = () => {
//     // Logic for completing the checkout
//     // Possibly call an external API to register the transaction
//     // Reset states
//     setTotalAmount(0);
//     setPaymentMethods([]);
//   };

//   return (
//     <View>
//       <Text>Total Amount: {totalAmount} cents</Text>

//       <Button title="Add Cash Payment" onPress={() => addPayment({ type: 'Cash', amount: 500 })} />
//       <Button title="Add Card Payment" onPress={() => addPayment({ type: 'Card', amount: 500 })} />
//       {/* Additional buttons for NFC and other payment methods can be added here */}

//       <Button title="Calculate Total" onPress={calculateTotalAmount} />
//       <Button title="Complete Checkout" onPress={completeCheckout} />
//     </View>
//   );
// };

// export default Checkout;
