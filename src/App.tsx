import { useEffect, useRef } from 'react'
import styles from './App.module.scss'
import Loader from './components/Loader';
import NowOnView from './components/NowOnView';
import ThemeContext from './context/Theme';

function App() {

  return (
    <ThemeContext.Provider value={0}>
      <div className={styles.App}>
        <Loader />
        <main className={styles.mainContent}>
          <NowOnView />
        </main>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
