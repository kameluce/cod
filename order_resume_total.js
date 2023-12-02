                    // Get elements with the specified classes
                    const deliveryRates = document.querySelectorAll('.delivery-rate');
                    const prices = document.querySelectorAll('.price');
                    const totalOrder = document.querySelector('.total-order');
                
                    // Function to calculate the sum of values in the specified classes
                    function calculateTotal() {
                    let sum = 0;
                
                    // Loop through each pair of elements with class 'delivery-rate' and 'price'
                    for (let i = 0; i < Math.min(deliveryRates.length, prices.length); i++) {
                        const deliveryRateValue = parseFloat(deliveryRates[i].innerText.split(':')[1].trim());
                        const priceValue = parseFloat(prices[i].innerText.split(':')[1].trim());
                
                        // Add the values to the sum
                        sum += deliveryRateValue + priceValue;
                    }
                
                    // Display the total sum under the 'total-order' class
                    totalOrder.textContent = `Total Order: ${sum}`;
                    }
                
                    // Call the function to calculate and display the total
                    calculateTotal();