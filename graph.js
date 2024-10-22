class Graph {
  constructor() {
    this.adjacencyList = {}; // Store the graph as an adjacency list
  }

  // Add a node (vertex) to the graph
  addNode(node) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = []; // Initialize with an empty array
    }
  }

  // Add an edge between two nodes (vertices)
  addEdge(node1, node2) {
    if (!this.adjacencyList[node1]) {
      this.addNode(node1);
    }
    if (!this.adjacencyList[node2]) {
      this.addNode(node2);
    }
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1); // Assuming an undirected graph
  }

  // Print the adjacency list
  printGraph() {
    for (let node in this.adjacencyList) {
      console.log(node + " -> " + this.adjacencyList[node].join(", "));
    }
  }

  // Depth-First Search (DFS) traversal
  depthFirstSearch(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(node) {
      if (!node) return;
      visited[node] = true;
      result.push(node);
      adjacencyList[node].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  // Breadth-First Search (BFS) traversal
  breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      const node = queue.shift();
      result.push(node);

      this.adjacencyList[node].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  // Function to create adjacency list in JSON form
createAdjacencyList(edges) {
  const adjacencyList = {};

  // Loop through each edge and populate the adjacency list
  edges.forEach(edge => {
    const [node1, node2] = edge;

    // Ensure node1 exists in the adjacency list
    if (!adjacencyList[node1]) {
      adjacencyList[node1] = [];
    }
    
    // Ensure node2 exists in the adjacency list
    if (!adjacencyList[node2]) {
      adjacencyList[node2] = [];
    }
    
    // Add the connection (for an undirected graph)
    adjacencyList[node1].push(node2);
    adjacencyList[node2].push(node1); // Comment this line if directed graph
  });

  // Return adjacency list in JSON format
  return adjacencyList;
}
}

module.exports = Graph;