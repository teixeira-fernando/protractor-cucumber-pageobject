var AngularToDoListpage = function() {
  
    //Todo List Elements
    var itemNameInput = element(by.model('todoList.todoText'));
    var addButton = element(by.buttonText('Add'))
    var toDoList = element(by.repeater('todo in todoList.todos'));
  
    this.get = async function() {
      await browser.get('http://www.angularjs.org');
    };
  
    //Todo List feature
    this.setItemName = async function(name) {
      await itemNameInput.sendKeys(name);
    };

    this.clickAddButton = function(){
        addButton.click();
    }

    this.countTodoList = new function(){
        return toDoList.count();
    }

    this.getLastItemName = new function(){
      return toDoList.row(toDoList.count()).column('todo.text');
    }
  
    
  };
  module.exports = new AngularToDoListpage();