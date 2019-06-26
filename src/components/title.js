import React from 'react';
import {
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask,
    MDBContainer,
    MDBRow, MDBBtnGroup, MDBBtn
} from "mdbreact";
import ReactDOM from "react-dom";
import {Location} from "./location";
export class Title extends React.Component {
    render() {
        return (
            <MDBContainer className="pb-5">
            <h1 className="text-justify font-weight-bold mt-5 mb-3">Voyageur</h1>
            <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
            >
            <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
            <MDBView>
            <img
        className="d-block w-100"
        src="/images/insbruck.png"
        alt="first slide"
            />
            </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
            <MDBView>
                <img
                    className="d-block w-100"
                    src="/images/salzburg.png"
                    alt="Wien"
                />
            </MDBView>
            <MDBCarouselCaption>
                <h3 className="h3-responsive">Salzburg</h3>
            </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
            <MDBView>
            <img
        className="d-block w-100"
        src="/images/halstatt.png"
        alt="Third slide"
            />
            <MDBMask overlay="black-slight" />
            </MDBView>
        <MDBCarouselCaption>
            <h3 className="h3-responsive">Hallstatt</h3>
        </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
            <MDBView>
                <img
                    className="d-block w-100"
                    src="/images/tyrol.png"
                    alt="Innsbruck"
                />
            </MDBView>
        </MDBCarouselItem>
        </MDBCarouselInner>
    </MDBCarousel>
                <MDBRow center>
                    <div className="btn-toolbar" aria-label="Toolbar with button groups">
                        <MDBBtnGroup className="mr-2">
                            <MDBBtn onClick={Title.locateMe} href="#locate-me">Locate Me!</MDBBtn>
                        </MDBBtnGroup>
                    </div>
                </MDBRow>

    <hr/>
            </MDBContainer>
        );
    }

    static locateMe() {
        ReactDOM.render(<Location />, document.getElementById('locate-me'));
    }
}