var container = document.querySelector('#rete');
var editor = new Rete.NodeEditor('demo@0.1.0', container);
editor.use(Rete.ConnectionPlugin.default);
editor.use(Rete.AlbersPlugin.default);

var components = ['MainComponent', 'Data', 'Infrastructure', 'Implementation', 'Specification'];

components.forEach(name => {
    var component = new Rete.Component(name);

    component.builder(node => {
        var out1 = new Rete.Output('json', 'JSON', Rete.numSocket);
        node.addOutput(out1);
    });

    editor.register(component);
});

editor.on('process nodecreated noderemoved connectioncreated connectionremoved', async () => {
    await editor.trigger('process');
});

editor.view.resize();
editor.trigger('process');
