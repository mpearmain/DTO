import Rete from 'rete';
import ConnectionPlugin from 'rete-connection-plugin';
import AlightRenderPlugin from 'rete-alight-render-plugin';


// Initialize Rete
const container = document.querySelector('#rete');
const editor = new Rete.NodeEditor('demo@0.1.0', container);
editor.use(ConnectionPlugin.default);
editor.use(AlightRenderPlugin);

// Define the socket
const dataSocket = new Rete.Socket('DataSocket');

// Define the DataComponent
class DataComponent extends Rete.Component {
    constructor(){
        super("Data");
    }

    builder(node) {
        let out1 = new Rete.Output('out', "Output", dataSocket);
        node.addOutput(out1);
    }

    worker() {}
}

// Define the InfrastructureComponent
class InfrastructureComponent extends Rete.Component {
    constructor(){
        super("Infrastructure");
    }

    builder(node) {
        let out1 = new Rete.Output('out', "Output", dataSocket);
        node.addOutput(out1);
    }

    worker() {}
}

// Define the ImplementationComponent
class ImplementationComponent extends Rete.Component {
    constructor(){
        super("Implementation");
    }

    builder(node) {
        let out1 = new Rete.Output('out', "Output", dataSocket);
        node.addOutput(out1);
    }

    worker() {}
}

// Define the SpecificationComponent
class SpecificationComponent extends Rete.Component {
    constructor(){
        super("Specification");
    }

    builder(node) {
        let out1 = new Rete.Output('out', "Output", dataSocket);
        node.addOutput(out1);
    }

    worker() {}
}

// Define the MainComponent that connects the sub-components
class MainComponent extends Rete.Component {
    constructor(){
        super("MainComponent");
    }

    builder(node) {
        let dataInput = new Rete.Input('dataIn', "Data", dataSocket);
        let infraInput = new Rete.Input('infraIn', "Infrastructure", dataSocket);
        let implInput = new Rete.Input('implIn', "Implementation", dataSocket);
        let specInput = new Rete.Input('specIn', "Specification", dataSocket);
        node.addInput(dataInput).addInput(infraInput).addInput(implInput).addInput(specInput);
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
    editor.connect(dataNode.outputs.get('out'), mainNode.inputs.get('dataIn'));
    editor.connect(infrastructureNode.outputs.get('out'), mainNode.inputs.get('infraIn'));
    editor.connect(implementationNode.outputs.get('out'), mainNode.inputs.get('implIn'));
    editor.connect(specificationNode.outputs.get('out'), mainNode.inputs.get('specIn'));

    editor.trigger('process');
})();
