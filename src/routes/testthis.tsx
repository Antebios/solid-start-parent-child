// import { Title } from "solid-start";
// import TestChild from "~/routes/testthis";
// import { Outlet } from "solid-start";

// export default function TestThis() {

//   return (
//     <main>
//       <Title>Test This</Title>
//       <h1>Parent Page!</h1>
//       <Outlet />
//     </main>
//   );
// }

// ========================================

// import TestChild from "~/routes/testthis";
import { Title } from "solid-start";
import { lazy } from "solid-js";
// const TestChild = lazy(() => import("./testthis/child"));
//const HelloWord = lazy(() => import("./testthis/helloworld"));
import HelloWord from "./components/helloworld";

export default function TestThis() {
  return (
    <main>
      <Title>Test This</Title>
      <h1>Parent Page!</h1>
      <HelloWord />
    </main>
  );
}
