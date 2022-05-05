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
    <div>
      {data?.map((bike, key) => {
        return (
          <div key={key}>
            <img src={`http://localhost:3000/pages/images/${bike.images[0]}`} alt="" />
            <h2>{bike.model}</h2>
            <p>£{bike.price}</p>
          </div>
        )
      })}
    </div>
  )
}
