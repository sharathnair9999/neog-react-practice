# neog-react-practice

Thinking in React Exercises
Part I: Coding in React
ex: think in states#
Visualising the DOM
Change in the DOM after the event
think in: state → event → state#
understanding#
f(state) = view

f(state) = view

f(state') = view’

When thinking about functionality think of the program in two or multiple states
Then see what events will be required to change the state from A to B and B to C.
challenge (live)#
List down the states and event for

Age checker on sign up form
Take user's age. Show error if user is less than 18.
# Initial State: { isAgeLessThan18: false }

# Initial View
- isAgeLessThan18? if yes, then show error, else keep error hidden.
- View: error Hidden

#  Event
- Read Input.
- Use that Input to calculate Age.

# new state
- if age < 18 then set state to { isAgeLessThan18: true }

# new view
- isAgeLessThan? if yes, then show error, else keep error hidden.
- View: error Shown.
Password matcher on set password form
Take two password. Show error if both don't match.
ex: revise useState()#
Revise the syntax for useState() and what it means with de-structuring.
What happens when you set the state to a new value?
use console.log() to see the renders?
challenge#
Two buttons + and -

Clicking on the button should change the value in view.

ex: change background color#
Take a paragraph with text. Have a toggle button. Change the color of the background between red and transparent on every button click.

Part II: Peeking under the hood
challenge#
Can you tell someone how React makes your life easy?
What part of vanillaJS DOM Scripting work does React do for you?
Do you understand declarative programming? If yes, write an example and explain using a simple program.
understanding#
React makes your life easy.
Diffing is fast in React and that's why it's used across industry. Understand the diffing part.
React is Declarative. Have clear understanding of Declarative vs Imperative.
https://reactjs.org/docs/rendering-elements.html

homework#
Check out React debugger.
Pro: Use Chrome debugger to get into React code to understand even more.
Part III: Think in Components
understanding#
Breaking everything in smaller components and then composing them into an app is an essential skill.
Data can be passed through props from top to bottom in React Tree.
Not just data even callback functions can be passed
Before you write your first line of code, mapping data and functionality is important. Tutorials do it in their mind but when you are starting it's good to note these things down on paper.
challenge (live)#
go to any website and identify the components which make the app whole

list down the

data being used/passed in each component
the functionality of each component
// discord.com

<ServerSelectionBar />
<ChannelMenu />
<MainScreen>
	<Header />
	<ChatPane>
			<Messages/>
			<ChatInput />
	</ChatPane>
</MainScreen>
<StatusPane/>
Part IV: Practice, lots of Practice
ex1: character counter (Twitter)#
See the Twitter post component. It gives you an indicator of the character count. Replicate that behavior.

ex2: password match#
Any signup form, password reset form has this functionality. Take two passwords from user. Show error only if both passwords don't match.

ex3: alphanumeric password#
Password should contain a number. Show error if user misses character.

ex4: disable submit#
Add a submit button to password change field.
Disable submit button if passwords don't match
Clicking on submit should console the password field


ex5: show password#
Create a password reset form
Put a button show password near the input element.
Clicking should show password to the user.
Text on show password should change to hide password when password is shown.
Click on hide password and password goes back to hidden again.


ex6: designer tool (mini figma)#
Let user finalise the size of text she would like on the screen. Two buttons + and - both will increase/decrease size by 8px. Show the size on the screen.

IDEA You can make a small app around this which quickly selects you between fonts.

Have prefixed sizes. Multiples of 8px.
Have some selected best fonts.
Tell which fonts are good for heading. which are good for text.
Suggest pair of fonts which go together.
Give user an option to copy the CSS. (Bonus feature)

ex7: add to cart#
Show a list of items with add to cart button
Clicking on the button should add that item to cart.
Show the cart below with items added.
Clicking on the same item twice should add more items in cart.
CHALLENGE : increase the count of the item in cart without adding it to list.

ex8: switch tabs#
Make three components: Home, About, Profile.
Put some text in the components
Now, create three buttons with same name
Clicking on the button should show that component
UNDERSTANDING : this is kind of your own router, unless we get into router implementation.

ex9: toast#
Create a Toast Component
Component should have two things
Text
Hide Button
Create a button show toast
Clicking on this button should show Toast
Clicking on hide button on toast should hide the toast
UNDERSTAND : how callbacks can be passed to control state from parent component.
CHALLENGE :
Create different type of toasts: Error, Success, Warning etc.
Differentiate your toast by just a prop and the design should change.


ex10: todo/strikethrough#
Write a TODO app
Add TODOs from input
Clicking on a TODO should complete it using strikethrough
Clicking again should remove the strikethrough.

ex11: dark mode#
Create a toggle dark mode button
Clicking on the button should change background and text color and toggle between dark and light mode

ex12: like in a list#
Render a list
Every item in the list should have a like button.

ex13: out of stock (grey)#
Render a list of items from an array of objects. In that object, have a field outOfStock: true and depending on true/false grey out the out of stock object. Your component card should have this design built in as an additional class.
