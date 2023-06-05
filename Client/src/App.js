import axios from "axios";
import { useState } from "react";
import "./Css/App.css";

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
    try {
      const res = await axios.post(`${baseURL}/api/1/blockchain`, data);
      console.log(res.data);
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error.response.data);
      } else {
        console.log(error.response.status);
      }
    }
  };

  return (
    <div>
      <h1>Blockchain Client</h1>

      <form onSubmit={handleSubmit}>
        <input className="inputBox" type="text" placeholder="data" />
        <button className="addButton" type="submit">
          Add Block
        </button>
      </form>
      <button className="getButton" onClick={axiosGet}>
        Get data from chain
      </button>
      <div className="outputBox">
        {data.map((item, index) => (
          <div key={index}>
            <p>{item.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
