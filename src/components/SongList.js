import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  //return jsx
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content"> {song.title} </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list"> {this.renderList()} </div>;
  }
}

//take store data and make  computation on data
//by convection it is named like this
const mapStateToProps = state => {
  return { songs: state.songs };
};

//the second parenthesis invokes the songlist function
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
