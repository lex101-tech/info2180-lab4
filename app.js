window.addEventListener("load", function() {
    const button = document.querySelector("#search-button");
    const input = document.querySelector("#search-input");
    const result = document.querySelector("#result");

    button.addEventListener("click", function() {
        const query = input.value.trim();
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "superheroes.php?query=" + encodeURIComponent(query), true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    result.innerHTML = xhr.responseText;
                } else {
                    result.innerHTML = "Error: " + xhr.status;
                }
            }
        };

        xhr.send();
    });
});
