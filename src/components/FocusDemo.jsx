import { useEffect, useRef, useState } from 'react'

// FocusDemo: demonstrates useRef to interact with the real DOM element.
// - inputRef.current points to the <input>
// - .focus() does NOT re-render the component

export default function FocusDemo() {
  const inputRef = useRef(null)
  const [autoFocus, setAutoFocus] = useState(true)

  useEffect(() => {
    // We must wait until the DOM is painted. useEffect runs after the render.
    if (autoFocus) {
      inputRef.current?.focus()
    }
  }, [autoFocus])

  function focusNow() {
    inputRef.current?.focus()
  }

  return (
    <section aria-labelledby="focus-title" className="bg-white border rounded-xl p-5 space-y-4">
      <h3 id="focus-title" className="font-bold text-lg">
        useRef (posar focus)
      </h3>

      <p className="text-sm text-textBlack/80">
        useRef serveix per guardar una referència (no provoca re-render).
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm font-semibold" htmlFor="focus-input">
          Cercador
        </label>

        <input
          id="focus-input"
          ref={inputRef}
          className="border rounded-md px-3 py-2 w-72"
          placeholder="Escriu..."
          aria-label="Input de prova per focus"
        />

        <button
          type="button"
          onClick={focusNow}
          className="px-4 py-2 rounded-lg bg-primaryGreen text-white text-sm font-semibold hover:opacity-90"
        >
          Posar focus
        </button>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={autoFocus}
            onChange={(e) => setAutoFocus(e.target.checked)}
            aria-label="Activar focus automàtic"
          />
          Auto-focus
        </label>
      </div>

      <p className="text-xs text-textBlack/70">
        Prova-ho amb el teclat: TAB per navegar i el botó per fer focus.
      </p>
    </section>
  )
}
