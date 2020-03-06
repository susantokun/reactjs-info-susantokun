import React from "react";
import { Header } from "semantic-ui-react";
import { getAge, getDateOfBirth } from "../../config/helpers";

export const LabelHeaderTitle = ({ dataTitle }) => {
  return (
    <Header as="h1" inverted textAlign="center">
      {dataTitle.map((item, i) => (
        <div key={i}>
          {item.author}
          <Header as="h2" inverted textAlign="center">
            {item.profession}
            <Header.Subheader>{item.job_specialization}</Header.Subheader>
          </Header>
        </div>
      ))}
    </Header>
  );
};

export const LabelHeaderDescription = ({ dataDescription }) => {
  return (
    <Header as="h4" icon textAlign="center">
      <Header.Content
        style={{
          padding: "2px"
        }}
      >
        {dataDescription.map((item, i) => (
          <div key={i}>
            {getAge(item.date_of_birth)} Tahun
            <br />
            {item.place_of_birth}, {getDateOfBirth(item.date_of_birth)}
            <br />
            {item.address}
          </div>
        ))}
      </Header.Content>
    </Header>
  );
};
