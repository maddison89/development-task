import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState(false);

  const toggleActiveState = () => {
    setActive(!active);
  };

  useEffect(() => {
    let timer: number;
    if (active) {
      timer = setTimeout(() => {
        setActive(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <>
      <div
        role="button"
        className={`mainContainer ${active ? 'active' : ''}`}
        onClick={toggleActiveState}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleActiveState();
          }
        }}
        tabIndex={0}
        aria-label={`Container is ${active ? 'active' : 'inactive'}`}
      >
        <div className={`smallSquare ${active ? 'active' : ''}`}></div>
      </div>
    </>
  );
}

export default App;
