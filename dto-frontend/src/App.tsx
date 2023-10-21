import styled from 'styled-components';
import { createEditor } from './editor';
import { useRete } from 'rete-react-plugin';

const CanvasDiv = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default function App() {
  const [ref] = useRete(createEditor);

  return (
    <div className="App">
      <CanvasDiv ref={ref} />
    </div>
  );
}
