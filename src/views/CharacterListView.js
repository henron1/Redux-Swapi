import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getChar} from '../actions/index';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChar();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h1>The Characters are Loading</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  // isFetching: state.charsReduer.isFetching
})

export default connect(
  mapStateToProps,
  {
   getChar
  }
)(CharacterListView);
