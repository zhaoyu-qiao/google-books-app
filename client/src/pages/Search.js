import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { BookListItem } from "../components/BookListItem";

// search page
class Search extends Component {
  state = {
    books: [],
    search: "",
    title: "",
    author: "",
    description: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBook(this.state.search)
      .then(res => this.setState({ books: res.data.items }))
      .catch(err => console.log(err));
  };

  handleSavedBook = data => {
    console.log("This is the book data from handleSavedBook:");
    console.log(data);
    API.saveBook(data)
      .then(res => alert("Your book was saved! 😄") && this.loadBooks())

      .catch(err => console.log(err));
  };

  render() {
    console.log("STATE", this.state);
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1> Search your book here </h1>{" "}
            </Jumbotron>{" "}
            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!this.state.search}
                onClick={this.handleFormSubmit}
              >
                Submit{" "}
              </FormBtn>{" "}
            </form>{" "}
          </Col>{" "}
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1> Search Result </h1>{" "}
            </Jumbotron>
            {!this.state.books.length ? (
              <h1 id="message" className="text-center">
                No Books To Display
              </h1>
            ) : (
              <div>
                {this.state.books.map(books => {
                  return (
                    <BookListItem
                      key={books.id}
                      title={books.volumeInfo.title}
                      author={books.volumeInfo.authors}
                      id={books.id}
                      href={books.volumeInfo.previewLink}
                      thumbnail={books.volumeInfo.imageLinks.thumbnail}
                      description={books.volumeInfo.description}
                      handleSavedBook={() =>
                        this.handleSavedBook({
                          title: books.volumeInfo.title,
                          author: books.volumeInfo.authors,
                          id: books.id,
                          href: books.volumeInfo.previewLink,
                          thumbnail: books.volumeInfo.imageLinks.thumbnail,
                          description: books.volumeInfo.description
                        })
                      }
                    />
                  );
                })}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
