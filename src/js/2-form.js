const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector(`input[name="email"]`);
const messageTextarea = form.querySelector(`textarea[name="message"]`);

document.addEventListener("DOMContentLoaded", () => {
    const savedData = localStorage.getItem("feedback-form-state");
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";
        emailInput.value = formData.email;
        messageTextarea.value = formData.message;
    }
});

form.addEventListener("input", (e) => {
    const { name, value } = e.target;
    if (name === "email" || name === "message") {
        formData[name] = value.trim();
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    form.reset();
});