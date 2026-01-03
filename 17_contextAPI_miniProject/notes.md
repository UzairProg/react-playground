# Context API mini notes

Goal: keep a single theme state (light/dark) in one place and let any component read/update it without prop drilling.

## What is Context?
- A built-in way to share data (theme, user, locale) with nested components without passing props at every level.
- Consists of a `Context` object, a `Provider` component that supplies the value, and consumers that read it via `useContext`.

## How this project uses it
1) Create the context and provider in [src/context/ThemeContext.jsx](src/context/ThemeContext.jsx):

```jsx
import { createContext, useState } from 'react'

export const ThemeContextData = createContext()

function ThemeContext({ children }) {
	const [theme, setTheme] = useState('light')

	return (
		<ThemeContextData.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContextData.Provider>
	)
}

export default ThemeContext
```

2) Wrap the app with the provider in [src/main.jsx](src/main.jsx):

```jsx
import ThemeContext from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
	<ThemeContext>
		<App />
	</ThemeContext>,
)
```

3) Consume it anywhere with `useContext` (example from [src/App.jsx](src/App.jsx)):

```jsx
import { useContext } from 'react'
import { ThemeContextData } from './context/ThemeContext.jsx'

const data = useContext(ThemeContextData)

// Toggle the theme
data.setTheme(data.theme === 'light' ? 'dark' : 'light')
```

## Quick mental model
- Provider = power outlet; Context value = electricity; Consumers = devices plugged in.
- Change the value in the provider, and every consumer sees the new value immediately.

## Try it
1) Start the app: `npm install` then `npm run dev` inside this folder.
2) Click "Toggle Theme" in the UI; the context value flips between `light` and `dark`.

## Tips
- Keep context values minimal (only what needs to be shared). Consider `useMemo` if the value object gets larger to avoid extra renders.
- Components reading the context must be inside the provider, otherwise `useContext` returns `undefined`.
