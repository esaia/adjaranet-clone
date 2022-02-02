import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "../../axios";

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/634649?api_key=26cedb780e2fe93c9340b36dac2c268c&language=en-US"
  );
  const data = await res.json();

  return {
    props: {
      todos: data,
    },
  };
}

function Test(props) {
  //   const [movies, setMovie] = useState([]);
  console.log(props);
  return (
    <div style={{ paddingTop: "60px", background: "red" }}>
      <h1>this is test page</h1>
    </div>
  );
}

export default withRouter(Test);

// export default Test;
