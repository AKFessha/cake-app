import React from "react";

class CakesList extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      cakes: []
    };

    fetch(
      "https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json"
    )
      .then(data => {
        return data.json();
      })
      .then(serverCakes => {
        this.setState({
          cakes: serverCakes
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.cakes.map(cake => {
          return <p> {cake.title}</p>;
        })}
      </div>
    );
  }
}
export default CakesList;
