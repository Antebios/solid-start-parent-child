import { Title, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import db from "~/data/db";
import ProfileSettings  from "~/components/profileSettings";

export function routeData() {
  return createServerData$(
    async () => {
      const data = await db.getAllProducts();
      // console.debug('about.tsx ==> routeData ==> data: ', data);
      return data;
    }
  )
};

export default function About() {

  const data = useRouteData<typeof routeData>();

  return (
    <main>
      <Title>About</Title>
      <h1>About Page!</h1>
      <ProfileSettings data={data} />
    </main>
  );
}