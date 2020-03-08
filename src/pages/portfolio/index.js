import React, { Component } from "react";
import { connect } from "react-redux";
import GET from "../../config/services/get";
import GetLoading from "../../components/content/loading";
import {
  Tab,
  Card,
  Modal,
  Button,
  Icon,
  Header,
  Embed,
  Table,
  Image
} from "semantic-ui-react";
import { TransitionModal } from "semantic-ui-react-transition-modal";

class Portfolio extends Component {
  // componentDidMount() {
  //   this.props.getDemoContents();
  // }

  render() {
    const {
      demos,
      demosLoading,
      portfolios,
      portfoliosLoading,
      srcPath
    } = this.props;
    const panes = [
      {
        menuItem: "Website",
        render: () => (
          <div>
            <GetLoading
              dataLoading={portfoliosLoading}
              dataLength={portfolios}
              dataContent={
                <Card.Group itemsPerRow={4} stackable doubling>
                  {portfolios.map((portfolio, index) => {
                    return (
                      <Card key={index}>
                        <Card.Content>
                          <Image
                            floated="right"
                            size="mini"
                            style={{
                              width: "auto",
                              height: "30px"
                            }}
                            src={srcPath + portfolio.framework_image}
                          />
                          <Card.Header>{portfolio.framework_name}</Card.Header>
                          <Card.Meta>{portfolio.title}</Card.Meta>
                          <Card.Description>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: portfolio.description
                              }}
                            ></p>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content>
                          <div className="ui two buttons">
                            <TransitionModal
                              animation="scale"
                              duration={250}
                              trigger={
                                <Button color="red">
                                  <Icon name="play" />
                                  Video
                                </Button>
                              }
                              closeIcon
                              content={
                                <Modal.Content
                                  style={{
                                    textAlign: "center"
                                  }}
                                >
                                  <Header>
                                    {portfolio.title} (
                                    {portfolio.framework_name})
                                  </Header>
                                  <p>
                                    Berikut adalah demonstrasi berupa vidio
                                    mengenai sitem yang dibuat
                                  </p>
                                  <Embed
                                    autoplay={true}
                                    active={true}
                                    id={portfolio.url_youtube}
                                    iframe={{
                                      allowFullScreen: true,
                                      style: {
                                        padding: 5
                                      }
                                    }}
                                    color="red"
                                    source="youtube"
                                  />
                                </Modal.Content>
                              }
                            />

                            <TransitionModal
                              animation="fly down"
                              duration={500}
                              trigger={
                                <Button color="blue">
                                  <Icon name="eye" />
                                  Detail
                                </Button>
                              }
                              closeIcon
                              content={
                                <Modal.Content
                                  style={{
                                    textAlign: "center"
                                  }}
                                >
                                  <Header>{portfolio.title}</Header>
                                  <Table celled striped>
                                    <Table.Header>
                                      <Table.Row>
                                        <Table.HeaderCell colSpan="3">
                                          Informasi Sistem
                                        </Table.HeaderCell>
                                      </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                      <Table.Row>
                                        <Table.Cell collapsing>
                                          <Icon name="angle right" /> Nama
                                        </Table.Cell>
                                        <Table.Cell>
                                          {portfolio.title}
                                        </Table.Cell>
                                      </Table.Row>

                                      <Table.Row>
                                        <Table.Cell collapsing>
                                          <Icon name="angle right" /> Deskripsi
                                        </Table.Cell>
                                        <Table.Cell>
                                          <p
                                            dangerouslySetInnerHTML={{
                                              __html: portfolio.description
                                            }}
                                          ></p>
                                        </Table.Cell>
                                      </Table.Row>

                                      <Table.Row>
                                        <Table.Cell collapsing>
                                          <Icon name="angle right" /> Kategori
                                        </Table.Cell>
                                        <Table.Cell>
                                          {portfolio.platform_name}
                                        </Table.Cell>
                                      </Table.Row>

                                      <Table.Row>
                                        <Table.Cell collapsing>
                                          <Icon name="angle right" /> Framework
                                        </Table.Cell>
                                        <Table.Cell>
                                          {portfolio.framework_name}
                                        </Table.Cell>
                                      </Table.Row>

                                      <Table.Row>
                                        <Table.Cell collapsing>
                                          <Icon name="angle right" /> URL
                                        </Table.Cell>
                                        <Table.Cell>
                                          {portfolio.url_demo}
                                        </Table.Cell>
                                      </Table.Row>

                                      <Table.Row>
                                        <Table.Cell collapsing>
                                          <Icon name="angle right" /> Nomor SP
                                        </Table.Cell>
                                        <Table.Cell>
                                          {portfolio.number_sp}
                                        </Table.Cell>
                                      </Table.Row>

                                      <Table.Row>
                                        <Table.Cell collapsing>
                                          <Icon name="angle right" /> Nomor SSTP
                                        </Table.Cell>
                                        <Table.Cell>
                                          {portfolio.number_sstp}
                                        </Table.Cell>
                                      </Table.Row>

                                      <Table.Row>
                                        <Table.Cell collapsing>
                                          <Icon name="angle right" /> Tanggal
                                          Mulai
                                        </Table.Cell>
                                        <Table.Cell>
                                          {portfolio.date_start === "1996-01-01"
                                            ? "-"
                                            : portfolio.date_start}
                                        </Table.Cell>
                                      </Table.Row>

                                      <Table.Row>
                                        <Table.Cell collapsing>
                                          <Icon name="angle right" /> Tanggal
                                          Selesai
                                        </Table.Cell>
                                        <Table.Cell>
                                          {portfolio.date_end === "1996-01-01"
                                            ? "-"
                                            : portfolio.date_end}
                                        </Table.Cell>
                                      </Table.Row>
                                    </Table.Body>
                                  </Table>
                                </Modal.Content>
                              }
                            />
                          </div>
                        </Card.Content>
                      </Card>
                    );
                  })}
                </Card.Group>
              }
            />
          </div>
        )
      },
      {
        menuItem: "Tutorial",
        render: () => (
          <div>
            <GetLoading
              dataLoading={demosLoading}
              dataLength={demos}
              dataContent={
                <Card.Group itemsPerRow={4} stackable doubling>
                  {demos.map((demo, index) => {
                    return (
                      <Card key={index}>
                        <Card.Content>
                          <Image
                            floated="right"
                            size="mini"
                            style={{
                              width: "auto",
                              height: "30px"
                            }}
                            src={srcPath + demo.framework_image}
                          />
                          <Card.Header>{demo.framework_name}</Card.Header>
                          <Card.Meta>{demo.title}</Card.Meta>
                          <Card.Description>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: demo.description.substring(0, 60)
                              }}
                            ></p>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content>
                          <div className="ui two buttons">
                            <TransitionModal
                              animation="scale"
                              duration={250}
                              trigger={
                                <Button color="red">
                                  <Icon name="play" />
                                  Video
                                </Button>
                              }
                              closeIcon
                              content={
                                <Modal.Content
                                  style={{
                                    textAlign: "center"
                                  }}
                                >
                                  <Header>
                                    {demo.title} ({demo.framework_name})
                                  </Header>
                                  <p>
                                    Berikut adalah demonstrasi berupa vidio
                                    mengenai sitem yang dibuat
                                  </p>
                                  <Embed
                                    autoplay={true}
                                    active={true}
                                    id={demo.url_youtube}
                                    iframe={{
                                      allowFullScreen: true,
                                      style: {
                                        padding: 5
                                      }
                                    }}
                                    color="red"
                                    source="youtube"
                                  />
                                </Modal.Content>
                              }
                            />

                            <TransitionModal
                              animation="fly down"
                              duration={500}
                              trigger={
                                <Button color="blue">
                                  <Icon name="eye" />
                                  Detail
                                </Button>
                              }
                              closeIcon
                              content={
                                <Modal.Content
                                  style={{
                                    textAlign: "center"
                                  }}
                                >
                                  <Header>{demo.title}</Header>
                                  <Table celled striped>
                                    <Table.Header>
                                      <Table.Row>
                                        <Table.HeaderCell colSpan="3">
                                          Informasi Sistem
                                        </Table.HeaderCell>
                                      </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                      <Table.Row>
                                        <Table.Cell collapsing>
                                          <Icon name="angle right" /> Nama
                                        </Table.Cell>
                                        <Table.Cell>{demo.title}</Table.Cell>
                                      </Table.Row>

                                      <Table.Row>
                                        <Table.Cell collapsing>
                                          <Icon name="angle right" /> Deskripsi
                                        </Table.Cell>
                                        <Table.Cell>
                                          <p
                                            dangerouslySetInnerHTML={{
                                              __html: demo.description
                                            }}
                                          ></p>
                                        </Table.Cell>
                                      </Table.Row>

                                      <Table.Row>
                                        <Table.Cell collapsing>
                                          <Icon name="angle right" /> Kategori
                                        </Table.Cell>
                                        <Table.Cell>
                                          {demo.platform_name}
                                        </Table.Cell>
                                      </Table.Row>

                                      <Table.Row>
                                        <Table.Cell collapsing>
                                          <Icon name="angle right" /> Framework
                                        </Table.Cell>
                                        <Table.Cell>
                                          {demo.framework_name}
                                        </Table.Cell>
                                      </Table.Row>

                                      <Table.Row>
                                        <Table.Cell collapsing>
                                          <Icon name="angle right" /> URL
                                        </Table.Cell>
                                        <Table.Cell>{demo.url_demo}</Table.Cell>
                                      </Table.Row>
                                    </Table.Body>
                                  </Table>
                                </Modal.Content>
                              }
                            />
                          </div>
                        </Card.Content>
                      </Card>
                    );
                  })}
                </Card.Group>
              }
            />
          </div>
        )
      },
      {
        menuItem: "Mobile",
        render: () => (
          <Tab.Pane>
            <p
              style={{
                textAlign: "center",
                padding: "5%"
              }}
            >
              Belum ada portofolio untuk kategori ini
            </p>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Games",
        render: () => (
          <Tab.Pane>
            <p
              style={{
                textAlign: "center",
                padding: "5%"
              }}
            >
              Belum ada portofolio untuk kategori ini
            </p>
          </Tab.Pane>
        )
      }
    ];
    return (
      <div>
        <Tab
          menu={{
            secondary: true,
            pointing: true,
            size: "tiny"
          }}
          panes={panes}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  demos: state.demos,
  demosLoading: state.demosLoading,
  portfolios: state.portfolios,
  portfoliosLoading: state.portfoliosLoading,
  srcPath: state.srcPath
});

const mapDispatchToProps = dispatch => ({
  getPortfolios: () => dispatch(GET.getPortfolios()),
  getDemoContents: () => dispatch(GET.getDemoContents())
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
