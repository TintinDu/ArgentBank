// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { userService } from "../../services";
// import { useStore } from "react-redux";
import { Hero } from "../../components/Hero";
import { Features } from "../../components/Features";
import { store } from "../../redux/store";

export function Homepage() {
  const toto = store.getState();
  console.log(toto);

  return (
    <main>
      <Hero />
      {/* {store.getState()} */}
      <Features />
    </main>
  );
}
