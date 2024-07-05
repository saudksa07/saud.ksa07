document.addEventListener("DOMContentLoaded", function() {
    const fruits = ["برتقال", "تفاح", "ليمون", "بطيخ", "ايسكريم", "بطاطس", "بيتزا", "لحمه"];
    const questionsContainer = document.getElementById("questions");

    for (let i = 1; i <= 10; i++) {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const label = document.createElement("label");
        label.innerText = `النتيجة ${i} كم تساوي:`;

        const select = document.createElement("select");
        select.name = `result${i}`;
        select.required = true;

        fruits.forEach(fruit => {
            const option = document.createElement("option");
            option.value = fruit;
            option.innerText = fruit;
            select.appendChild(option);
        });

        questionDiv.appendChild(label);
        questionDiv.appendChild(select);
        questionsContainer.appendChild(questionDiv);
    }
});

function submitForm() {
    const form = document.getElementById("fruitForm");
    const formData = new FormData(form);
    const results = [];

    for (let [key, value] of formData.entries()) {
        if (key.startsWith("result")) {
            results.push(value);
        }
    }

    const guess = formData.get("guess");
    alert(`نتائجك: ${results.join(", ")}\nتخمينك: ${guess}`);
}

