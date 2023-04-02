document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Verstecke Inference Time
    document.getElementById("inference-time").style.display = "none";

    // Starte Ladebalken
    document.getElementById("loader").querySelector(".progress").style.animation = "loading 1s infinite";
    document.getElementById("loader").querySelector(".progress").style.width = "0";

    const text = document.getElementById('text').value;
    const response = await fetch('/generate', {
        method: 'POST',
        body: new FormData(e.target)
    });

    const jsonResponse = await response.json();

    // Verstecke Ladebalken und zeige Inference Time an
    document.getElementById("loader").querySelector(".progress").style.animation = "none";
    document.getElementById("loader").querySelector(".progress").style.width = "100%";
    document.getElementById('output').innerText = jsonResponse.output;
    document.getElementById('inference-time').innerText = 'Inference time: ' + jsonResponse.inference_time;
    document.getElementById("inference-time").style.display = "block";
});

// Beispiel-Texte
document.querySelectorAll('.example-click').forEach((exampleClick, index) => {
    exampleClick.addEventListener('click', () => {
        const examples = [
            'translate English to German: The weather is nice today.',
            'calculate the sum of 5 and 3.',
            'what is the capital of Germany?',
            'Q: Can Obama have a conversation with George Washington? Give the rationale before answering',
            'Q: Which statement is sarcastic? Options: \n (A) Wow thats crazy, I have never seen a politician lying! \n (B) Wow thats crazy, I have never seen Obama lying! \n A: Lets think step by step.'
        ];

        document.getElementById('text').value = examples[index];
    });
});

