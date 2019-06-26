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
        src="http://onebigphoto.com/uploads/2013/09/lovely-innsbruck-austria.jpg"
        alt="first slide"
            />
            </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
            <MDBView>
                <img
                    className="d-block w-100"
                    src="http://onebigphoto.com/uploads/2015/03/winter-in-salzburg-austria.jpg"
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
        src="http://onebigphoto.com/uploads/2014/03/amazing-hallstatt-village-austria.jpg"
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
                    src="http://onebigphoto.com/uploads/2013/01/a-day-outside-tyrol-austria.jpg"
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