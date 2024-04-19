import  { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(renderItems(data));

const mainNode = document.getElementById('root');

mainNode.appendChild(renderItems(data))
