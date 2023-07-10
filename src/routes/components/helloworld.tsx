import { For, Show } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import db from "~/data/db";

export function routeData() {
  return createServerData$(
    async () => {
      const data = await db.getAllProducts();
      return data;
    }
  )
};

export default function HelloWord() {
  const data = useRouteData<typeof routeData>();

  return (
    <main>
      <h3>Hello World - Child Page!</h3>

      <br />
      <Show when={!data()}>
        <p>Loading...</p>
      </Show>
      <br />

    </main>
  );
}
