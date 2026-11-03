import React, { useState } from 'react'

const App = () => {
  const [bgColor, setBgColor] = useState('bg-green-500')

  const changeToRed = () => setBgColor('bg-red-500')
  const changeToYellow = () => setBgColor('bg-yellow-400')
  const changeToGreen = () => setBgColor('bg-green-500')

  const buttonStyle = 'rounded-lg px-4 py-2 text-white font-bold transition-all duration-300 hover:opacity-90'

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50'>

      <div className={`${bgColor} w-[130px] h-[130px] rounded-full border-4 border-gray-800 transition-colors duration-500`}></div>

      <div className='flex items-center justify-center gap-3 mt-3'>
        <button
          onClick={changeToRed}
          className={`${buttonStyle} bg-red-500 cursor-pointer`}
        >
          Красный
        </button>

        <button
          onClick={changeToYellow}
          className={`${buttonStyle} bg-yellow-400 cursor-pointer`}
        >
          Жёлтый
        </button>

        <button
          onClick={changeToGreen}
          className={`${buttonStyle} bg-green-500 cursor-pointer`}
        >
          Зелёный
        </button>
      </div>

    </div>
  )
}

export default App