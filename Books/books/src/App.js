import React from 'react';
import './App.css';

class App extends React.Component {
  state={
    books: [],
  }

  componentDidMount = async () => {
    const apiUrl = process.env.REACT_APP_API_URL 
    const resp = await fetch(`${apiUrl}/books`)
    const jsonBooks = await resp.json()
    

    this.setState({
      books:jsonBooks.data,
    })
  }

  render(){
    return(
      <div className ="App">
        <header className ="App-header">
        <h1>Book catalogue</h1>
        {this.state.books.map((book, index) => (
          <div key ={index}>
            <img src={book.img} style={{width: "200px"}} alt="img"></img>
            <span>{book.title}</span>
            </div>
        ))}
        </header>
      </div>
    )
  }

 
}

export default App;
