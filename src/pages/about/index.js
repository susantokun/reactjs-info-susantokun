import React, { Component, Fragment } from "react";
import { List, Divider, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import GetLoading from "../../components/content/loading";

class About extends Component {
  render() {
    const { configurations, configurationsLoading } = this.props;
    return (
      <div>
        <GetLoading
          dataLoading={configurationsLoading}
          dataLength={configurations}
          dataContent={configurations.map((item, i) => (
            <Fragment key={i}>
              <Message
                info
                style={{
                  textAlign: "justify"
                }}
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.about
                  }}
                ></p>
              </Message>

              <Divider />
              <List divided relaxed>
                <List.Item>
                  <List.Icon name="world" size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header as="a" href={item.website_1}>
                      Susantokun
                    </List.Header>
                    <List.Description as="a">
                      Blog Pribadi 'Situs Edukasi, Tips dan Tutorial'
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="eye" size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header as="a" href={item.website_3}>
                      DEMO Susantokun
                    </List.Header>
                    <List.Description as="a">
                      Semua hasil coding yang didemonstrasikan secara online
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon
                    name="github"
                    size="large"
                    verticalAlign="middle"
                  />
                  <List.Content>
                    <List.Header as="a" href={item.github}>
                      Github Susantokun
                    </List.Header>
                    <List.Description as="a">
                      Semua coding yang didokumentasikan
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon
                    name="youtube"
                    size="large"
                    verticalAlign="middle"
                  />
                  <List.Content>
                    <List.Header as="a" href={item.youtube}>
                      Youtube Susantokun
                    </List.Header>
                    <List.Description as="a">
                      Media pembelajaran dalam bentuk vidio yang berkaitan
                      dengan IT terutama Web Development
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Fragment>
          ))}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  configurations: state.configurations,
  configurationsLoading: state.configurationsLoading
});

export default connect(mapStateToProps, null)(About);
