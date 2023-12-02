    
     // FAKE ORDERS COUNTER
    
    function updateCounter() {
      const countElement = document.getElementById('count');
      let count = parseInt(countElement.innerText, 10);
  
      // Generate a random time between 3 to 6 seconds
      const randomTime = Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000;
  
      // Update the counter and display
      countElement.innerText = count + 1;
  
      // Schedule the next update after a random period
      setTimeout(updateCounter, randomTime);
    }
  
    // SCARITY COUNTER
    updateCounter();
  
    function updateScarcityCounter() {
      const scarcityCountElement = document.getElementById('scarity_count');
      let scarcityCount = parseInt(scarcityCountElement.innerText, 10);
    
      // Generate a random time between 3 to 6 seconds
      const randomTime = Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000;
    
      // Update the scarcity counter and display
      scarcityCountElement.innerText = Math.max(0, scarcityCount - 1); // Ensure the count doesn't go below 0
    
      // Schedule the next update after a random period
      setTimeout(updateScarcityCounter, randomTime);
    }
    
    // Start the scarcity counter
    updateScarcityCounter();