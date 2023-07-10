import { For, Show, Resource } from "solid-js";
import { Product } from "~/types";

export default function ProfileSettings(props: {data: Resource<Product[] | undefined>})  {

  return (
    <main>
      Profile Page
      <br />
      {/* State : {data.state} */}
      <br />
      <Show when={!props.data()}>
        <p>Loading...</p>
      </Show>
      <br />
      {/* <Show when={data.loading}>
        <p>Loading still...</p>
      </Show> */}


      <Show when={props.data()}>
        <For each={props.data()}>
          {(item) => (
            <div>
              <p>{item.title}</p>
            </div>
          )}
        </For>
      </Show>

    </main>
  );
}
