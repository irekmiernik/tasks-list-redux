import { Header } from "../../common/Header";
import { Section } from "../../common/Section";

export const AuthorPage = () => {

  return (
    <main>
      <Header title="" />
      <Section title="Ireneusz Miernik" body={
        <>
          <p>
            Zanim powiem parę słów o sobie chciałbym zauważyć, że nie tylko ja jestem autorem tej aplikacji, ponieważ przez cały czas jej powstawania byłem wspierany przez zespół YouCode. Bez prezentacji, do których miałem dostęp na stronie YouCode, aplikacja ta nigdy by nie powstała.
          </p>
          <p>
            Także nie do końca jestem początkującym programistą, ponieważ w latach 80-tych i 90-tych pracowałem kilka lat jako zawodowy programista, z tym, że praca ta wyglądała zupełnie inaczej niż współcześnie. Początkowo pisałem w języku PLAN (assembler na komputer ODRA), następnie w Cobolu, Fortranie, Pascalu. Szczególnie zapamiętałem pisanie programów w PLANie, w którym jedna napisana przeze mnie instrukcja odpowiadała jednej komórce w pamięci RAM (celowo użyłe słowa komórka, nie bajt, ponieważ były to 24 bity, gdyż komputer ten miał trochę inną architekturę niż komputery współczesne).
          </p>
          <p>
            W okresie późniejszym przestałem pracować jako programista a przeszedłem do administracji, z tym że ciągle w firmach związanych z informatyką. Niedawno postanowiłem spróbować sił w programowaniu stąd napisałem kilka krótkich aplikacji w ramach badań naukowych w językach R oraz Python a nawet Java. I chyba z rozpędu zapisałem się na kurs Frontend, firmy YouCode, do zakończenia którego pozostało mi bardzo niewiele, gdyż jest to w istocie moja ostatnia praca domowa.
          </p>
        </>
      } />
    </main>
  );
};