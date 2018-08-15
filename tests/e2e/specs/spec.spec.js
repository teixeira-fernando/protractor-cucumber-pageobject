let fillName = require('../pages/FillName.po.js').default;
let toDoList = require('../pages/ToDoList.po.js').default;

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1200);

/*Before(function(){
    specPage = new AngularHomepage();
})*/

Given('The user go to {string}', function (string) {
    fillName.get(string);
});

When('The user adds {string} in the name field', function (string) {
    fillName.setName(string);
});

Then('The user should see Hello with the username', function () {
    expect(fillName.getGreetingText())
        .to.eventually.equal('Hello Tulio!')
});


When('The user adds {string} in the item name field', function (string) {
    toDoList.setItemName(string);
});

When('Click on the Add Button', function () {
    toDoList.clickAddButton();
});

Then('A new item with this name should be added to the list', function () {
    expect(toDoList.getLastItemName())
        .to.eventually.equal('New Item')
});