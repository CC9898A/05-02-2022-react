import horror from '../horror.json'

function LatestRelease() {
    return(
<div>
    {horror.map(book => <div><img src={book.img}/> <p>{book.price}</p></div>)}
    
</div>
    )
      
}
export default LatestRelease;