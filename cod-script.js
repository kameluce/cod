// Fetch data from JSON file
fetch('cod-data.json')
  .then(response => response.json())
  .then(data => {
    // Accessing the first offer from the array (you can loop through all offers)
    const firstOffer = data.offers[0];

    // Update elements with respective class names
    document.querySelector('.offer-name').textContent = firstOffer.offerName;
    document.querySelector('.offer-pourcentage').textContent = firstOffer.offerPercentage;
    document.querySelector('.offer-txt').textContent = firstOffer.offerTxt;
    document.querySelector('.offer-old-price').textContent = firstOffer.offerOldPrice;
    document.querySelector('.offer-price').textContent = firstOffer.offerPrice;
    document.querySelector('.discount').textContent = firstOffer.offerDiscount;
    document.querySelector('.product-name').textContent = firstOffer.productInfo.productName;
    document.querySelector('.price').textContent = firstOffer.productInfo.price;
    document.querySelector('.old-price').textContent = firstOffer.productInfo.oldPrice;
    document.querySelector('.promo-title').textContent = firstOffer.productInfo.promoTitle;
    document.querySelector('.delivery-rate').textContent = firstOffer.deliveryRate;
    
    const Price = parseFloat(firstOffer.productInfo.price.replace('', '')); // Assuming the price format is $XX.XX
    const deliveryRate = parseFloat(firstOffer.deliveryRate.replace('', '')); // Assuming the price format is $XX.XX
    const sum = Price + deliveryRate;

        // Display sum in an HTML element with a specific class name
        const sumElement = document.querySelector('.total-order');
        sumElement.textContent = `${sum} دج`; // Displaying the sum with 2 decimal places
    // You can access other offers in a similar manner or manipulate the DOM as needed

    const oldPrice = parseFloat(firstOffer.offerOldPrice.replace(/[^\d.]/g, '')); // Assuming the price format is $XX.XX
    const price = parseFloat(firstOffer.offerPrice.replace(/[^\d.]/g, '')); // Assuming the price format is $XX.XX
    
    // Calculate the discount percentage
    const discount = Math.round(((oldPrice - price) / oldPrice) * 100);

    // Display discount in the .discount element
    const discountElement = document.querySelector('.discount');
    discountElement.textContent = `${discount}%-`;

  })
  .catch(error => console.error('Error fetching data:', error));
