window.addEventListener("load", function() {
    const button = document.querySelector("#search-button");

    button.addEventListener("click", function() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "superheroes.php", true);  

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    alert(xhr.responseText);
                } else {
                    alert("Error: " + xhr.status);
                }
            }
        };

        xhr.send();
    });
});
