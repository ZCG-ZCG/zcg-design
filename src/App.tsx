import React from 'react'
import { Button, ButtonSize, ButtonType } from './components/Button/button'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button>666</Button>
        <Button btnType={ButtonType.Dashed} size={ButtonSize.small}>小按钮</Button>
        <Button
          btnType={ButtonType.Link}
          href='https://www.baidu.com/'
        >baidu</Button>
      </header>
    </div>
  )
}

export default App
