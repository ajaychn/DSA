const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e'],
}

function depthFSIterative(graph, start) {
    const stack = [start];
    const visited = new Set();

    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            
            console.log(visited);
            for (const neighbour of graph[node]) {
                if (!visited.has(neighbour)) {
                    stack.push(neighbour);
                }
            }
        }
    }
    
    return visited; // Return the visited nodes
}

// Call the function with a starting node, e.g., 'a'
console.log(depthFSIterative(graph, 'a'));
// Output: Set { 'a', 'c', 'd', 'b' }
