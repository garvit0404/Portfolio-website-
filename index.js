

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");
    
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
  
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
  
        await fetch("/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });
  
        if (Notification.permission === "granted") {
          new Notification("Someone Has Reviewed You profile!! Check Details Now ", {
            body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          });
        }
      });
    }
  });
  