import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { register, handleSubmit } = useForm();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch({type: "a"})
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="header">
      <input
        {...register("text")}
        placeholder="New Todos???"
        className="name"
      />
      <input type="submit" value="Create" style={{ cursor: "pointer" }} />
    </form>
  );
};

export default Header;
