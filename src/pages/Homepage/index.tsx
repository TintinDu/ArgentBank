import { Hero } from "../../components/Hero";
import { Features } from "../../components/Features";
import { store } from "../../redux/store";

export function Homepage() {
  const state = store.getState();

  console.log(state);

  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}
