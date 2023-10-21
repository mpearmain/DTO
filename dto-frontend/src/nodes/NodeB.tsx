import { ClassicPreset } from 'rete';

export type NodeBType = InstanceType<typeof NodeB>;

export class NodeB extends ClassicPreset.Node {
  height = 140;
  width = 200;

  constructor(socket: ClassicPreset.Socket) {
    super('NodeB');

    this.addInput('q', new ClassicPreset.Input(socket));
    this.addControl('b', new ClassicPreset.InputControl('text', {}));
    this.addInput('b', new ClassicPreset.Input(socket));
  }
}
