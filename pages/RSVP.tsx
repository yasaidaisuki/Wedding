import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
    Container,
    Input,
    Radio,
    Textarea,
    Button,
    Row,
    Spacer,
} from "@nextui-org/react";
import confetti from "canvas-confetti";
import Wrapper from "./wrapper";

function ContactForm() {
    const [state, handleSubmit] = useForm("mzbqvpkn");
    const [attending, setAttending] = useState("");
    const [plus, setPlus] = useState("");

    const handleConfetti = () => {
        confetti();
    };

    return (
        <Wrapper title="RSVP">
            <Container>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <Container>
                        <Row align="center">
                            <Input
                                id="name"
                                name="name"
                                clearable
                                label="Full Name"
                                placeholder="full ame"
                                required={true}
                            />
                        </Row>
                        <Spacer y={1} />
                        <Row align="center">
                            <Radio.Group
                                id="attendance"
                                name="attendance"
                                label="Are you joining us?"
                                onChange={setAttending}
                            >
                                <Radio value="Yes">Yes</Radio>
                                <Radio value="No">No</Radio>
                            </Radio.Group>
                        </Row>
                        <Spacer y={1} />
                        <Row align="center">
                            {attending === "Yes" && (
                                <Radio.Group
                                    id="plusOneAttendance"
                                    name="plusOneAttendance"
                                    label="Do you have another guest with you?"
                                    onChange={setPlus}
                                >
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                                </Radio.Group>
                            )}
                        </Row>
                        <Spacer y={1} />
                        <Row align="center">
                            {plus === "Yes" && attending === "Yes" && (
                                <Input
                                    id="plusOneName"
                                    name="plusOneName"
                                    clearable
                                    label="Plus One Full Name"
                                    placeholder="plus one full name"
                                    required={true}
                                />
                            )}
                        </Row>
                        <Spacer y={1} />
                        <Row align="center">
                            <Textarea
                                id="message"
                                name="message"
                                label="Leave us a message!"
                                placeholder="leave us a message"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </Row>
                        <Spacer y={1} />
                        <Row align="center">
                            <Button
                                shadow
                                color="gradient"
                                auto
                                type="submit"
                                disabled={state.submitting || state.succeeded}
                                onClick={handleConfetti}
                            >
                                Send now
                            </Button>
                        </Row>
                    </Container>
                </form>
            </Container>
        </Wrapper>
    );
}

export default ContactForm;
