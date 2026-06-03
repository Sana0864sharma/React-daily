# Day 7 — UI Design Project (In Progress)

## What I built today

Started building a real-world UI design project from scratch using React + Tailwind CSS.

### Layout structure

```
App
├── Section1
│   ├── Navbar
│   ├── Pagecontent
│   │   ├── Leftcontent (hero text + arrow icon)
│   │   └── Rightcontent
│   └── Arrow (Lucide icon component)
└── Section2
```

### Progress

- [x] Set up project structure with Vite + React
- [x] Built `Navbar` with two buttons (Target Audience + Digital Banking Platform)
- [x] Built `Section1` layout using `flex flex-col h-screen`
- [x] Built `Pagecontent` with side-by-side left and right panels using `flex`
- [x] Built `Leftcontent` with hero text (Prospective customer Segmentation) and lorem ipsum
- [x] Added `ArrowUpRight` icon from `lucide-react` with custom size
- [x] Fixed layout overflow issues using `flex-1` instead of `h-[90vh]`
- [ ] Rightcontent — in progress
- [ ] Section2 — in progress

### Key concepts learned today

- Difference between `w-full` vs `w-screen` and when to use each
- Difference between `h-screen`, `h-full`, `min-h-screen` and `h-auto`
- How `flex`, `flex-row`, `flex-col` work and when to use them
- Why `h-full` requires the parent to have a defined height
- Using `flex-1` to fill remaining space instead of hardcoding `vh` values
- Lucide React icons use `size={number}` prop, not Tailwind `text-*` classes
- `class` vs `className` in React (was silently breaking styles!)

### Tech stack

- React (Vite)
- Tailwind CSS
- Lucide React (icons)

---

*Work in progress — will complete tomorrow*

# Day 7 — UI Design Project (Completed)

## What I built

A real-world UI design project from scratch using React + Tailwind CSS — a scrollable customer segmentation page for a digital banking platform.

### Layout structure

```
App
├── Section1
│   ├── Navbar
│   ├── Pagecontent
│   │   ├── Leftcontent (hero text + arrow icon)
│   │   └── Rightcontent (scrollable cards)
│   │       └── RightCard (×3 — Satisfied, Underserved, Underbanked)
│   └── Arrow (Lucide icon component)
└── Section2
```

### Progress

- [x] Set up project structure with Vite + React
- [x] Built `Navbar` with two buttons (Target Audience + Digital Banking Platform)
- [x] Built `Section1` layout using `flex flex-col h-screen`
- [x] Built `Pagecontent` with side-by-side left and right panels using `flex`
- [x] Built `Leftcontent` with hero text (Prospective customer Segmentation) and lorem ipsum
- [x] Added `ArrowUpRight` icon from `lucide-react` with custom size
- [x] Fixed layout overflow issues using `flex-1` instead of `h-[90vh]`
- [x] Built `Rightcontent` — horizontal scrollable card container
- [x] Built `RightCard` — image card with number badge, intro text, tag + arrow button
- [x] Passed user data (img, tag, intro) via props drilling from `App` → `Rightcontent` → `RightCard`
- [x] Hidden scrollbar using `::-webkit-scrollbar` and `scrollbar-width: none`
- [ ] Section2 — in progress

### Key concepts learned today

- Difference between `w-full` vs `w-screen` and when to use each
- Difference between `h-screen`, `h-full`, `min-h-screen` and `h-auto`
- How `flex`, `flex-row`, `flex-col` work and when to use them
- Why `h-full` requires the parent to have a defined height
- Using `flex-1` to fill remaining space instead of hardcoding `vh` values
- Lucide React icons use `size={number}` prop, not Tailwind `text-*` classes
- `class` vs `className` in React (was silently breaking styles!)
- How `position: relative` + `position: absolute` work together for card badges
- Props drilling pattern — passing data arrays down multiple component levels
- `overflow-auto` + hidden scrollbar for clean horizontal scroll UX
- Always add `key` prop when using `.map()` in React
- CSS selector difference: `#id::-webkit-scrollbar` vs `#id ::-webkit-scrollbar` (space matters!)

### Tech stack

- React (Vite)
- Tailwind CSS
- Lucide React (icons)

---

*Section2 coming next*
