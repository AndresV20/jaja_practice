"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_view_1 = require("prosemirror-view");
var prosemirror_model_1 = require("prosemirror-model");
var prosemirror_schema_basic_1 = require("prosemirror-schema-basic");
var prosemirror_schema_list_1 = require("prosemirror-schema-list");
var prosemirror_example_setup_1 = require("prosemirror-example-setup");
// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.
var mySchema = new prosemirror_model_1.Schema({
    nodes: (0, prosemirror_schema_list_1.addListNodes)(prosemirror_schema_basic_1.schema.spec.nodes, "paragraph block*", "block"),
    marks: prosemirror_schema_basic_1.schema.spec.marks
});
window.view = new prosemirror_view_1.EditorView(document.querySelector("#editor"), {
    state: prosemirror_state_1.EditorState.create({
        doc: prosemirror_model_1.DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
        plugins: (0, prosemirror_example_setup_1.exampleSetup)({ schema: mySchema })
    })
});
//# sourceMappingURL=main.js.map