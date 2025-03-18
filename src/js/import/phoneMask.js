export default function(selector) {
  const inputs = document.querySelectorAll(selector);
  const instances = [];

  inputs.forEach(el => {
    const mask = IMask(el, { mask: "+{1 }(000) 000-00-00" }); // Создаем экземпляр маски

    // Обработчик вставки
    el.addEventListener("change", (event) => {
      event.preventDefault(); // Предотвращаем вставку по умолчанию

      const pastedValue = event.clipboardData.getData("text"); // Получаем текст из буфера обмена

      // Устанавливаем отформатированное значение
      mask.value = pastedValue.replace(/\D/g, ""); // Используем mask.value
      mask.updateValue();  // Важно: синхронизируем маску
    });

    instances.push(mask); // Сохраняем экземпляр маски
  });

  return instances;
}
