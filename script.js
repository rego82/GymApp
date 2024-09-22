function showDay(day) {
    // Alle Trainingstage ausblenden
    const allDays = document.querySelectorAll('.training-day');
    allDays.forEach((dayDiv) => dayDiv.style.display = 'none');

    // Den ausgewählten Tag anzeigen
    document.getElementById(`day-${day}`).style.display = 'block';

    // Alle Tab-Buttons deaktivieren
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Den aktiven Button hervorheben
    buttons[day - 1].classList.add('active');
}

// Den ersten Tag standardmäßig anzeigen
document.addEventListener("DOMContentLoaded", () => {
    showDay(1);
});
