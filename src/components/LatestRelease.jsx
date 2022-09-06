import React from 'react';
import horror from '../horror.json'

import SingleBook from './SingleBook';



class LatestRelease extends React.Component{
render(){
return <div>
{horror.map(book => <SingleBook book = {book}  ></SingleBook>)}

</div>



}

}
export default LatestRelease;