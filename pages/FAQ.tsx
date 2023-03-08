import React, { useState } from "react";
import { Container, Text } from "@nextui-org/react";
import Wrapper from "./wrapper";

function ContactForm() {
    return (
        <Wrapper title="FAQ">
            <Container>
                <Text h1>What should I bring?</Text>
            </Container>
        </Wrapper>
    );
}

export default ContactForm;
