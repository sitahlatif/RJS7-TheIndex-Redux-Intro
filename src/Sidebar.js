import React, { Component } from "react";
import * as actionCreators from "./store/actions";
import { connect } from "react-redux";
class Sidebar extends Component {
  render() {
    let newAuthor = {
      id: 1,
      first_name: "TEST",
      last_name: "Rowling",
      imageUrl:
        "https://nation.com.pk/digital_images/large/2015-05-10/jk-rowling-believes-in-standing-up-to-bullies-1431261222-3596.jpeg",
      books: [
        {
          title: "Harry Potter and the Philosopher's Stone",
          color: "red"
        }
      ]
    };
    return (
      <div id="sidebar">
        <img src="theindex.svg" className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <button>AUTHORS</button>
          </h4>
          <h4 className="menu-item">
            <button onClick={() => this.props.addAuthor(newAuthor)}>
              + ADD AUTHOR
            </button>
          </h4>
        </section>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addAuthor: author => dispatch(actionCreators.addAuthor(author))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Sidebar);
