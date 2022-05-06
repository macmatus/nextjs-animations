import { useState, useEffect } from 'react';

export default function Home() {
  const url = 'https://my-json-server.typicode.com/macmatus/nextjs-animations/bikes';
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-12 min-h-screen flex items-center content-center">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-12 lg:grid-cols-3 xl:gap-x-18">
        {data?.map((bike, key) => {
          return (
            <div className="group text-center flex flex-col shadow-2xl p-10 rounded-lg" key={key}>
              <img className="mb-12" src={bike.thumb} alt={`yamaha ${bike.model}`} />
              <h2 className="text-3xl font-extrabold mt-auto">{bike.model}</h2>
              <p className="text-xl font-semibold mt-1">£{bike.price}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
