# Приложение To-Do Календарь

## Описание

Этот проект представляет собой список задач в виде календаря, где каждый день представлен как список задач. При клике на день открывается модальное окно со списком задач. В этом окне можно создавать новые задачи, удалять их и помечать как выполненные.

## Техническое задание

1. **Приятный внешний вид:** Приложение спроектировано с чистым и удобным интерфейсом.
2. **Семантическая вёрстка:** Проект использует семантический HTML для улучшения доступности и SEO.
3. **Адаптивный дизайн:** Приложение полностью адаптивно и под настольные компьютеры и под мобильные устройства.
4. **Сетка:** Реализована с помощью CSS Grid для расположения календаря, а так же для расположения элементов применен Flexbox.
5. **Методология БЭМ:** Следует методологии именования классов БЭМ.
6. **Маркировка праздничных дней:** Использует API isDayOff для маркировки праздничных и выходных дней.
7. **Просмотр задач по неделям:** Отображает название задачи для каждого дня в месяце.
8. **TypeScript:** Проект разработан с использованием TypeScript для лучшей проверки типов, поддерживаемости и масштабируемости функционала.
9. **Система профилей:** Каждый профиль имеет свой собственный список задач, который не отображается в других профилях.
10. **Принцип инверсии зависимостей:** Внешние HTTP-запросы реализованы с использованием принципа инверсии зависимостей.
11. **Структура проекта:** Проект имеет ясную и организованную структуру разделения на папки.

## Начало работы

### Требования

- Node.js
- npm или yarn

### Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/iRoman8614/AiRNET_ToList
   cd AiRNET_ToList
   ```

2. Установка зависимостей:

   ```bash
   npm install
   # или
   yarn install
   ```

# Запуск приложения
Чтобы запустить сервер разработки:

   ```bash
   npm start
   # или
   yarn start
   ```

Приложение будет доступно по адресу http://localhost:3000

# Вклад
Если у вас есть предложения по улучшению или вы нашли ошибки, пожалуйста, создайте issue или отправьте pull request.