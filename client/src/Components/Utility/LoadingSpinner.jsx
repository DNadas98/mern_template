import ClipLoader from "react-spinners/ClipLoader";

function LoadingSpinner() {
  return (
    <div className="LoadingSpinner">
      <ClipLoader color="aliceblue" size={50} />
    </div>
  );
}

export default LoadingSpinner;
