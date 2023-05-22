import { Container } from "./components/styled/Container.styled";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import StyledGlobal from "./components/styled/Global.styled";


const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledGlobal />
      <Header />
      <Container>
        <h1> Hello World </h1>
      </Container>

    </ThemeProvider>

  );
}

export default App;
