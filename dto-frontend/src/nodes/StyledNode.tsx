import { Presets } from 'rete-react-plugin';
import { css } from 'styled-components';

const myStyles = css<{ selected?: boolean }>`
  background: white;
  ${(props) =>
    props.selected &&
    css`
      border-color: red;
    `}

  .title {
    color: black;
  }
`;

type NodeProps = React.ComponentProps<typeof Presets.classic.Node>;

export function StyledNode(props: NodeProps) {
  return <Presets.classic.Node styles={() => myStyles} {...props} />;
}
