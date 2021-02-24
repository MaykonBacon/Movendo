import { ChallengesProvider, ChallengesContext } from '../contexts/ChallengesContext'
import { useState } from 'react'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp