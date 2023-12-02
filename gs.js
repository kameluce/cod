const scriptURL = 'https://script.google.com/macros/s/AKfycbz11I8uJtJSprRumfyBjM6ovtGJUHs4lsDDY_koE4yNNF1P-stZ49udfA_1gpEuUEiLqg/exec'

const form = document.forms['contact-form']
const success = document.getElementById('success')



form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => {

    success.innerHTML="YOU ORDER HAS BEEN SUCCEFFULLY SUBMITED !";
    setTimeout(function(){
        success.innerHTML = ""
    }, 15000)
    form.reset()

 })

 
 .then(() => { window.location(); })
 .catch(error => console.error('Error!', error.message))
})

document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    setTimeout(function() {
        window.location.href = "https://cod.dotkom.online/thankyou.html"; // Replace with your desired URL
      }, 3000); // Change the delay time as needed (in milliseconds)
    });



