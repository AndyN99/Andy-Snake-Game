const playButton = document.getElementById("play_button");
const settingButton = document.getElementById("setting_button");
const settignPage = document.getElementById("setting_page");
const backButton = document.getElementById("back");
export let stateOfGame = false;

playButton.addEventListener('click', () => {
    settignPage.style.visibility = "hidden";
    startGame();
})
settingButton.addEventListener('click', () => {
    settignPage.showModal();
})
backButton.addEventListener('click', () => {
    settignPage.close();
})
function startGame(){
    document.getElementById("modal").style.visibility = "hidden";
    stateOfGame = true;
}

