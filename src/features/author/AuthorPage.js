import { Header } from "../../common/Header";
import { Section } from "../../common/Section";

export const AuthorPage = () => {

  return (
    <main>
      <Header title="O autorze" />
      <Section title="Ireneusz Miernik" body={
        <>
          <p>
            The global state of your application is stored as an object inside a single store. Any given piece of data should only exist in one location, rather than being duplicated in many places.
          </p>
          <p>This makes it easier to debug and inspect your app's state as things change, as well as centralizing logic that needs to interact with the entire application.
          </p>
        </>
      } />
    </main>
  );
};