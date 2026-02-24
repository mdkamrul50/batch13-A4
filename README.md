📚 JavaScript DOM & Events – Short Notes
1️⃣ What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
These methods are used to select HTML elements in JavaScript, but they work differently.

getElementById:
It selects one element by id.
Id is unique, so it returns only one element.

getElementsByClassName:
It selects elements by class name.
It returns multiple elements by HTMLCollection.

querySelector:
It selects the first matching element like tagname, id, class.

querySelectorAll:
It selects all matching elements.
It returns a NodeList.

2️⃣ How do you create and insert a new element into the DOM?

Answer:
We can create a new HTML element using createElement() method and add it to the page using appendChild() method.

3️⃣ What is Event Bubbling? And how does it work?

Answer:
Event Bubbling means when event happens on child element, the event moves up to its parent elements one by one.

4️⃣ What is Event Delegation in JavaScript? Why is it useful?

Answer:
In Event Delegation, we put the event on the parent.
The parent handles the child events.

6️⃣ What is the difference between preventDefault() and stopPropagation() methods?

Answer:
preventDefault() stops the default action of the element, and stopPropagation() stops the event from going parent elements.






          
