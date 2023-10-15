import Rete, { Input, Node, Output } from 'rete';
import ConnectionPlugin from 'rete-connection-plugin';
import AlightRenderPlugin from 'rete-alight-render-plugin';

// Initialize Rete
const container = document.querySelector('#rete') as HTMLElement;

if (!container) {
  throw new Error(
    'You dont have an element with the ID "rete" in your index.html file',
  );
}

const editor = new Rete.NodeEditor('demo@0.1.0', container);
editor.use(ConnectionPlugin);
editor.use(AlightRenderPlugin);

// Define the socket2
const dataSocket = new Rete.Socket('DataSocket');

// Define the DataComponent
class DataComponent extends Rete.Component {
  constructor() {
    super('Data');
  }

  async builder(node: Node) {
    const out1 = new Rete.Output('out', 'Output', dataSocket);
    node.addOutput(out1);
  }

  worker() {}
}

// Define the InfrastructureComponent
class InfrastructureComponent extends Rete.Component {
  constructor() {
    super('Infrastructure');
  }

  async builder(node: Node) {
    const out1 = new Rete.Output('out', 'Output', dataSocket);
    node.addOutput(out1);
  }

  worker() {}
}

// Define the ImplementationComponent
class ImplementationComponent extends Rete.Component {
  constructor() {
    super('Implementation');
  }

  async builder(node: Node) {
    const out1 = new Rete.Output('out', 'Output', dataSocket);
    node.addOutput(out1);
  }

  worker() {}
}

// Define the SpecificationComponent
class SpecificationComponent extends Rete.Component {
  constructor() {
    super('Specification');
  }

  async builder(node: Node) {
    const out1 = new Rete.Output('out', 'Output', dataSocket);
    node.addOutput(out1);
  }

  worker() {}
}

// Define the MainComponent that connects the sub-components
class MainComponent extends Rete.Component {
  constructor() {
    super('MainComponent');
  }

  async builder(node: Node) {
    const dataInput = new Rete.Input('dataIn', 'Data', dataSocket);
    const infraInput = new Rete.Input('infraIn', 'Infrastructure', dataSocket);
    const implInput = new Rete.Input('implIn', 'Implementation', dataSocket);
    const specInput = new Rete.Input('specIn', 'Specification', dataSocket);
    node
      .addInput(dataInput)
      .addInput(infraInput)
      .addInput(implInput)
      .addInput(specInput);
  }

  worker() {}
}

// Register the components
const dataComponent = new DataComponent();
const infrastructureComponent = new InfrastructureComponent();
const implementationComponent = new ImplementationComponent();
const specificationComponent = new SpecificationComponent();
const mainComponent = new MainComponent();

editor.register(dataComponent);
editor.register(infrastructureComponent);
editor.register(implementationComponent);
editor.register(specificationComponent);
editor.register(mainComponent);

// Add nodes to the editor
(async () => {
  const dataNode = await dataComponent.createNode();
  const infrastructureNode = await infrastructureComponent.createNode();
  const implementationNode = await implementationComponent.createNode();
  const specificationNode = await specificationComponent.createNode();
  const mainNode = await mainComponent.createNode();

  dataNode.position = [80, 100];
  infrastructureNode.position = [80, 250];
  implementationNode.position = [80, 400];
  specificationNode.position = [80, 550];
  mainNode.position = [400, 300];

  editor.addNode(dataNode);
  editor.addNode(infrastructureNode);
  editor.addNode(implementationNode);
  editor.addNode(specificationNode);
  editor.addNode(mainNode);

  // Connect nodes to the MainComponent
  editor.connect(
    dataNode.outputs.get('out') as Output,
    mainNode.inputs.get('dataIn') as Input,
  );
  editor.connect(
    infrastructureNode.outputs.get('out') as Output,
    mainNode.inputs.get('infraIn') as Input,
  );
  editor.connect(
    implementationNode.outputs.get('out') as Output,
    mainNode.inputs.get('implIn') as Input,
  );
  editor.connect(
    specificationNode.outputs.get('out') as Output,
    mainNode.inputs.get('specIn') as Input,
  );

  editor.trigger('process');
})();
