import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
import { NotFoundContent } from "./notFound";
import { connect } from "react-redux";

export class GetLoading extends Component {
  render() {
    const { dataLoading, dataLength, dataContent } = this.props;
    return (
      <div>
        {dataLoading ? (
          <div>
            <Loader active inline="centered" content="Loading" size="medium" />
          </div>
        ) : dataLength.length > 0 ? (
          <div>{dataContent}</div>
        ) : (
          <NotFoundContent className="center" />
        )}
      </div>
    );
  }
}

export default connect(null, null)(GetLoading);
