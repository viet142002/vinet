import { createContext } from 'react';
const ScrollContext = createContext();

function ScrollProvider({ children }) {
  const handleScroll = () => {
    let lastScrollY = window.scrollY;
    console.log(window.scrollY);
    if (window.scrollY > lastScrollY) {
      console.log('SCroll down');
    } else {
      console.log('Scroll up');
    }
  };
  return (
    <ScrollContext.Provider value={handleScroll}>
      {children}
    </ScrollContext.Provider>
  );
}

export { ScrollContext, ScrollProvider };
