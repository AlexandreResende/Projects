
var todoList = {
  
  /*
  ** structure of the array of objects
  ** todoText: string
  ** completed: boolean
  */
  todos: [],
  
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
  },
  
  deleteTodo: function(position){
    this.todos.splice(position, 1);
  },
  
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  
  toggleAll: function(){
    var completedTodos;
    var totalTodos = this.todos.length;
    for (completedTodos = 0; completedTodos < totalTodos; completedTodos++){
      if (this.todos[completedTodos].completed === false){
        break;
      }
    }
    if (completedTodos < totalTodos){
      for (var ans = 0; ans < totalTodos; ans++){
        this.todos[ans].completed = true;
      }
    } else {
      for (var ans = 0; ans < totalTodos; ans++){
        this.todos[ans].completed = false;
      }
    }
  }
  
};

//object for handling different events
var handlers = {
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function(){
    var changeTodoPosition = document.getElementById('changeTodoPosition');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoTextInput.value);
    changeTodoPosition.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted:  function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var ans = 0; ans < todoList.todos.length; ans++){
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = (todoList.todos[ans].completed) ? '(x)' : '( )';
      todoLi.textContent = todoTextWithCompletion + ' ' +todoList.todos[ans].todoText;
      todosUl.appendChild(todoLi);
    }
  }
};


