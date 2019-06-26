import React from 'react';
import {MDBContainer, MDBRow, MDBListGroup, MDBListGroupItem} from "mdbreact";

export class Journeys extends React.Component {

    render() {
        return (
            <MDBContainer>
                <MDBRow className="justify-content-center flex-column flex-center">

                    <MDBListGroup className="my-4 mx-4" style={{ width: "22rem" }}>
                        <MDBListGroupItem color="light">
                            <small className="text-muted">3 days ago</small>
                            <p>Launch your trip in Salzburg, with three days combing the back alleys and clambering up to the castle to outpomp all castles in Mozart's hometown. You might want to hook onto a Sound of Music tour or whizz up to the Alps from here. Or detour to Italianate Schloss Hellbrunn or Hallein's salt works." - Lena, Germany </p>

                        </MDBListGroupItem>
                        <MDBListGroupItem color="info">
                            <small className="text-muted">6 days ago</small>
                            <p>"From lakeside St Wolfgang or St Gilgen, it’s a short bus hop to Bad Ischl, a cracking base for exploring other lakes in the Salzkammergut over the next three days. The most dramatic of these is the Hallstätter See, with Hallstatt or more laid back (but less historic) Obertraun perfect for overnighting. Near Obertraun, take in Dachstein's surreal ice caves on a cable-car ride and tack on a hike in the area." - Markus, Austria
                            </p></MDBListGroupItem>
                        <MDBListGroupItem color="dark">
                            <small className="text-muted">one week ago</small>
                            <p>
                                "For a food, wine and culture focus, plan more time around Graz in Styria. For swimming and other activities, plan more time for Carinthia." - Antonio, Italy
                            </p>
                        </MDBListGroupItem>

                        <MDBListGroupItem color="light">
                            <small className="text-muted">10 days ago</small>
                            <p>"Start with a few days in laid-back Innsbruck. Stroll the historic Altstadt (old town), taking in its galleries, Habsburg treasures and upbeat nightlife. On the third day, take the futuristic funicular to the Nordkette, or eyeball Olympic ski jump, Bergisel. From Innsbruck, go south for scenic skiing in the Stubai Glacier or west to the exquisite baroque abbey in Stams." - Monique, USA
                            </p>
                        </MDBListGroupItem>
                        <MDBListGroupItem color="info">
                            <small className="text-muted">13 days ago</small>
                            <p>"From Hallstatt, either venture to Salzburg, a pristine, castle-topped baroque city, for a Mozart and Maria fix, or stop off in lakeside Zell am See, where hiking trails thread among some of Austria's highest peaks, before continuing to Innsbruck for a dose of culture, hiking, skiing – whatever takes your fancy." - Vania, Poland
                            </p>
                        </MDBListGroupItem>
                    </MDBListGroup>
                </MDBRow>
            </MDBContainer>
        );
    }

    hide() {

    }

}