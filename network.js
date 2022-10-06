const NODES = [{"id": 0, "label": "Tchouki", "shape": "dot"}, {"id": 1, "label": "Uma", "shape": "dot"}, {"id": 2, "label": "Loupinette", "shape": "dot"}, {"id": 3, "label": "Ewy", "shape": "dot"}, {"id": 4, "label": "Blank", "shape": "dot"}, {"id": 5, "label": "Boo2chou", "shape": "dot"}, {"id": 6, "label": "Galdo", "shape": "dot"}, {"id": 7, "label": "Ellio", "shape": "dot"}, {"id": 8, "label": "Alea", "shape": "dot"}, {"id": 9, "label": "Aliwan", "shape": "dot"}, {"id": 10, "label": "Aoi", "shape": "dot"}, {"id": 11, "label": "Archanon", "shape": "dot"}, {"id": 12, "label": "Audy", "shape": "dot"}, {"id": 13, "label": "Bimeur", "shape": "dot"}, {"id": 14, "label": "Bloom", "shape": "dot"}, {"id": 15, "label": "Coin", "shape": "dot"}, {"id": 16, "label": "Ebene", "shape": "dot"}, {"id": 17, "label": "Kalhen", "shape": "dot"}, {"id": 18, "label": "Leo", "shape": "dot"}, {"id": 19, "label": "Linakoon", "shape": "dot"}, {"id": 20, "label": "Lucy", "shape": "dot"}, {"id": 21, "label": "Maggy", "shape": "dot"}, {"id": 22, "label": "Maksifer", "shape": "dot"}, {"id": 23, "label": "Maxo", "shape": "dot"}, {"id": 24, "label": "Moohn", "shape": "dot"}, {"id": 25, "label": "Nocidiurne", "shape": "dot"}, {"id": 26, "label": "Nowee", "shape": "dot"}, {"id": 27, "label": "Para", "shape": "dot"}, {"id": 28, "label": "Rihyette", "shape": "dot"}, {"id": 29, "label": "tpm", "shape": "dot"}];
const EDGES = [{"arrows": "to", "from": 0, "to": 20, "width": 2}, {"arrows": "to", "from": 0, "to": 2, "width": 2}, {"arrows": "to", "from": 0, "to": 27, "width": 2}, {"arrows": "to", "from": 0, "to": 9, "width": 2}, {"arrows": "to", "from": 1, "to": 3, "width": 2}, {"arrows": "to", "from": 1, "to": 2, "width": 2}, {"arrows": "to", "from": 1, "to": 26, "width": 2}, {"arrows": "to", "from": 2, "to": 0, "width": 2}, {"arrows": "to", "from": 2, "to": 3, "width": 2}, {"arrows": "to", "from": 2, "to": 6, "width": 2}, {"arrows": "to", "from": 2, "to": 1, "width": 2}, {"arrows": "to", "from": 3, "to": 2, "width": 2}, {"arrows": "to", "from": 3, "to": 1, "width": 2}, {"arrows": "to", "from": 3, "to": 26, "width": 2}, {"arrows": "to", "from": 3, "to": 24, "width": 2}, {"arrows": "to", "from": 6, "to": 2, "width": 2}, {"arrows": "to", "from": 6, "to": 28, "width": 2}, {"arrows": "to", "from": 8, "to": 16, "width": 2}, {"arrows": "to", "from": 8, "to": 17, "width": 2}, {"arrows": "to", "from": 8, "to": 11, "width": 2}, {"arrows": "to", "from": 9, "to": 0, "width": 2}, {"arrows": "to", "from": 11, "to": 8, "width": 2}, {"arrows": "to", "from": 13, "to": 25, "width": 2}, {"arrows": "to", "from": 13, "to": 26, "width": 2}, {"arrows": "to", "from": 15, "to": 28, "width": 2}, {"arrows": "to", "from": 15, "to": 26, "width": 2}, {"arrows": "to", "from": 15, "to": 24, "width": 2}, {"arrows": "to", "from": 15, "to": 21, "width": 2}, {"arrows": "to", "from": 16, "to": 17, "width": 2}, {"arrows": "to", "from": 16, "to": 8, "width": 2}, {"arrows": "to", "from": 17, "to": 16, "width": 2}, {"arrows": "to", "from": 17, "to": 8, "width": 2}, {"arrows": "to", "from": 18, "to": 26, "width": 2}, {"arrows": "to", "from": 19, "to": 26, "width": 2}, {"arrows": "to", "from": 20, "to": 0, "width": 2}, {"arrows": "to", "from": 21, "to": 15, "width": 2}, {"arrows": "to", "from": 24, "to": 26, "width": 2}, {"arrows": "to", "from": 24, "to": 3, "width": 2}, {"arrows": "to", "from": 24, "to": 28, "width": 2}, {"arrows": "to", "from": 24, "to": 15, "width": 2}, {"arrows": "to", "from": 25, "to": 13, "width": 2}, {"arrows": "to", "from": 26, "to": 19, "width": 2}, {"arrows": "to", "from": 26, "to": 24, "width": 2}, {"arrows": "to", "from": 26, "to": 15, "width": 2}, {"arrows": "to", "from": 26, "to": 1, "width": 2}, {"arrows": "to", "from": 26, "to": 18, "width": 2}, {"arrows": "to", "from": 26, "to": 3, "width": 2}, {"arrows": "to", "from": 27, "to": 0, "width": 2}, {"arrows": "to", "from": 28, "to": 6, "width": 2}, {"arrows": "to", "from": 28, "to": 15, "width": 2}, {"arrows": "to", "from": 28, "to": 24, "width": 2}, {"arrows": "to", "color": "red", "from": 0, "to": 1, "width": 2}, {"arrows": "to", "color": "red", "from": 0, "to": 3, "width": 2}, {"arrows": "to", "color": "red", "from": 0, "to": 5, "width": 2}, {"arrows": "to", "color": "red", "from": 0, "to": 12, "width": 2}, {"arrows": "to", "color": "red", "from": 0, "to": 14, "width": 2}, {"arrows": "to", "color": "red", "from": 7, "to": 14, "width": 2}, {"arrows": "to", "color": "red", "from": 0, "to": 18, "width": 2}, {"arrows": "to", "color": "red", "from": 17, "to": 18, "width": 2}, {"arrows": "to", "color": "red", "from": 0, "to": 22, "width": 2}, {"arrows": "to", "color": "red", "from": 7, "to": 22, "width": 2}, {"arrows": "to", "color": "red", "from": 10, "to": 24, "width": 2}, {"arrows": "to", "color": "red", "from": 21, "to": 26, "width": 2}, {"arrows": "to", "color": "green", "from": 4, "to": 0, "width": 2}, {"arrows": "to", "color": "green", "from": 10, "to": 0, "width": 2}, {"arrows": "to", "color": "green", "from": 0, "to": 4, "width": 2}, {"arrows": "to", "color": "green", "from": 2, "to": 24, "width": 2}, {"arrows": "to", "color": "green", "from": 6, "to": 24, "width": 2}];


