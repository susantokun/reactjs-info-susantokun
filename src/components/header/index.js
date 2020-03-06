import React, { Component } from "react";
import "./style.css";
import { Segment } from "semantic-ui-react";
import { LabelHeaderTitle, LabelHeaderDescription } from "./label";
import { ImageHeader } from "./image";
import { NotFoundHeaderImage } from "./notFound";
import { connect } from "react-redux";
import { Eclipse } from "react-loading-io";

class Header extends Component {
  render() {
    const {
      configurations,
      configurationsLoading,
      name,
      job,
      srcPath,
      profile,
      dataTitle,
      dataDescription
    } = this.props;
    return (
      <Segment
        inverted
        style={{
          padding: "1em 0em",
          borderRadius: "0px"
        }}
      >
        <LabelHeaderTitle dataTitle={dataTitle} name={name} job={job} />

        {configurationsLoading ? (
          <div style={{ textAlign: "center" }}>
            <Eclipse size={150} color="#da262c" />
          </div>
        ) : configurations.length > 0 ? (
          <ImageHeader srcProfileHeader={srcPath} profile={profile} />
        ) : (
          <NotFoundHeaderImage />
        )}

        <LabelHeaderDescription dataDescription={dataDescription} />
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  srcPath: state.srcPath
});

// export default connect(mapStateToProps, null)(MainHeader);

export const MainHeader = connect(mapStateToProps, null)(Header);
