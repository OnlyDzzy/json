fetch("http://localhost:3000/users")
    .then((Response) => Response.json())
    
    .then((data) => {
        const userLIst = document.getElementById("userLIst")
        data.forEach((user) => {
            const li = document.createElement("li");
            li.textContent = `${user.name} (${user.email})`;
            userLIst.appendChild(li);
        });
    })
    .catch((error => console.log("Ошибка", error)));

const form = document.getElementById("user-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const newUser = {
        name: name,
        email: email
    };


    fetch("http://localhost:3000/users", {
        method: "POST",
        Headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Пользователь добавлен:", data);
        })
        .catch(error => console.error("Ошибка", error));
});
fetch('http://localhost:3000/users/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Alice Updated',
        email: 'alice.updated@example.com'
    })
})
    .then(response => response.json())
    .then(data => {
        console.log('Пользователь обновлен:', data);
    })
    .catch(error => console.error('Ошибка:', error));

fetch('http://localhost:3000/users/1', {
    method: 'DELETE'
})
    .then(() => {
        console.log('Пользователь удален');
    })
    .catch(error => console.error('Ошибка:', error));