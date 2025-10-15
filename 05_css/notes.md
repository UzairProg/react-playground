# CSS in React: Normal CSS vs CSS Modules

**Normal CSS:**
- Styles are **global**.
- Class `.title` affects all components using it.
- Can cause style conflicts.
- Example:

```jsx
import './App.css';
<div className="title">Hello</div>
```

**App.css:**

```css
.title {
  color: red;
}
```

**CSS Modules:**
- Styles are **locally scoped**.
- Class `styles.title` is unique.
- Prevents conflicts.
- Example:

```jsx
import styles from './App.module.css';
<div className={styles.title}>Hello</div>
```

**App.module.css:**

```css
.title {
  color: blue;
}
```

**Summary:**
- Normal CSS: global scope, risk of conflicts.
- CSS Modules: scoped locally, safe to reuse class names.