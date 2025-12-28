# GreenHarvest — Односторінковий сайт органічних овочів

**GreenHarvest** — це інтерактивний односторінковий сайт, створений для демонстрації сучасних практик веб-розробки, включаючи адаптивну верстку, семантичний HTML5 та оптимізовану графіку.  
Сайт призначений для компанії, що продає органічні овочі, і надає користувачам можливість швидко ознайомитися з асортиментом продуктів, переглянути відгуки клієнтів, дізнатися про процес замовлення та зробити покупку через зручну онлайн-форму.  
Верстка сайту виконана з урахуванням різних типів пристроїв — від мобільних телефонів до великих десктопів, з підтримкою Retina-екранів і оптимізованих зображень, що забезпечує швидке завантаження та приємний користувацький досвід.

---

## Опис проєкту

**GreenHarvest** — односторінковий сайт, що демонструє семантичний HTML5, адаптивну верстку, оптимізовану графіку та інтерактивні форми.

### Базові задачі

- Адаптивна верстка, окрім мобільних пристроїв. Точки перелому:
  - Mobile: гумова верстка від `320px`, адаптивна від `375px`
  - Tablet: від `768px`
  - Desktop: від `1280px`
- Валідна верстка:
  - HTML: [https://validator.w3.org/](https://validator.w3.org/)
  - CSS: [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)
- Семантична розмітка відповідно до стандартів HTML5
- Підключення шрифтів
- Оптимізація векторної та растрової графіки
- Підтримка Retina-екранів
- Оптимізація завантаження зображень
- Всі SVG-іконки підключені через спрайт
- Додано фавікон сторінки

---

## Структура проєкту

- **Header**  
  Містить лого та навігацію по сайту. На мобільних та планшетних пристроях відображається як бокова панель, що з’являється. Меню фіксоване, висота відповідає висоті в’юпорту. Навігація реалізована якорними посиланнями.

- **Hero**  
  Основний заголовок: _“Organic vegetables to your diet today!”_  
  Містить описову частину. Зображення реалізоване як фонове.

- **How it works**  
  Прихований заголовок для краулерів. Описова частина та перелік кроків для придбання овочів у вигляді `<ol>` з власними лічильниками ([MDN guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Counter_styles/Using_counters)). Зображення як контент.

- **Advertisement**  
  Прихований заголовок для краулерів. Описова частина. Зображення як контент.

- **Vegetables**  
  Заголовок: _“Organic vegetables”_  
  Описова частина. Перелік продуктів компанії у вигляді `<ul>`. Зображення як контент.

- **Reviews**  
  Заголовок: _“Reviews from our customers”_  
  Список відгуків клієнтів `<ul>`. Зображення як контент.

- **Your Order**  
  Заголовок: _“Fresh Harvest Box has got you covered”_  
  Описова частина та форма:

  - `<input>` поля (обов’язкові, мінімальна валідація за допомогою pattern)
  - `<textarea>`
  - Кнопка Submit: _Send_  
    Зображення як контент.

- **Соцмережі**  
  Перелік соцмереж компанії у вигляді `<ul>`, що відкриваються у новій вкладці:

  - [Instagram](https://www.instagram.com/goitclub/)
  - [YouTube](https://www.youtube.com/c/GoIT)
  - [Facebook](https://www.facebook.com/goITclub/)

- **Footer**  
  Містить лого, слоган компанії, перелік якірних посилань `<ul>` та контакти. Телефон як посилання.

---

## Ресурси

- [Макет у Figma](<https://www.figma.com/file/wuEpGhwCepGCOUw7mZFRac/Web-Studio-(Version-5.0)?type=design&node-id=570573-1472&mode=design&t=nSUcnqBK92tVgzcJ-0>)
- [Code Guide](https://codeguide.co/)
- [MDN: Using counters](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- [Instagram](https://www.instagram.com/goitclub/)
- [YouTube](https://www.youtube.com/c/GoIT)
- [Facebook](https://www.facebook.com/goITclub/)
- [CodePen Demo](https://codepen.io/SergeyKorobka/pen/WNWeKVp)

---

## Посилання

- [GitHub Repository](https://github.com/Akinaru72/greenharvest-app)
- [Жива сторінка](https://akinaru72.github.io/greenharvest-app/)
