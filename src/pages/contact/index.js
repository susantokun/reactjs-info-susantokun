import React, { Component } from "react";
import { Grid, Divider } from "semantic-ui-react";
import { FormSendEmail } from "../../components/content/form";
import { LabelContact } from "../../components/content/label";
import { connect } from "react-redux";
import Maps from "../../components/content/maps";
import GetLoading from "../../components/content/loading";

class Contact extends Component {
  render() {
    const { configurations, configurationsLoading } = this.props;
    return (
      <div>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <FormSendEmail />
          </Grid.Column>
          <Grid.Column>
            <GetLoading
              dataLoading={configurationsLoading}
              dataLength={configurations}
              dataContent={<Maps dataMaps={configurations} />}
            />
          </Grid.Column>
        </Grid>
        <Divider section />
        <GetLoading
          dataLoading={configurationsLoading}
          dataLength={configurations}
          dataContent={<LabelContact dataContacts={configurations} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  configurations: state.configurations,
  configurationsLoading: state.configurationsLoading
});

export default connect(mapStateToProps, null)(Contact);
