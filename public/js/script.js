document.addEventListener('DOMContentLoaded', function() {
    const wordToType = "tygutowski";
    const wordDiv = document.getElementById("word");
    let index = 0;

    function typeLetter() {
        if (index < wordToType.length) {
          wordDiv.textContent += wordToType.charAt(index);
          index++;
          setTimeout(typeLetter, 100);
        }
    }
    
    typeLetter();
});

function redirectTo(url) {
    window.location.href = url;
}



window.onload = typeWord("tygutowski", 100);