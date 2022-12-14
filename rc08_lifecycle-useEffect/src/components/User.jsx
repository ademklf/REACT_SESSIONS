import { useState, useEffect } from "react";

const User = () => {
  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };
  useEffect(() => {
    getUser();
  }, []);

  console.log(user);
  const { name, dob, email, picture } = user;
  return (
    <div>
      <h1>
        {name?.first}
        {name?.last}
      </h1>
      <img src="{picture?.large}" alt="img" />
      <p>email</p>
      <h5>DOB</h5>
      <button className="btn btn-danger">Get User</button>
    </div>
  );
};

export default User;
