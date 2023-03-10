import Container from "../../common/Container";
import Section from "../../common/Section";

const AuthorPage = () => (
  <Container>
    <h1>O autorze</h1>
    <Section
      title="Aneta Borowski"
      body={
        <>
          <p>
            Nazywam się <b>Aneta Borowski</b>. Pochodzę z Wrocławia, ale obecnie
            mieszkam w <em>Sandnes w Norwegii</em>. Z zawodu jestem specjaliską
            ds. Public Relations, jednak od lat nie pracowałam w tym fachu.
            Większą część życia spędziłam podróżując i pracując za granicą.
            Oprócz podróży uwielbiam czekoladę, zwierzęta (mam psiaka adapciaka
            Foresta) oraz ludzi. Kilka lat temu trenowałam Lacrosse, a przez
            ostatnie dwa lata swojej kariery byłam trenerką.
          </p>
        </>
      }
    />
  </Container>
);

export default AuthorPage;