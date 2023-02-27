// // Выбираем кнопку
// const btn = document.querySelector(".button-class");
// // Отслеживаем щелчок по кнопке
// btn.addEventListener("click", function () {
//   // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
//   document.body.classList.toggle("dark-theme");
// });

// добавляем обработчик события на кнопку переключения режима
$('#dark-mode-toggle').on('click', function() {
  // переключаем класс на body, чтобы изменить цветовую схему
  $('body').toggleClass('dark-mode');
});
