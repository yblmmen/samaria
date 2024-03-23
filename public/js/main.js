document.getElementById('createAccountForm').onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch('/account/create', {
        method: 'POST',
        body: formData
    });
    const result = await response.json();
    document.getElementById('message').innerText = result.message;
};
