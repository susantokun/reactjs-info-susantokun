import React, { Component } from "react";
import "./style.css";
import { Grid, Segment, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import GET from "../../config/services/get";
import GetLoading from "../../components/content/loading";

class Experience extends Component {
  // componentDidMount() {
  //   this.props.getExperiences();
  // }

  render() {
    const { experiences, experiencesLoading } = this.props;
    return (
      <div>
        <GetLoading
          dataLoading={experiencesLoading}
          dataLength={experiences}
          dataContent={experiences.map((item, i) => (
            <Grid columns={1} key={i}>
              <Grid.Column>
                <Segment raised>
                  <Label
                    as="a"
                    href={item.url}
                    target="_blank"
                    color={item.color}
                    ribbon
                  >
                    {item.name}
                  </Label>
                  <br />
                  <br />
                  <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <div
                          key={i}
                          dangerouslySetInnerHTML={{
                            __html: item.content
                          }}
                        ></div>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Grid.Column>
            </Grid>
          ))}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  experiences: state.experiences,
  experiencesLoading: state.experiencesLoading
});

const mapDispatchToProps = dispatch => ({
  getExperiences: () => dispatch(GET.getExperiences())
});

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