const SHEETID = '1D6fMJB34T3BYFzvyFDbP-SVo6syHEU-k6Sqr7WHGArY';
const GID = 0;

const COLORS = {"Parent": "red", "Sugar Parent": "green", "Couple": "blue"};

const DATA = fetch(`https://docs.google.com/spreadsheets/d/${SHEETID}/gviz/tq?tqx=out:json`)
    .then(res => res.text())
    .then(text => JSON.parse(text.substr(47).slice(0, -2)).table);

function getNetworkFromCSV() {

    // Fetch data
    /*
    jsonData =  fetch(`https://docs.google.com/spreadsheets/d/${SHEETID}/gviz/tq?tqx=out:json`)
        .then(res => res.text())
        .then(text => JSON.parse(text.substr(47).slice(0, -2)).table);
    */

    DATA.then(res => jsonData = res);

    // Get color for each column
    color = jsonData.rows[0].c.slice(1).map(c => COLORS[c.v]);

    // Get id for each person in the graph
    ids = {};
    id = 0;
    jsonData.rows.slice(1).forEach(r => {ids[r.c[0].v] = id; id = id+1;});

    nodes = jsonData.rows.slice(1).map(r => {return {"id": ids[r.c[0].v], "label": r.c[0].v, "shape": "dot"}});

    edges = [];

    jsonData.rows.slice(1).forEach(r => {
        r.c.slice(1).forEach((c, index) => {
            if (c != null && c.v != null) {
                edge =  {"arrows": "to", "color": color[index], "from": ids[c.v], "to": ids[r.c[0].v], "width": 2};
                edges.push(edge);
            }
        })
    });

    return [nodes, edges];
}

// This method is responsible for drawing the filtered graph, returns the drawn network
function drawFilterGraph() {
    var container = document.getElementById('mynetwork');

    /*
    nodes = NODES;
    edges = EDGES;
    */

    network = getNetworkFromCSV();
    nodes = network[0];
    edges = network[1];
    
    // Type filtering
    couple = document.getElementById("couples").checked;
    parent = document.getElementById("parents").checked;
    sugar = document.getElementById("sugar").checked;
    edges = edges.filter( e => 
        (couple && e.color == "blue") || (parent && e.color == "red") || (sugar && e.color == "green"));

    // Name filtering
    separators = [' ', '\\\+', '-', '/', ','];
    filter = document.getElementById("name").value.split(new RegExp(separators.join('|'), 'g')).map((a) => a.toLowerCase());
    filter = nodes.filter( n => filter.includes(n.label.toLowerCase())).map(e => e.id);
    if(filter){
        edges = edges.filter( e => filter.includes(e.from) || filter.includes(e.to));
    } else {
        edges = [];
    }

    // Filter nodes to correspond to edges
    keepOnlyUsed = document.getElementById("keep").checked;
    if(keepOnlyUsed){
        listNodes = new Set();
        edges.forEach(e => {
            listNodes.add(e.from);
            listNodes.add(e.to);
        });
        nodes = nodes.filter( n => listNodes.has(n.id));
    }

    ds_n = new vis.DataSet(nodes);
    ds_e = new vis.DataSet(edges);

    // adding nodes and edges to the graph
    data = {nodes: ds_n, edges: ds_e};

    var options = {"edges": {"smooth": false}};

    network = new vis.Network(container, data, options);
 
    return network;
}

// This method is responsible for drawing the filtered graph, returns the drawn network
function drawFullGraph() {
    var container = document.getElementById('mynetwork');

    /*
    nodes = NODES;
    edges = EDGES;
    */

    network = getNetworkFromCSV();
    nodes = network[0];
    edges = network[1];

    ds_n = new vis.DataSet(nodes);
    ds_e = new vis.DataSet(edges);

    // adding nodes and edges to the graph
    data = {nodes: ds_n, edges: ds_e};

    var options = {"edges": {"smooth": false}};

    network = new vis.Network(container, data, options);
 
    return network;
}