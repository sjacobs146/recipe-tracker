# Recipe Tracker
This application allows users to create, update, and retrieve recipe
information.  It has a JavaScript-based front-end and a Ruby-on-Rails backend.

[Click Here for demo](https://sjacobs146.github.io/recipe-tracker/)

API URL:  https://sjacobs146-recipe-api.herokuapp.com

# Technologies Used
- HTML5
- CSS
- JavaScript
- jQuery
- Bootstrap
- Handlebars
- AJAX
- REST

# My Planning process
I began my planning by reading the project requirements, and creating wireframes.
Then I created some user stories, and an [agile board](https://trello.com/b/UrqPOOGs/full-stack-project) to represent the tasks that needed to be accomplished.  I also spent some time designing my
application code.

# My development process and problem-solving strategy
## My development process
I began working on the front-end of my application after the back-end API was
completely coded and tested via curl scripts.  Because the back-end required
authentication and my application is all about creating and editing data, I
decided to implement the authentication first (i.e. sign in, sign up, change password, sign out).  Once I got all of that working correctly locally, I
deployed to GitHub pages and tested in "production". The next piece of
functionality that I implemented was Add Recipe, followed by Find Recipe, Delete Recipe, and finally Edit Recipe.  It was difficult not to allow my project
scope to creep, I originally wanted to do a lot of things that were not
strictly required such as integrating the edit functionality with the find
recipe functionality so that users would not have to enter the id of a recipe
to edit it.

In general, I created a feature branch each time I began a new major feature. I
committed my code each time I had a small piece working the way I wanted it to.
I typically do not commit code that is not working and tested.  Once a feature
was completed, I merged the feature branch to master, and deployed it to GitHub.

## My problem-solving strategy
I regularly make use of console.log and the debugger to ensure that events are being fired and functions are being called when they are expected to.  I also use console.log to see what the data looks like along the way.  I always have the developer console up when I am testing code. If something isn't working as expected, I will take different approaches depending upon the behaviour I'm observing. I may look for typos, review documentation, ask a colleague, Google, etc.  I also use the developer console to preview small changes to styles before
I implement in my code.

# Unsolved Problems
Oh let me count the ways...

- I would like to be able to implement a true search functionality, right now
every search returns all recipes owned by the current user.

- I would like to integrate the edit functionality with the search page as I did
for delete.

- The "active" state is not set correctly on the navigation bar.

# Code I found most useful
When I implemented the edit functionality, I did not want to have to enter data
into all the form fields, and I did not want the user to be able to update
records with empty fields.  Via stackoverflow, I discovered a jQuery method
that allowed me to easily loop over entries in my form data object, and remove
those that had a value that was empty or null.

```javascript
// remove empty and null entries
$.each(data, function (key, value) {
  if (value === '' || value === null) {
    delete data[key]
  }
})
```

# Wireframes and User Stories
## Wireframes
![Wireframe 1](/docs/images/wireframe_1.jpg)

![Wireframe 2](/docs/images/wireframe_2.jpg)

## User Stories
- As a user, I want to Add, Delete, Modify Recipes so I can find them easily
- As a user, I want to know how many people a recipe serves
- As a user, I want to rate my recipes so I can track which ones I like best
- As a user, I want to find recipes by type:  Appetizer, Breakfast, Entree, Dessert
- As a user, I want to find recipes that use a certain ingredient so I can use
what I have on hand.

## Whew, time to get some sleep
![Get Some Sleep](/docs/images/get-some-sleep.jpg)
