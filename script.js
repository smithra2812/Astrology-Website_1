document.getElementById("astroForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("Name").value,
        dob: document.getElementById("dob").value,
        tob: document.getElementById("tob").value,
        pob: document.getElementById("pob").value,
        gender: document.getElementById("gender").value,
        focus: document.getElementById("Focus").value,
        email: document.getElementById("email").value
    };

    const messageDiv = document.getElementById("message");

    try {
        const res = await fetch("https://smithra28.app.n8n.cloud/webhook/1f423a58-be19-4c29-85b9-26515c34ec74", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            messageDiv.innerText = "Prediction will be emailed soon!";
            messageDiv.style.color = "green";
        } else {
            messageDiv.innerText = "Failed to send prediction. Try again.";
            messageDiv.style.color = "red";
        }
    } catch (error) {
        messageDiv.innerText = "Something went wrong. Please try again.";
        messageDiv.style.color = "red";
        console.error(error);
    }
});



