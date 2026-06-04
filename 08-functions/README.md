# Day 8 — Functions & Events in React

Learning how to handle events and pass functions in React.

---

## What I Learned

- How event handlers work in React: `onClick`, `onMouseEnter`, `onChange`, `onWheel`
- Difference between passing a function vs calling it:
  - ✅ `onClick={handleClick}` — runs on click
  - ❌ `onClick={handleClick()}` — runs immediately on render
- How to pass arguments through events using arrow functions
- All JS logic (functions, variables) goes **above** the `return` in a component
- `onChange` gives access to typed input via `event.target.value`
- `onWheel` gives scroll delta via `event.deltaY`

---

## Code Examples

### Button click
```jsx
function handleClick() {
  console.log('clicked!')
}
<button onClick={handleClick}>Click me</button>
```

### Input change
```jsx
<input onChange={(e) => console.log(e.target.value)} type="text" />
```

### Scroll tracking with onWheel
```jsx
function onscrolling(val) {
  console.log('scrolling at', val)
}

<div onWheel={(e) => onscrolling(e.deltaY)} className="page1"></div>
```

---

## Tech Stack
- React 18
- Vite