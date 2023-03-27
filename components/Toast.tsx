export default const Toast = ({ message, type }) => {
  return (
    <div className={`toast toast-${type}`}>
      <p>{message}</p>
    </div>
  );
};