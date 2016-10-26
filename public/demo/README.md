
# Front-end Developer Test

# Installation
1). Installation requires node.js on your computer
2). Clone the repository from link: 
3). Open Terminal and go to project folder
4). Give npm install

# Launching the application
1). Open Terminal and go to project folder
2). Enter "node server.js" in the terminal to start the Server
3). Open Browser and enter url: http://localhost:8888/demo

# Users
There are four predefined users:
1). UserName: alice 
--- Password: password1
2). UserName: bob 
--- Password: password2
3). UserName: charlie 
--- Password: password3
4). UserName: dan 
--- Password: password4

# Application introduction

This application provides the information of all states in US(state information is stored in states.json file). 
The application provides user the facility to Login.
On providing incorrect login details, error message will be displayed.
Once the user login to the application with correct credentials, the state Info page is dislpayed by default.
The page contains 3 buttons (States, Messages and Logout), List of states is the Left and State information in the right side form.
There is a Sort dropdown which provides the user the facility to sort the states based on Name(default), Abbreviation, Distance, etc., 
There is a Limit text box, which restricts the list of states displayed.
There is an Offset text box, whcih will display the list of states starting from the Offset value entered in the text box.
By default, first state will be selected and infromation corresponding to the first state will be displayed.
In the States List, when the user select a particular state, information corresponding to the state will be displayed in the right side form without page load. 
Under the Message tab, by default, the stored user message will be displayed in the guest book.
User has a provision to add message to the guest book.
On clicking Logout, the application logs out the User.

# Questions

What URL should be used to access your application?
http://localhost:8888/demo

What libraries did you use to write your application?
jquery v.3.0.0 
bootstrap v.3.3.6

What influenced the design of your user interface?

What steps did you take to make your application user friendly?
In Login screen, provided the hints in the text boxes as User Name, Password. 
On Incorrect Login, the application throws meaningful error message.
Provided good Look and feel to the application.

What steps did you take to insure your application was secure?
We are using POST call while creating the forms.

What could be done to the front end or back end to make it more secure?
We could user Secured http (https) to make the application more secure.
