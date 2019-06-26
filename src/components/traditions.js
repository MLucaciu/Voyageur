import React from 'react';
import {
    MDBContainer,
    MDBCardGroup,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCard,
    MDBBtn,
    MDBRow, MDBBtnGroup
} from "mdbreact";
import {CameraComponent} from "./camera";
import ReactDOM from "react-dom";
import {Footer} from "./footer";

export class Traditions extends React.Component {

    render() {
        return (
            <MDBContainer>
                <MDBContainer className="pb-5">
                    <MDBRow center>
                        <div className="btn-toolbar justify-content-sm-center blue-gradient" role="toolbar" aria-label="Toolbar with button groups">
                            <MDBBtnGroup className="mr-2">
                                <MDBBtn className="blue-gradient" onClick={this.takePhoto}>Take Photo</MDBBtn>
                            </MDBBtnGroup>
                        </div>
                    </MDBRow>
                </MDBContainer>
                <MDBCardGroup>
                    <MDBCard>
                        <MDBCardImage
                            src="/images/egg.png"
                            alt="MDBCard image cap"
                            top
                            hover
                            overlay="white-slight"
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">Easter Egg battle</MDBCardTitle>
                            <MDBCardText>
                                A common Easter tradition in Austria is the Easter egg battle during the family Easter breakfast or brunch. Coloured hard-boiled eggs are served along with a cake in the shape of a lamb. Before people at the table eat their eggs, a battle ensues. Each player holds their egg with the tip pointing up and prepares for battle. The first player to start hits another egg tip with his own egg, with the goal of breaking the shell of the other egg. The winner then goes around the table and tries his luck with the other players. The winner of the battle is whoever is left with an egg that is still intact.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        <MDBCardImage
                            src="/images/cow.png"
                            alt="MDBCard image cap"
                            top
                            hover
                            overlay="white-slight"
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">Autumn Cow train</MDBCardTitle>
                            <MDBCardText>
                                his event is held annually in the Alpine regions in Austria. Every summer, around 500,000 cows in Austria are led high up into the mountains so they can feed on pastures in the Alps. Around October, there is usually one specific day where all the cows are brought down in the form of a cow train from the mountain to the stables in the valley. Many of the cows are decorated and the cow train is celebrated with music and dance, if there were no accidents on the mountain during the summer. Each cow is returned to their owner once the cows get back into the valley. These days it has evolved into a festival-like event in most alpine towns where artisan and agricultural products are sold.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        <MDBCardImage
                            src="/images/school.png"
                            alt="MDBCard image cap"
                            top
                            hover
                            overlay="white-slight"
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">First day of school cone</MDBCardTitle>
                            <MDBCardText>
                                An Austrian tradition, with roots in German history, is the cone of goodies handed to children on the first day of school. When six-year-olds start school for the first time, usually in first grade, they are given a big cardboard cone. Either parents or grandparents are tasked with giving the child a decorated cone filled with candy, toys and school supplies. Originally the cone would be brought to the school and it would be hung up on a cone tree marked with their name. Kids would be told a story that at school a tree is growing with cones and when it is ripe, the kids are old enough and need to go to school. This is supposed to make the first day of school, which can often be a stressful time for a child, a little more fun.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCardGroup>

                <MDBCardGroup deck className="mt-3">
                    <MDBCard>
                        <MDBCardImage
                            src="/images/bride.png"
                            alt="MDBCard image cap"
                            top
                            hover
                            overlay="white-slight"
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">Stealing the Bride</MDBCardTitle>
                            <MDBCardText>
                                Stealing the bride is a very old Austrian tradition when it comes to weddings. The tradition is seen as both entertaining but also has the symbolic meaning that the bride is leaving her family home and starting a whole new portion of her life with her husband. Friends of the bride and groom interrupt the wedding by crashing the party to kidnap or steal the bride. For a certain amount of time no one at the wedding should notice that the bride has gone missing, so the kidnappings are elaborately planned out. The kidnappers then take the bride and go from bar to bar in the local area, buying drinks along the way. Then the groom has to go find the bride. Once the groom finds his bride, he needs to pay a ransom to get her back; this usually involves him buying a round of drinks.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCardGroup>
            </MDBContainer>
        );
    }

    takePhoto() {
        ReactDOM.render(<CameraComponent />, document.getElementById('camera'));
    }

}