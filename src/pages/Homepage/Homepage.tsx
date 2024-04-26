import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { userService } from "../../services";

export function Homepage() {
  const toto = useParams();
  console.log(toto);
  useEffect(() => {
    async () => {
      const data = await userService.getUserData("662260ad79f48f3d3b3e259c");
      console.log(data);
    };
  }, []);

  return (
    <div>
      <p>Homepage</p>
    </div>
  );
}
