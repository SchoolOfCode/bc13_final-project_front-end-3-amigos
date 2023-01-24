import React, {useState, useEffect} from 'react'

function ThemeSwitcher({stateChanger}) {
    const [hue, setHue] = useState('340')
    const [theme, setTheme] = useState('light')
    const [isColorPicking, setIsColorPicking] = useState(false)

/* Easiest way to handle a change in a piece of state in UI with React is by using a useEffect */
useEffect(() => {
    document.documentElement.setAttribute('color-scheme', theme)
    
}, [theme]);

useEffect(() => {
    document.documentElement.style.setProperty('--Themer-hue', hue)
}, [hue]);

    const moonIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
  
  const swatchIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
</svg>
const sunIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>

const xMarkIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

const handleClick= ()=>{
    setTheme(theme=== 'light' ? 'dark' : 'light')
    theme === 'light'?stateChanger(false):stateChanger(true)

}

  return (
    <aside className='Themer-wrapper' >
    {
        isColorPicking
        ? (
            <>
                <button
                className='Themer-btns'
                aria-label="Close color picking mode"
                onClick={()=> {setIsColorPicking(false)}}
                >{xMarkIcon}</button>
                    <input 
                    className='Themer-picker'
                    type='range'
                    min='0'
                    max='360'
                    aria-label='Change color theme slider'
                    value={hue}
                    onInput={(e) => setHue(e.target.value)}
                     />
                
            </>
        )
        : (
            <div className='Themer-btns'>
                <button
                aria-label={`Change theme to ${theme === "light"? "dark": "light"} mode`}
                role='switch'
                onClick={handleClick}>
                {theme === 'dark'? sunIcon : moonIcon}</button>
                <button
                aria-label='Enable color picking mode'
                onClick={()=>{setIsColorPicking(true)}}
                >{swatchIcon}</button>
            </div>
        )
    }
    

    </aside>
  )
}

export default ThemeSwitcher