import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {

  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16 ">
      <h1 className="text-xl text-stone-700 font-semibold  mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>1
      {username === '' ? <CreateUser /> : <Button to="/menu" type="primary">Back to menu</Button>}
    </div>
  );
}

export default Home;
