# Udacity - Landing Page Project

## Interface and Architecture
  - The starter code has some HTML and CSS to render a static web page without responding to user. 
  - There should be at least 4 sections added to the page
  - It's required to add some javascript to the page to be a little interactive. (We will talk more about page behavior in the next section)
  - The interactive web page should be usable across modern devices such as desktop, tablet, and mobile-phone browsers. 
  - The navigation bar has to be responsive, too.
***

## The Page Behavior
  - The navigation is built dynamically as an unordered list. Start with an empty `ul` and dynamically build navigation using `appendChild()`, `innerHTML`, and `createDocumentFragment`.
  - While scrolling, the shown section should be highlighted. In other words, add the class `your-acive-section` to the viewed section in the viewport. This is done using the `.getBoundingClientRect()`.
  - If you click on an item from the navigation menu, it should scroll (smoothly) to the target section. This can be achieved using any of the javascript scrolling functions: `scroll()`, `scrollTo()`, or `scrollIntoView()`. Notice that the event it self is of type `'click'`.
***

## Suggested Additional Features
  - Add an active state to navigation items when a section is in the viewport.
  - Hide fixed navigation bar while not scrolling (it should still be present on page load).
    > Hint: setTimeout can be used to check when the user is no longer scrolling.
  - Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
  - Update/change the design/content.
  - Make sections collapsible.
