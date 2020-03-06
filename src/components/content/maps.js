import React, { Component } from "react";
import { Embed } from "semantic-ui-react";
import { connect } from "react-redux";

class Maps extends Component {
  render() {
    const { dataMaps, srcImgGoogleMaps } = this.props;
    return (
      <div>
        {dataMaps.map((item, i) => (
          <div key={i}>
            <Embed
              // active={true}
              icon="map"
              placeholder={srcImgGoogleMaps}
              url={
                "https://www.google.com/maps/embed/v1/place?q=" +
                item.latitude +
                "%2C" +
                item.longitude +
                "&key=" +
                item.api_key
              }
            />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  srcImgGoogleMaps: state.srcImgGoogleMaps
});

export default connect(mapStateToProps)(Maps);
