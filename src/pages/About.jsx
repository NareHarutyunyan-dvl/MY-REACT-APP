import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import { OrbitProgress } from "react-loading-indicators";

function About() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(users, "users");
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <OrbitProgress color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <div className="itemWrapper">
        {users.map((user) => (
          <div key={user.id} className="itemWrapperDis">
            <img src={user.image} alt="img" />
            <p>
              {user.firstName}
              {user.lastName}
            </p>
            <p>Age {user.age}</p>
            <p>Address{user.address.city}</p>
            <p>Phone {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default About;
