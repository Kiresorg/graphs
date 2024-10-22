const Graph = require('./graph');

const graph = new Graph();

// Add nodes (vertices)
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");

// Add edges (undirected connections between nodes)
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// Depth-First Search (DFS)
console.log("DFS traversal:", graph.depthFirstSearch("A")); // Output: DFS traversal: [ 'A', 'B', 'D', 'E', 'C', 'F' ]

// Breadth-First Search (BFS)
console.log("BFS traversal:", graph.breadthFirstSearch("A")); // Output: BFS traversal: [ 'A', 'B', 'C', 'D', 'E', 'F' ]


// Function to extract edges from the graph's adjacency list
function extractEdges(graph) {
    const edges = [];
    const adjacencyList = graph.adjacencyList;
  
    // Loop through each node and its neighbors
    for (let node in adjacencyList) {
      adjacencyList[node].forEach(neighbor => {
        // Ensure each edge is only added once (since it's an undirected graph)
        if (!edges.some(edge => edge.includes(node) && edge.includes(neighbor))) {
          edges.push([node, neighbor]);
        }
      });
    }
  
    return edges;
  }
  
  // Extract the edges from the graph
  const edges = extractEdges(graph);
  
  // Pass the extracted edges to the createAdjacencyList function
  const adjacencyListJSON = graph.createAdjacencyList(edges);
  
  console.log("Adjacency List in JSON format:", JSON.stringify(adjacencyListJSON, null, 2));