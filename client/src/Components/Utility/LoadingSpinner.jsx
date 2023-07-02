import ClipLoader from "react-spinners/ClipLoader";

function LoadingSpinner() {
  return (
    <div className="loader">
      <ClipLoader size={50} />
    </div>
  );
}

export default LoadingSpinner;
