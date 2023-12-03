// const node1 = React.createElement('p', {id:'node1'}, 'HTML for node1');

const rootnode = ReactDOM.createRoot(document.getElementById('root'));
// rootnode.render(node1);


// -------------------------- create this syntax in react-------------------

// <div id='parent'>
//     <div id='child'>
//         <h1>this is -h1- tag</h1>
//         <h2>this is -h2- tag</h2>
//     </div>
// </div> 

// we have nested react code 

const node_parrent = React.createElement('div', {id: 'parrent'}, 
React.createElement('div', {id: 'child'}, 
[React.createElement('h1', {}, 'this is -h1- tag'), React.createElement('h2', {}, 'this is -h2- tag')]));

rootnode.render(node_parrent);