import React from "react";

class GetComment extends React.Component {
state = {
  comments:[]
}


  //metodo che viene invocato dal componente dopo la prima invocazione di render
  componentDidMount() {
    fetch("https://striveschool-api.herokuapp.com/api/comments/"+ this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE1ZWY1NGZmYWQxNjAwMTVhNjZlOTciLCJpYXQiOjE2NjIzODE5MDgsImV4cCI6MTY2MzU5MTUwOH0.XVSqvhbaB9E9r7w6PqtXKsm5UEqVjV0u2E6DwOKyxnA",
      },
    }).then(async function (getdata) {
      if (getdata.ok) {
        let data = await getdata.json();
        console.log(data);
        this.setState({comments:data})
      
      }
    });
  }
//per attivare il "component Did mount" il render non deve essere vuoto;
  render() {
    //Map di comments dentro il div con metoodo map();
    return <div>
      
    </div>;
  }
}

export default GetComment;
