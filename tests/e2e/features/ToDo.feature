Feature: To Do List
    Scenario: Add Item to the To Do List
        Given The user go to "https://angularjs.org/"
        When The user adds "New Item" in the item name field
        And Click on the Add Button
        Then A new item with this name should be added to the list