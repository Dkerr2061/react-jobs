import { ClipLoader } from "react-spinners";

function Spinner({ loading }) {
  const override = {
    display: "block",
    margin: "100px",
  };
  return (
    <>
      <ClipLoader
        color="#4338ca"
        loading={loading}
        cssOverride={override}
        size={150}
      />
    </>
  );
}

export default Spinner;
