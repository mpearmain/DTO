// Fetch JSON schema from the specified path
async function fetchSchema(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
    }
    return await response.json();
}

// Fetch all required schemas
async function fetchAllSchemas() {
    return {
        dataSchema: await fetchSchema('./example/simple/pipeline/schemas/data_schema.json'),
        implementationSchema: await fetchSchema('./example/simple/pipeline/schemas/implementation_schema.json'),
        infrastructureSchema: await fetchSchema('./example/simple/pipeline/schemas/infrastructure_schema.json'),
        specificationSchema: await fetchSchema('./example/simple/pipeline/schemas/specification_schema.json')
    };
}

// Initialize Rete.js editor with fetched schemas
async function initializeEditor() {
    const { dataSchema, implementationSchema, infrastructureSchema, specificationSchema } = await fetchAllSchemas();

    var container = document.querySelector('#rete');
    var editor = new Rete.NodeEditor('demo@0.1.0', container);
    editor.use(Rete.ConnectionPlugin.default());
    editor.use(Rete.AlbersPlugin.default());

    var components = ['MainComponent', 'Data', 'Infrastructure', 'Implementation', 'Specification'];

    components.forEach(name => {
        var component = new Rete.Component(name);

        component.builder(node => {
            var out1 = new Rete.Output('json', 'JSON', Rete.numSocket);
            node.addOutput(out1);

            // Here, you can add controls to the node based on the JSON schema for validation
            // For example, if the schema requires a certain field, you can add an input control for that field
            // Use the fetched JSON schemas to determine the required controls and validation rules
        });

        editor.register(component);
    });

    editor.on('process nodecreated noderemoved connectioncreated connectionremoved', async () => {
        await editor.trigger('process');
    });

    editor.view.resize();
    editor.trigger('process');
}

// Call the initialization function
initializeEditor();
