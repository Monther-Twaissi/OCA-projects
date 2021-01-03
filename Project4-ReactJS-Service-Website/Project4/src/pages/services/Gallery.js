import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";

const Gallery = () => {
  return (
    <MDBContainer className="container-fluid" style={{ marginTop: "3.8%" }}>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 "
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://media.discordapp.net/attachments/783242964762624015/785587543638802432/sdf.png?width=1028&height=441"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              {/* <h3 className="h3-responsive">Light mask</h3>
              <p>First text</p> */}
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://media.discordapp.net/attachments/783242964762624015/785585354865639474/sds.png?width=1028&height=441"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              {/* <h3 className="h3-responsive">Strong mask</h3>
              <p>Second text</p> */}
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://apluscourses.com/wp-content/uploads/2020/06/The-Evolution-Of-Web-Development.jpg"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              {/* <h3 className="h3-responsive">Slight Mast</h3>
              <p>Third text</p> */}
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Gallery;
