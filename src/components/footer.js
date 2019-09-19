import React from 'react';
import {MDBContainer, MDBFooter, MDBRow,MDBCol} from "mdbreact";

export class Footer extends React.Component {

    render() {
        return (
            <MDBContainer>
                <MDBFooter color="default-color" className="font-small pt-4 mt-4">
                    <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow>
                            <MDBCol md="6">
                                <h5 className="title">Voyageur Austria</h5>
                                <p>
                                  Voyageur is an app made by students, for students.
                                </p>
                            </MDBCol>
                            <MDBCol md="6">
                                <h5 className="title">Authors</h5>
                                <ul>
                                    <li className="list-unstyled">
                                        <a href="https://github.com/MLucaciu">Lucaciu Mircea-Tiberiu</a>
                                    </li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBFooter>
            </MDBContainer>
        );
    }
    hide() {
    }
}
