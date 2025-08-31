export function loadRazorpayScript() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export async function initiatePayment({ amount, onSuccess, paymentMethod }) {
  if (paymentMethod === "COD") {
    alert("Order placed successfully with Cash on Delivery!");
    onSuccess({
      id: "COD_ORDER_" + Date.now(),
      method: "COD",
      status: "success",
    });
    return;
  }

  const isLoaded = await loadRazorpayScript();

  if (!isLoaded) {
    alert("Failed to load Razorpay SDK. Check your internet connection.");
    return;
  }

  const options = {
    key: "rzp_test_RAhOWgBGJDVwuI", 
    amount: amount * 100, 
    currency: "INR",
    name: "Online Pharmacy",
    description: "Order Payment",
    handler: function (response) {
      onSuccess({
        id: response.razorpay_payment_id,
        method: "Razorpay",
        status: "success",
      });
    },
    prefill: {
      name: "Online Pharma",
      email: "kartikpatil1911@gmail.com",  //email
      contact: "8722511738",  //number
    },
    theme: {
      color: "#33cc59ff",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
}