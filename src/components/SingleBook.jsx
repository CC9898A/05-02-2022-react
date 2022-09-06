import GetComment from "./GetComment";
import React from "react";



class SingleBook extends React.Component{
    state={
    select : false 
    }
render(){
return  <div><img src={this.props.book.img} width = "350px" height = "550px" /> <p>€{this.props.book.price}</p>
{/*componente con render condizionale di get comment */}
{this.state.select &&<GetComment asin={this.props.book.asin}></GetComment>}

<button onClick={()=> {
    this.setState({select: true})
}} >Mostra Commenti</button></div>

}

}

export default SingleBook;