import "./AlertComponent.css";

function Alert(props) {
  return (
    <div class="alert alert-warning" role="alert">
      <p>{props.text}</p>
    </div>
  );
}

export default Alert;
