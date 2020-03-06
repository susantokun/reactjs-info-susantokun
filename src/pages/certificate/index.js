import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { Card, Modal, Header, Image } from "semantic-ui-react";
import { TransitionModal } from "semantic-ui-react-transition-modal";
import GET from "../../config/services/get";
import GetLoading from "../../components/content/loading";

class Certificate extends Component {
  // componentDidMount() {
  //   this.props.getCertificates();
  // }

  render() {
    const { certificates, certificatesLoading, srcPath } = this.props;
    return (
      <div>
        <GetLoading
          dataLoading={certificatesLoading}
          dataLength={certificates}
          dataContent={
            <Card.Group doubling itemsPerRow={4}>
              {certificates.map((item, i) => {
                return (
                  <TransitionModal
                    animation="fly up"
                    duration={500}
                    key={i}
                    trigger={
                      <Card
                        style={{
                          textAlign: "center"
                        }}
                        color={item.color}
                        image={srcPath + item.image}
                        className="circular"
                        description={item.category}
                      />
                    }
                    closeIcon
                    content={
                      <Modal.Content
                        style={{
                          textAlign: "center"
                        }}
                      >
                        <Header>{item.title}</Header>
                        <p
                          key={i}
                          dangerouslySetInnerHTML={{
                            __html: item.description
                          }}
                        ></p>
                        <Image src={srcPath + item.image} fluid />
                      </Modal.Content>
                    }
                  />
                );
              })}
            </Card.Group>
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  certificates: state.certificates,
  certificatesLoading: state.certificatesLoading,
  srcPath: state.srcPath
});

const mapDispatchToProps = dispatch => ({
  getCertificates: () => dispatch(GET.getCertificates())
});

export default connect(mapStateToProps, mapDispatchToProps)(Certificate);
