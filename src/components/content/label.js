import React from "react";
import { Responsive, Container, List } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import instagram from "../../assets/images/social-media/instagram.png";
import whatsapp from "../../assets/images/social-media/whatsapp.png";
import linkedIn from "../../assets/images/social-media/linked-in.png";
import steam from "../../assets/images/social-media/steam.png";
import facebook from "../../assets/images/social-media/facebook.png";
import twitter from "../../assets/images/social-media/twitter.png";
import line from "../../assets/images/social-media/line.png";

export const LabelContact = ({ dataContacts = [] }) => {
  return (
    <div>
      {dataContacts.map((item, i) => (
        <div key={i}>
          <Responsive {...Responsive.onlyComputer}>
            <Container textAlign="center">
              <List
                horizontal
                style={{
                  textAlign: "left"
                }}
              >
                <List.Item>
                  <Image avatar src={instagram} />
                  <List.Content>
                    <List.Header>Instagram</List.Header>
                    <List.Item as="a" href={item.instagram}>
                      susantokun
                    </List.Item>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={whatsapp} />
                  <List.Content>
                    <List.Header>Whats'App</List.Header>
                    {item.telp}
                  </List.Content>
                </List.Item>

                <List.Item>
                  <Image avatar src={linkedIn} />
                  <List.Content>
                    <List.Header>LinkedIn</List.Header>
                    <List.Item as="a" href={item.linked_in}>
                      susantokun
                    </List.Item>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={steam} />
                  <List.Content>
                    <List.Header>Steam</List.Header>
                    <List.Item as="a" href={item.steam}>
                      susantokun
                    </List.Item>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={facebook} />
                  <List.Content>
                    <List.Header>Facebook</List.Header>
                    <List.Item as="a" href={item.facebook}>
                      susantokun
                    </List.Item>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={twitter} />
                  <List.Content>
                    <List.Header>Twitter</List.Header>
                    <List.Item as="a" href={item.twitter}>
                      susantokun
                    </List.Item>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={line} />
                  <List.Content>
                    <List.Header>LINE</List.Header>
                    susantokun.com
                  </List.Content>
                </List.Item>
              </List>
            </Container>
          </Responsive>

          <Responsive {...Responsive.onlyMobile}>
            <Container>
              <List divided verticalAlign="middle">
                <List.Item>
                  <Image avatar src={instagram} />
                  <List.Content>
                    <List.Header>Instagram</List.Header>
                    <List.Item as="a" href={item.instagram}>
                      susantokun
                    </List.Item>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={whatsapp} />
                  <List.Content>
                    <List.Header>Whats'App</List.Header>
                    {item.telp}
                  </List.Content>
                </List.Item>

                <List.Item>
                  <Image avatar src={linkedIn} />
                  <List.Content>
                    <List.Header>LinkedIn</List.Header>
                    <List.Item as="a" href={item.linked_in}>
                      susantokun
                    </List.Item>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={steam} />
                  <List.Content>
                    <List.Header>Steam</List.Header>
                    <List.Item as="a" href={item.steam}>
                      susantokun
                    </List.Item>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={facebook} />
                  <List.Content>
                    <List.Header>Facebook</List.Header>
                    <List.Item as="a" href={item.facebook}>
                      susantokun
                    </List.Item>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={twitter} />
                  <List.Content>
                    <List.Header>Twitter</List.Header>
                    <List.Item as="a" href={item.twitter}>
                      susantokun
                    </List.Item>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={line} />
                  <List.Content>
                    <List.Header>Line</List.Header>
                    susantokun.com
                  </List.Content>
                </List.Item>
              </List>
            </Container>
          </Responsive>
        </div>
      ))}
    </div>
  );
};
