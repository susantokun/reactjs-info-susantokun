import React from "react";
import { Responsive, Segment } from "semantic-ui-react";

export const MainFooter = () => {
  return (
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Segment
        textAlign="center"
        size="small"
        inverted
        color="red"
        style={{
          flexShrink: 0,
          borderRadius: 0,
          margin: 0,
          padding: 8
        }}
      >
        Copyright © 2019
        <b>
          <a
            style={{
              color: "white"
            }}
            href="http://www.susantokun.com"
          >
            &nbsp;Susantokun
          </a>
        </b>
        . All Rights Reserved
      </Segment>
    </Responsive>
  );
};

export const MainFooterMobile = () => {
  return (
    <Responsive {...Responsive.onlyMobile}>
      <Segment
        textAlign="center"
        size="small"
        inverted
        color="red"
        style={{
          flexShrink: 0,
          borderRadius: 0,
          margin: 0,
          padding: 8
        }}
      >
        Copyright © 2019
        <b>
          <a
            style={{
              color: "white"
            }}
            href="http://www.susantokun.com"
          >
            &nbsp;Susantokun
          </a>
        </b>
        . All Rights Reserved
      </Segment>
    </Responsive>
  );
};
