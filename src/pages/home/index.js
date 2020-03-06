import React, { Component } from "react";
import { connect } from "react-redux";
import GetLoading from "../../components/content/loading";

class Home extends Component {
  render() {
    const { configurations, configurationsLoading } = this.props;
    return (
      <div
        style={{
          textAlign: "justify"
        }}
      >
        <GetLoading
          dataLoading={configurationsLoading}
          dataLength={configurations}
          dataContent={configurations.map((item, i) => {
            return (
              <div
                key={i}
                dangerouslySetInnerHTML={{
                  __html: item.introduction
                }}
              ></div>
            );
          })}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  configurations: state.configurations,
  configurationsLoading: state.configurationsLoading
});

export default connect(mapStateToProps, null)(Home);
