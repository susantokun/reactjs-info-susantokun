import React from "react";
import { Header, Segment, Responsive, Divider, Icon } from "semantic-ui-react";
import Home from "../../pages/home";
import Portfolio from "../../pages/portfolio";
import Experience from "../../pages/experience";
import Certificate from "../../pages/certificate";
import About from "../../pages/about";
import Contact from "../../pages/contact";

function MobileContent() {
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <React.Fragment>
          <Divider hidden />
          <Divider horizontal>
            <Header as="h3">
              <Icon name="home" />
              Home
            </Header>
          </Divider>
          <Segment secondary>
            <Home />
          </Segment>

          <Divider hidden />
          <Divider horizontal>
            <Header as="h4">
              <Icon name="bookmark" />
              Portfolio
            </Header>
          </Divider>
          <Segment secondary>
            <Portfolio />
          </Segment>

          <Divider hidden />
          <Divider horizontal>
            <Header as="h4">
              <Icon name="thumbs up" />
              Experience
            </Header>
          </Divider>
          <Segment secondary>
            <Experience />
          </Segment>

          <Divider hidden />
          <Divider horizontal>
            <Header as="h4">
              <Icon name="star" />
              Certificate
            </Header>
          </Divider>
          <Segment secondary>
            <Certificate />
          </Segment>

          <Divider hidden />
          <Divider horizontal>
            <Header as="h4">
              <Icon name="coffee" />
              About
            </Header>
          </Divider>
          <Segment secondary>
            <About />
          </Segment>

          <Divider hidden />
          <Divider horizontal>
            <Header as="h4">
              <Icon name="envelope" />
              Contact
            </Header>
          </Divider>
          <Segment secondary>
            <Contact />
          </Segment>
        </React.Fragment>
      </Responsive>
    </div>
  );
}

export default MobileContent;
