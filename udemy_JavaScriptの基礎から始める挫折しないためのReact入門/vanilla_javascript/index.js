'use strict';

const input = document.querySelector('input[type="text"]');
const addButton = document.querySelector('.add');
const incompleteList = document.querySelector('.incomplete-list');
const completeList = document.querySelector('.complete-list');

addButton.addEventListener('click', () => createTodo(input.value));

function createTodo(value) {
  if (!value) return;

  const todo = document.createElement('li');
  const todoText = document.createElement('p');
  const completeButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  todoText.textContent = value;
  completeButton.textContent = '完了';
  deleteButton.textContent = '削除';
  completeButton.classList.add('complete');
  deleteButton.classList.add('delete');

  completeButton.addEventListener('click', (e) => {
    deleteTodo(e.target.parentElement);
    completeTodo(value);
  });

  deleteButton.addEventListener('click', (e) => {
    deleteTodo(e.target.parentElement);
  });

  todo.appendChild(todoText);
  todo.appendChild(completeButton);
  todo.appendChild(deleteButton);

  incompleteList.appendChild(todo);
  input.value = '';
}

function completeTodo(value) {
  if (!value) return;

  const todo = document.createElement('li');
  const todoText = document.createElement('p');
  const returnButton = document.createElement('button');

  todoText.textContent = value;
  returnButton.textContent = '戻す';
  returnButton.classList.add('return');

  returnButton.addEventListener('click', (e) => {
    deleteTodo(e.target.parentElement);
    createTodo(value);
  });

  todo.appendChild(todoText);
  todo.appendChild(returnButton);

  completeList.appendChild(todo);
}

function deleteTodo(item) {
  item.remove();
}
