//Build some basic layout components
//add functionality and styling
//iteratively enhance the solution

import DATA from '../data.js';
import Nodes from './Nodes.js';

//React Functional Components returns the React Element or the JSX Code.
const Directory = () => {
  return (
    <Nodes nodes={DATA}/>
  );
};

export default Directory;
