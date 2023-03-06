import Section from "../../../common/Section";
import Container from "../../../common/Container";
import { useParams } from "react-router";

function TaskPage() {
    const { id } = useParams();

    return (
        <Container>
            <h1>Szczegóły zadania</h1>
            <Section
                title={id}
                body={<>Coś tam</>}
            />
        </Container>
    );
}

export default TaskPage;
