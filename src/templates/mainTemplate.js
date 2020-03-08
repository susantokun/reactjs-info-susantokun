import React, { Component, Fragment } from "react";
import "./style.css";
import "../assets/fomantic/dist/semantic.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import NavBar from "../components/menu/navBar";
import { connect } from "react-redux";
import GET from "../config/services/get";
import { MainFooter, MainFooterMobile } from "../components/footer";
import { MainHeader } from "../components/header";
import MobileContent from "../components/content/mobile";

export class MainTemplate extends Component {
  componentDidMount() {
    this.props.getConfigurations();
    this.props.getPortfolios();
    this.props.getExperiences();
    this.props.getCertificates();
    this.props.getDemoContents();
  }

  render() {
    const logo = this.props.configurations;
    const { configurations, configurationsLoading } = this.props;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}
      >
        <div
          style={{
            flexGrow: 1,
            overflowX: "hidden",
            overflowY: "auto"
          }}
        >
          <Segment
            inverted
            style={{
              padding: "1em 0em",
              borderRadius: "0px"
            }}
          >
            <MainHeader
              name="2"
              job="3"
              dataTitle={configurations}
              dataDescription={configurations}
              configurations={configurations}
              configurationsLoading={configurationsLoading}
              profile={logo}
              description="4"
            />
          </Segment>
          <Router>
            <Container
              style={{
                paddingBottom: 20
              }}
            >
              <Fragment>
                <NavBar />
                <MobileContent />
              </Fragment>
            </Container>
          </Router>
        </div>
        <MainFooter />
        <MainFooterMobile />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  configurations: state.configurations,
  configurationsLoading: state.configurationsLoading
});

const mapDispatchToProps = dispatch => ({
  getConfigurations: () => dispatch(GET.getConfigurations()),
  getPortfolios: () => dispatch(GET.getPortfolios()),
  getExperiences: () => dispatch(GET.getExperiences()),
  getCertificates: () => dispatch(GET.getCertificates()),
  getDemoContents: () => dispatch(GET.getDemoContents())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainTemplate);
