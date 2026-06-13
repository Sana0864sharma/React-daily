# Day 9: useState Hook

## What I Learned Today

- `useState` lets a component have its own memory (state) that persists between renders
- Updating state triggers React to re-render the component with the new value
- State can hold different data types: numbers, strings, and even objects
- Two ways to update state:
  - Directly setting a new value: `setnum(10)`
  - Using a function with the previous value: `setnum(prev => ...)` — safer when the new value depends on the old one
- When state is an object, you must spread the previous state (`{...prev}`) to keep existing properties, otherwise the rest of the object is lost

## Code Overview

### `App.jsx`
- Two separate states: `num` (number) and `user` (string)
- `changekro()` updates both states together with fixed values

```jsx
const [num, Setnum] = useState(0)
const [user, setuser] = useState('Anusha')

function changekro() {
  Setnum(10)
  setuser('Nabin')
}
```

### `Arrayuse.jsx`
- State is an object: `{ user: 'Anusha', age: 30 }`
- Used the functional update form to update only `user` while keeping `age` unchanged

```jsx
const [num, setnum] = useState({ user: 'Anusha', age: 30 })

const change = () => {
  setnum(prev => ({ ...prev, user: 'punam' }))
}
```

- Why spread (`...prev`) is needed: without it, calling `setnum({ user: 'punam' })` would replace the entire object and `age` would be lost

### `Counter.jsx`
- Classic counter example using `useState`
- Three buttons: increase by 1, decrease by 1, jump by 5
- Each button has its own `id` for unique styling (`green`, `red`, `fhutt`)

```jsx
function increasekro() {
  setnum(num + 1)
}
function decreasekro() {
  setnum(num - 1)
}
function jumpby5() {
  setnum(num + 5)
}
```

## Key Concepts

| Concept | Explanation |
|---|---|
| `useState(initialValue)` | Creates a state variable and a function to update it |
| State update triggers re-render | Component re-renders automatically when state changes |
| Functional update `setX(prev => ...)` | Safer way to update state based on the previous value |
| Spread operator `{...prev}` | Copies existing object properties before overriding specific ones |

## Next Steps
- Combine `useState` with form handling to build controlled inputs
- Explore `useEffect` to run code in response to state changes