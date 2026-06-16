# React Two-Way Data Binding

A simple React app demonstrating **two-way data binding** using controlled components.

## What is Two-Way Data Binding?

In React, two-way data binding means the UI updates the state AND the state controls the UI. This is achieved using a **controlled input** — where the input's `value` is tied to a state variable, and `onChange` updates that state.

## How it works in this project

- `useState` holds the current value of the input (`title`)
- The `value` prop on the input is set to `title` (state → UI)
- The `onChange` handler updates `title` on every keystroke (UI → state)
- On form submit, the value is logged and the input is cleared by resetting state to `''`

## Concepts Covered

- `useState` hook
- Controlled components (`value` + `onChange`)
- Form submission with `e.preventDefault()`
- Resetting input after submit

## How to Run

```bash
npm install
npm start
```

