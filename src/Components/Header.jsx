import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Header = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (data.text.trim() === "") {
      alert("Invalid text");
      return;
    }
    dispatch({ type: "todos/added", payload: data });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="header">
      <div className="input-container">
        <input
          {...register("text")}
          placeholder="New Todos???"
          className="name"
        />
        <span className="suffix">Enter</span>
      </div>
    </form>
  );
};

export default Header;
