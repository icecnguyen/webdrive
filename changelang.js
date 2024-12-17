const translations = {
    en: {
        welcome: "Welcome to icecnguyen drive",
        download: "Download ADOFAI Level",
        questions: "Click <a class='custom-link' href='https://discordapp.com/users/598062127508488192' target='_blank'>here</a> if you have any questions or suggestions"
    },
    vi: {
        welcome: "Chào mừng bạn đến với icecnguyen drive",
        download: "Tải về cấp độ ADOFAI",
        questions: "Nhấn <a class='custom-link' href='https://discordapp.com/users/598062127508488192' target='_blank'>vào đây</a> nếu bạn có bất kỳ câu hỏi hoặc gợi ý nào"
    },
    fr: {
        welcome: "Bienvenue sur icecnguyen drive",
        download: "Télécharger le niveau ADOFAI",
        questions: "Cliquez <a class='custom-link' href='https://discordapp.com/users/598062127508488192' target='_blank'>ici</a> si vous avez des questions ou des suggestions"
    }
};
const elements = {
    welcome: document.getElementById("welcome"),
    download: document.getElementById("download"),
    questions: document.getElementById("questions"),
};
document.getElementById("language-selector").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
});
function updateLanguage(language) {
    elements.welcome.innerHTML = translations[language].welcome;
    elements.download.innerHTML = translations[language].download;
    elements.questions.innerHTML = translations[language].questions;
}
const defaultLanguage = "en";
document.getElementById("language-selector").value = defaultLanguage;
updateLanguage(defaultLanguage);
