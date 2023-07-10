import { Title } from "solid-start";
import { lazy } from "solid-js";

//const TestChild = lazy(() => import("../components/child"));
import TestChild from "../components/child";

export default function ParentPage() {
  return (
    <main>
      <Title>Parent</Title>
      <h1>Parent Layout Page!</h1>
      <TestChild />
    </main>
  );
}
