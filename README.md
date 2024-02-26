Hello to everyone who is going to evaluate my test.

The requirements to run this test suite in order are:

1 - Install NodeJS. I used version 20.11

2 - Open the terminal and type corepack enable

3 - Check in the terminal that yarn is enabled: yarn --version

4 - Clone the repository to your local machine

5 - Navigate to the project folder: /thiago-computer-database

6 - Run the tests via terminal with the command: yarn cypress run

7 - If you want to run the tests via browser, just run the command: yarn cypress open

![Captura de tela 2024-02-26 174812](https://github.com/guimabevi/thiago-computer-database/assets/84109415/9fd6eeb6-a15f-487e-8e9c-722da2bc9f1a)

A few observations:

1 - In these tests we never know if the bugs in the application are part of the test or not. For example, in this application, after adding or deleting a computer, despite the success message, it was not added or removed from the main list of computers. The same behavior happens when editing, which despite being successful, does not display the updated values.

2 -  I chose to approach my tests by creating a simple PageObject, just to separate the element selectors from the test code. At the same time, I created two Cypress Custom Commands which I find very useful. I used both approaches to show that it is possible, but not necessarily always the best strategy.

3 - It took me about 4 or 5 hours to do the test even though the commits started a few days ago. Please don't take this as an excuse, but there were these intervals between commits because I'm taking the test from inside a hospital. I'm accompanying my grandfather who is in hospital and will be here for a few more days.
