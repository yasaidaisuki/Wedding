import React, { useState } from "react";
import { Card, Container, Text, Spacer } from "@nextui-org/react";
import Wrapper from "../components/page-wrapper";

function ContactForm() {
    return (
        <Wrapper title="FAQ">
            <Container>
                <Card variant="bordered">
                    <Card.Header>
                        <Text b>
                            What should I wear? Is there a dress code?
                        </Text>
                    </Card.Header>
                    <Card.Body>
                        <Text>
                            The dress code for our wedding is
                            semi-formal/cocktail attire.
                        </Text>
                    </Card.Body>
                </Card>
                <Spacer y={1} />
                <Card variant="bordered">
                    <Card.Header>
                        <Text b>
                            Will the ceremony and reception be indoors or
                            outdoors?
                        </Text>
                    </Card.Header>
                    <Card.Body>
                        <Text>
                            The ceremony will be hosted outdoor if the weather
                            permits so remeber to put on your sunscreen!
                        </Text>
                    </Card.Body>
                </Card>
                <Spacer y={1} />
                <Card variant="bordered">
                    <Card.Header>
                        <Text b>What time should I arrive?</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text>
                            The ceremony starts at 5:30 PM but we We recommend
                            that you arrive half an hour before the start of the
                            ceremony, to make sure everyone is on time and we
                            can get the party started as scheduled!
                        </Text>
                    </Card.Body>
                </Card>
                <Spacer y={1} />
                <Card variant="bordered">
                    <Card.Header>
                        <Text b>
                            Where should guests park? Is parking free?
                        </Text>
                    </Card.Header>
                    <Card.Body>
                        <Text>
                            There is free parking at the Paradise Banquet Hall.
                        </Text>
                    </Card.Body>
                </Card>
                <Spacer y={1} />
                <Card variant="bordered">
                    <Card.Header>
                        <Text b>Are kids welcome?</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text>
                            While we love your little ones, our wedding is going
                            to be an adults-only event so that everyone can
                            relax and enjoy the evening. We appreciate you
                            making arrangements ahead of time and leaving the
                            kids at home so you can celebrate with us.
                        </Text>
                    </Card.Body>
                </Card>
                <Spacer y={1} />
                <Card variant="bordered">
                    <Card.Header>
                        <Text b>What happens after the ceremony?</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text>
                            After the ceremony, the bridal party will be taking
                            pictures nearby for around half an hour. Guests can
                            head straight to the reception hall where we will be
                            serving finger foods and beverages.
                        </Text>
                    </Card.Body>
                </Card>
            </Container>
        </Wrapper>
    );
}

export default ContactForm;
