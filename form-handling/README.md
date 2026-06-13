# Day 9: Form Handling in React

## What I Learned Today

- How to handle form submissions in React using the `onSubmit` event
- Why `e.preventDefault()` is important to stop the default page reload on form submit
- Basic structure of a controlled form setup (input + button inside a `<form>`)
- How to pass and call event handler functions from JSX

## Code Overview

### `App.jsx`
- Created a simple form with one input field and a submit button
- Defined a `submithandler` function that:
  - Calls `e.preventDefault()` to stop the default form submission behavior (page refresh)
  - Logs `'form submitted'` to the console
- Attached the handler to the form using `onSubmit={(e) => { submithandler(e) }}`

```jsx
const submithandler = (e) => {
  e.preventDefault()
  console.log('form submitted')
}
```

### Key Concepts

| Concept | Explanation |
|---|---|
| `onSubmit` | Event triggered when a form is submitted |
| `e.preventDefault()` | Prevents the browser's default action (page reload) |
| Event handler function | Custom function that runs in response to an event |

## Styling
- Added basic CSS reset (`margin`, `padding`, `box-sizing`)
- Styled `input` and `button` with padding, margin, and larger font size for better usability

