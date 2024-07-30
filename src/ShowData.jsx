import React, { useEffect, useState } from 'react'

const ShowData = () => {
    const [data, setData] = useState(null);
    console.log(localStorage.getItem('formData'))

    useEffect(() => {
      const timer = setTimeout(() => {
        const storedData = localStorage.getItem('formData');
        setData(JSON.parse(storedData));
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div>
        {data ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.mobile}</td>
                <td>{data.address}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    );
  }

export default ShowData