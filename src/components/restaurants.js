import React from 'react';
import {MDBMedia} from "mdbreact";
export class Restaurants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {
                "Maleewan Thai Imbiss": [
                    "Sophiengutstrasse 1, Linz 4020 Austria",
                    "+43 732 662066",
                ],
                "Burgerei Linz":[
                    "Marktplatz 28 Südbahnhofmarkt, Linz 4020 Austria",
                    "+43 732 662660",
                    "Website: http://www.burgerei.at/"

                ],
                "Front Food": [
                    "Pfarrgasse 20 4020 Linz, Linz 4020 Austria",
                    "+43 732 232430",
                    "https://frontfood.at/"
                ]
            }
        }
    }
    render() {
        return (
                <div className="container-fluid mt-4 flex-column flex-center">
                    <MDBMedia style={{ maxWidth: "800px" }} className="mt-3">
                        <MDBMedia left top href="#">
                            <MDBMedia
                                object
                                src="/images/burger.png"
                                alt="Burgerei Linz"
                            />
                        </MDBMedia>
                        <MDBMedia body>
                            <MDBMedia heading>Burgerei Linz</MDBMedia>
                            <p>Address: Marktplatz 28 Südbahnhofmarkt, Linz 4020 Austria </p>
                            <p>Telephone: +43 732 662660</p>
                            <p>Website: http://www.burgerei.at/</p>
                        </MDBMedia>
                    </MDBMedia>
                    <MDBMedia style={{ maxWidth: "800px" }} className="mt-3">
                        <MDBMedia left top href="#">
                            <MDBMedia
                                object
                                src="/images/front.png"
                                alt="Front Food"
                            />
                        </MDBMedia>
                        <MDBMedia body>
                            <MDBMedia heading>Front Food</MDBMedia>
                            <p>Address: Pfarrgasse 20 4020 Linz, Linz 4020 Austria </p>
                            <p>Telephone: +43 732 232430</p>
                            <p>Website: http://www.frontfood.at/</p>
                        </MDBMedia>
                    </MDBMedia>
                    <MDBMedia style={{ maxWidth: "800px" }} className="mt-3">
                        <MDBMedia left top href="#">
                            <MDBMedia
                                object
                                src="/images/wok.png"
                                alt="Wokman"
                            />
                        </MDBMedia>
                        <MDBMedia body>
                            <MDBMedia heading>Wokman</MDBMedia>
                            <p>Address: Graben 36, Linz 4020 Austria </p>
                            <p>Telephone: +43 73232 6660</p>
                        </MDBMedia>
                    </MDBMedia>
                </div>

        );
    }

    hide() {

    }

}