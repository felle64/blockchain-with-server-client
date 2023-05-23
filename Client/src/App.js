import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const axiosGet = async () => {
    const baseURL = "http://localhost:3001";

    await axios
      .get(`${baseURL}/api/1/blockchain`)
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseURL = "http://localhost:3001";
    const data = {
      data: e.target[0].value,
    };
    await axios.post(`${baseURL}/api/1/blockchain`, data).then((response) => {
      console.log(response.data);
    });
    axiosGet();
  };

  return (
    <div>
      <h1>Blockchain Client</h1>
      <button onClick={axiosGet}>Get data from chain</button>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <p>{item.data}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="data" />
        <button type="submit">Add Block</button>
      </form>
    </div>
  );
};
export default App;
