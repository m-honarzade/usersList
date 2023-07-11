import classes from "./UsersList.module.css";
import { useState } from "react";
import User from "./User";
import Button from "../UI/Button/Button";

const DUMMY_USERSLIST = [
  { id: "u1", name: "John" },
  { id: "u2", name: "Sara" },
  { id: "u3", name: "Michael" },
];

const UsersList = () => {
  const [showList, setShowList] = useState(true);
  const toggleUsersHandler = () => {
    setShowList((curState) => !curState);
  };
  const userList = (
    <ul>
      {DUMMY_USERSLIST.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );
  return (
    <div className={classes.list}>
      <Button onClick={toggleUsersHandler} disabled={false}>
        {showList ? "Hide" : "Show"} users
      </Button>
      {showList && userList}
    </div>
  );
};

export default UsersList;
