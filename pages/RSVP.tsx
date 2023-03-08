import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
    Card,
    Container,
    Input,
    Radio,
    Textarea,
    Button,
} from "@nextui-org/react";
import confetti from "canvas-confetti";
import Wrapper from "./wrapper";

function ContactForm() {
    const [state, handleSubmit] = useForm("mzbqvpkn");
    const [attending, setAttending] = useState("");
    const [plus, setPlus] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const hasPlusOne = false;

    const rsvpForm = {};

    const handleConfetti = () => {
        confetti();
    };

    return (
        <Wrapper title="RSVP">
            <Container>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <Input
                        id="name"
                        name="name"
                        clearable
                        label="Full Name"
                        placeholder="full ame"
                        required={true}
                    />
                    <Radio.Group
                        id="attendance"
                        name="attendance"
                        label="Are you joining us?"
                        onChange={setAttending}
                    >
                        <Radio value="Yes">Yes</Radio>
                        <Radio value="No">No</Radio>
                    </Radio.Group>

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
                </form>
            </Container>
        </Wrapper>
    );
}

export default ContactForm;
