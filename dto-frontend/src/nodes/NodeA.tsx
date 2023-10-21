import { ClassicPreset } from 'rete';

export type NodeAType = InstanceType<typeof NodeA>;

export class NodeA extends ClassicPreset.Node {
  height = 140;
  width = 200;

  constructor(socket: ClassicPreset.Socket) {
    super('NodeA');

    this.addControl('a', new ClassicPreset.InputControl('text', {}));
    this.addOutput('a', new ClassicPreset.Output(socket));
  }
}
