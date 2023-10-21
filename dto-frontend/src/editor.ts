import { createRoot } from 'react-dom/client';
import { NodeEditor, ClassicPreset } from 'rete';
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin';
import {
  ConnectionPlugin,
  Presets as ConnectionPresets,
} from 'rete-connection-plugin';
import { ReactPlugin, Presets, ReactArea2D } from 'rete-react-plugin';
import {
  AutoArrangePlugin,
  Presets as ArrangePresets,
} from 'rete-auto-arrange-plugin';
import { ContextMenuExtra } from 'rete-context-menu-plugin';
import { StyledNode } from './StyledNode';
import { Schemes } from './shared-types';
import { NodeA } from './nodes/NodeA';
import { NodeB } from './nodes/NodeB';
import { contextMenu } from './context-menu';

type AreaExtra = ReactArea2D<Schemes> | ContextMenuExtra;

export async function createEditor(container: HTMLElement) {
  const socket = new ClassicPreset.Socket('socket');

  const editor = new NodeEditor<Schemes>();
  const area = new AreaPlugin<Schemes, AreaExtra>(container);
  const connection = new ConnectionPlugin<Schemes, AreaExtra>();
  const render = new ReactPlugin<Schemes, AreaExtra>({ createRoot });
  const arrange = new AutoArrangePlugin<Schemes>();
  // const contextMenu = new ContextMenuPlugin<Schemes>({
  //   items: ContextMenuPresets.classic.setup([
  //     ['NodeA', () => new NodeA(socket)],
  //     ['Extra', [['NodeB', () => new NodeB(socket)]]],
  //   ]),
  // });

  area.use(contextMenu);

  AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
    accumulating: AreaExtensions.accumulateOnCtrl(),
  });

  render.addPreset(Presets.contextMenu.setup());
  render.addPreset(
    Presets.classic.setup({
      customize: {
        node() {
          return StyledNode;
        },
      },
    }),
  );

  connection.addPreset(ConnectionPresets.classic.setup());

  arrange.addPreset(ArrangePresets.classic.setup());

  editor.use(area);
  area.use(connection);
  area.use(render);
  area.use(arrange);

  AreaExtensions.simpleNodesOrder(area);

  const a = new NodeA(socket);
  const b = new NodeB(socket);

  await editor.addNode(a);
  await editor.addNode(b);

  await editor.addConnection(new ClassicPreset.Connection(a, 'a', b, 'b'));

  await arrange.layout();
  AreaExtensions.zoomAt(area, editor.getNodes());

  return {
    destroy: () => area.destroy(),
  };
}
