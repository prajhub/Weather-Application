import React from 'react'

const Information = ({info}) => {
  return (
    <div>
        <div className='flex justify-between flex-col  max-w-[900px] m-auto p-3  h-[600px]'>
            <div  className='pt-6'>
                <p className='text-white text-2xl'>{info.name}</p>
                <h1 className='text-9xl text-white'>{info.main.temp}</h1>
            </div>
              <div className='flex justify-between items-center p-3 border h-[200px] text-white  rounded-md border-black bg-[rgb(0,0,0,0.3)]'>
                  <ul>
                    <li>
                      <p className='text-2xl'>Feels Like</p>
                    </li>
                    <li className='text-md text-center pt-2'>
                        {info.main.feels_like}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p className='text-2xl'>Humidity</p>
                    </li>
                    <li className='text-md text-center pt-2'>
                        {info.main.humidity}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p className='text-2xl'>Weather</p>
                    </li>
                    <li className='text-md text-center pt-2'>
                        {info.weather[0].main}
                    </li>
                  </ul>
              </div>
        </div>
    </div>
  )
}

export default Information