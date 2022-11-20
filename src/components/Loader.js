import spinner from "./spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading..." />
      <h1>Fetching data...</h1>
    </div>
  );
};

export default Loader;
