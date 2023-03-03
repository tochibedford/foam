import { useEffect, useRef } from 'react'
import styles from './App.module.scss'
import Loader from './components/Loader';
import NowOnView from './components/NowOnView';

function App() {

  return (
    <div className={styles.App}>
      <Loader />
      <main className={styles.mainContent}>
        <NowOnView />
      </main>
    </div>
  )
}

export default App
