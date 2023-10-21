import { ClassicPreset, GetSchemes } from 'rete';
import type { NodeA } from './nodes/NodeA';
import type { NodeB } from './nodes/NodeB';

export type AnyNode = NodeA | NodeB;

class Connection<
  A extends AnyNode,
  B extends AnyNode,
> extends ClassicPreset.Connection<A, B> {}

export type Schemes = GetSchemes<AnyNode, Connection<AnyNode, AnyNode>>;
