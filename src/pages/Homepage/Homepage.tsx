import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { userService } from "../../services";
import { useStore } from "react-redux";
import { Hero } from "../../components/Hero";
import { Features } from "../../components/Features";

export function Homepage() {
  const toto = useParams();
  const store = useStore();
  console.log(store);
  console.log(toto);
  useEffect(() => {
    async () => {
      const data = await userService.getUserData("662260ad79f48f3d3b3e259c");
      console.log(data);
    };
  }, []);

  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
