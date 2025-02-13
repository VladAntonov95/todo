# Todo App

## Мова/Language:

- [English](#english)
- [Українська](#ukrainian)

## <a name="ukrainian"></a> 🟨🟦 Ukrainian Version

## 📥 Як запустити проєкт

1. **Клонуйте репозиторій**  
   Спочатку клонуйте репозиторій на вашу локальну машину:

```bash
   git clone https://github.com/ваш-аккаунт/todo-app.git
```

2. **Перейдіть в теку проєкту**

```bash
  cd todo-app
```

3. **Встановіть залежності**

```bash
   npm install
```

4. **Запустите приложение**
   Зараз коли залежності встановлені, зіпустіть додаток:

```bash
   npm run dev
```

Після цього проект буде доступний за адресою: http://localhost:3000

## 🛠 Технології

Цей проєкт використовує такі технології:

- **TypeScript** — строгий тип для підвищення надійності коду.
- **React** — бібліотека для створення інтерфейсів користувача.
- **Next.js** — фреймворк для React, що підтримує серверний рендеринг і статичну генерацію.
- **Tailwind CSS** — utility-first CSS фреймворк для швидкого створення адаптивних і красивих інтерфейсів.
- **React Hooks** — для управління станом і побічними ефектами в компонентах.
- **React Query** — для спрощення отримання та кешування даних.
- **Axios** — для виконання HTTP-запитів.

## 🚀 Функции приложения

Приложение берет первые 10 задач с "https://jsonplaceholder.typicode.com/todos"

В этом приложении для управления списком задач (todo list) доступны следующие функции:

1. Добавление задач: Вы можете добавлять новые задачи в список. Путем заполнения инпута и нажатия на кнопку "Add"
2. Редактирование задач: Редактировать задачи можно, если они не завершены.
3. Отметка задач как завершенных: При клике на задачу она помечается как выполненная.
4. Удаление задач: Вы можете удалить любую задачу из списка.
5. Фильтрация задач: Задачи сортируются так, чтобы невыполненные задачи отображались выше завершенных.
6. Интерфейс с поддержкой редактирования: Для задач, которые редактируются, появляется возможность сохранить изменения или отменить их.

## 🚀 Функції додатку

Додаток отримує перші 10 завдань з JSONPlaceholder, імітуючи справжній список завдань. Ось які функції доступні в цьому додатку для управління списком завдань:

- **Додавання завдань:**  
  Ви можете додавати нові завдання до списку, заповнивши поле введення та натиснувши кнопку "Add".

- **Редагування завдань:**  
  Завдання можна редагувати, якщо вони ще не виконані. Ви можете змінити текст завдання та зберегти зміни.

- **Позначення завдань як виконаних:**  
  Клік на завдання позначає його як виконане. Виконані завдання відображаються з галочкою.

- **Видалення завдань:**  
  Ви можете видалити будь-яке завдання зі списку, натиснувши кнопку видалення поруч з ним.

- **Фільтрація завдань:**  
  Завдання сортуються так, щоб невиконані завдання відображалися вище виконаних.

- **Інтерфейс з підтримкою редагування:**  
  Для завдань, що редагуються, з’являється можливість зберегти зміни або скасувати їх.

  # Важливо зауважити, що в коді наявні комментарі, що пояснюють те як працює код с jsonplaceholder, а саме з кешем, тому як сервер не змінюється

  ## Насолоджуйтесь

## <a name="english"></a> 🇬🇧 English Version

## 📥 How to Run the Project

1. **Clone the repository**  
   First, clone the repository to your local machine:

```bash
   git clone https://github.com/your-account/todo-app.git https://github.com/VladAntonov95/todo.git
```

2. **Navigate to the project directory**

```bash
  cd todo-app
```

3. **Install dependencies**

```bash
npm install
```

4. **Run the application**
   Now that dependencies are installed, run the app:

```bash
npm run dev
```

The project will then be available at: http://localhost:3000

## 🛠 Technologies

This project uses the following technologies:

- **TypeScript** — strict typing to enhance code reliability.
- **React** — a library for building user interfaces.
- **Next.js** — a React framework that supports server-side rendering and static generation.
- **Tailwind CSS** — a utility-first CSS framework for building responsive and beautiful interfaces quickly.
- **React Hooks** — for managing state and side effects in components.
- **React Query** — for simplifying data fetching and caching.
- **Axios** — for making HTTP requests.

## 🚀 App Features

The application fetches the first 10 tasks from "https://jsonplaceholder.typicode.com/todos".

This app provides the following features for managing a todo list:

1. Adding tasks: You can add new tasks to the list by filling in the input and clicking the "Add" button.
2. Editing tasks: Tasks can be edited if they are not completed.
3. Marking tasks as completed: Clicking on a task marks it as completed.
4. Deleting tasks: You can delete any task from the list.
5. Filtering tasks: Tasks are sorted so that incomplete tasks appear above completed ones.
6. Editable interface: Tasks that are being edited have the option to save or cancel changes.

🚀 Application Features
The app fetches the first 10 tasks from JSONPlaceholder, simulating a real task list. Here are the features available in this app for managing the task list:

- **Adding tasks:**
  You can add new tasks to the list by filling in the input field and clicking the "Add" button.

- **Editing tasks:**
  Tasks can be edited if they are not completed. You can change the task text and save the changes.

- **Marking tasks as completed:**
  Clicking on a task marks it as completed. Completed tasks are displayed with a checkmark.

- **Deleting tasks:**
  You can delete any task from the list by clicking the delete button next to it.

- **Filtering tasks:**
  Tasks are sorted so that incomplete tasks appear above completed ones.

- **Editable interface:**
  For tasks being edited, the option to save or cancel changes appears.

# It is important to note that the code contains comments explaining how the code works with jsonplaceholder, specifically with the cache, because the server does not change.

## ENJOY :)
