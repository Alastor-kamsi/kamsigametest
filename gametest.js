function startGame() {

    const name = document.getElementById("playername").value;
    localStorage.setItem('playername',name);
    window.location.href = "gametest2.html";

}