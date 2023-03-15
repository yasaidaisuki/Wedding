import React, { useState, useEffect } from "react";
import {
    Container,
    Input,
    Radio,
    Textarea,
    Button,
    Row,
    Spacer,
    Text,
} from "@nextui-org/react";
import confetti from "canvas-confetti";
import Wrapper from "../components/page-wrapper";
import {
    guest,
    isNameOnGuestList,
    addToGuestList,
} from "../firebase/useFireStore";
import { textGradientCSS } from "../styles/globalStyle";

function ContactForm() {
    const [fullName, setFullName] = useState("");
    const [plusName, setPlusName] = useState("");
    const [message, setMessage] = useState("");

    const [attending, setAttending] = useState("");
    const [plusAttending, setPlusAttending] = useState("");
    const [findRequestSubmitted, setFindRequestSubmitted] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [foundGuest, setFoundGuest] = useState(false);

    useEffect(() => {}, []);

    const handleConfetti = () => {
        if (
            (fullName !== "" && attending == "No") ||
            (fullName !== "" && attending == "Yes" && plusAttending == "No") ||
            (fullName !== "" &&
                attending == "Yes" &&
                plusAttending == "Yes" &&
                plusName !== "")
        ) {
            confetti();
        }
    };
    const handleFind = (e) => {
        isNameOnGuestList(fullName).then((resGuest) => {
            if (resGuest !== null) {
                setFoundGuest(true);
                setFullName(resGuest.fullName);
                setPlusName(resGuest.plusOneName);
                setAttending(resGuest.attending ? "Yes" : "No");
                setSubmitted(true);
            }
            setFindRequestSubmitted(true);
        });
        e.preventDefault();
    };

    const handleRSVP = (e) => {
        const guestEntry = new guest(
            fullName,
            plusName,
            attending === "Yes",
            message
        );

        // check if name exists in colletion

        isNameOnGuestList(fullName).then((resGuest) => {
            if (resGuest !== null) {
                setFoundGuest(true);
                setFullName(resGuest.fullName);
                setPlusName(resGuest.plusOneName);
                setAttending(resGuest.attending ? "Yes" : "No");
                setSubmitted(true);
            } else {
                addToGuestList(guestEntry).then((res) => {
                    setSubmitted(true);
                });
            }
        });

        // add to collection

        // addToDB(guestEntry).then((res) => {
        //     // check res
        //     setSubmitted(true);
        // });

        e.preventDefault();
    };

    const errorInForm = (
        <div>
            <Spacer y={2} />
            <Text>Woops there's something wrong.</Text>
            <Spacer y={2} />
            <Button
                shadow
                color="gradient"
                auto
                onClick={() => {
                    window.location.reload();
                }}
            >
                Click me to retry!
            </Button>
            <Spacer y={2} />
        </div>
    );

    const guestForm = (title) => (
        <div>
            <Spacer y={2} />
            <Text h1 size={30} css={textGradientCSS} weight="bold">
                {title}
            </Text>
            <Spacer y={2} />
            {attending === "Yes" && (
                <div>
                    <Text>
                        Thank you for joining us!
                        <Spacer y={2} />
                        <Text h1 size={20} css={textGradientCSS} weight="bold">
                            {plusName !== ""
                                ? fullName + " & " + plusName
                                : fullName}
                        </Text>
                        <Spacer y={2} />
                        We are looking forward to meeting you on our ceremony!
                    </Text>
                </div>
            )}
            {attending === "No" && (
                <div>
                    <Text>
                        Sorry to hear that you will not be joinning us...
                        <Spacer y={2} />
                        <Text h1 size={20} css={textGradientCSS} weight="bold">
                            {fullName}
                        </Text>
                        <Spacer y={2} />
                        We will still be in touch!
                    </Text>
                </div>
            )}
            <Spacer y={2} />
        </div>
    );

    const fullRSVPForm = (
        <form className="contact-form" onSubmit={handleRSVP}>
            <Container>
                <Row align="center">
                    <Text h1 size={20} css={textGradientCSS} weight="bold">
                        We dont have you on our list yet!
                    </Text>
                </Row>
                <Spacer y={1} />
                <Row align="center">
                    <Input
                        id="name"
                        name="name"
                        clearable
                        label="What's Your Full Name?"
                        placeholder="full ame"
                        initialValue={fullName}
                        required={true}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </Row>
                <Spacer y={1} />
                <Row align="center">
                    <Radio.Group
                        id="attendance"
                        name="attendance"
                        label="Are you joining us?"
                        onChange={setAttending}
                        isRequired
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
                            onChange={setPlusAttending}
                            isRequired
                        >
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                        </Radio.Group>
                    )}
                </Row>
                <Spacer y={1} />
                <Row align="center">
                    {plusAttending === "Yes" && attending === "Yes" && (
                        <Input
                            id="plusOneName"
                            name="plusOneName"
                            clearable
                            label="Plus One Full Name"
                            placeholder="plus one full name"
                            required={true}
                            onChange={(e) => setPlusName(e.target.value)}
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
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Row>
                <Spacer y={1} />
                <Row align="center">
                    <Button
                        shadow
                        color="gradient"
                        auto
                        type="submit"
                        onClick={handleConfetti}
                        disabled={submitted}
                    >
                        Send now
                    </Button>
                </Row>
            </Container>
        </form>
    );

    const defaultRSVPForm = (
        <form className="contact-form" onSubmit={handleFind}>
            <Container>
                <Row align="center">
                    <Input
                        id="name"
                        name="name"
                        clearable
                        label="What's Your Full Name?"
                        placeholder="full ame"
                        required
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </Row>
                <Spacer y={1} />
                <Row align="center">
                    <Button
                        shadow
                        color="gradient"
                        auto
                        type="submit"
                        disabled={submitted}
                    >
                        Find
                    </Button>
                </Row>
                <Spacer y={2} />
            </Container>
        </form>
    );

    return (
        <Wrapper title="RSVP">
            <Container>
                {submitted
                    ? foundGuest
                        ? guestForm("We Found You!")
                        : guestForm("Thank you for your submission!")
                    : findRequestSubmitted
                    ? fullRSVPForm
                    : defaultRSVPForm}
            </Container>
        </Wrapper>
    );
}

export default ContactForm;
