import { For, Show } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import db from "~/data/db";

function getData() {
  return createServerData$(
    async () => {
      const data = await db.getAllProducts();
      return data;
    }
  )
};


export default function TestChild()  {



  //const data = useRouteData<typeof routeData>();
  const data = getData();

  return (
    <div>
      Test Child Page
      <br />
      <Show when={!data()}>
        <p>Loading...</p>
      </Show>
      <br />

      <Show when={data()}>
        <For each={data()}>
          {(item) => (
            <div>
              <p>{item.title}</p>
            </div>
          )}
        </For>
      </Show>

    </div>
  );
}
