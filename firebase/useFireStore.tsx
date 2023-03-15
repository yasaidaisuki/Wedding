import exp from "constants";
import {
    collection,
    doc,
    addDoc,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { firestore } from "../firebase/config";

const FORM_DB_NAME = "form";

export class guest {
    fullName: string;
    plusOneName: string;
    attending: boolean;
    message: string;

    constructor(fullName, plusOneName, attending, message) {
        this.fullName = fullName.toUpperCase();
        this.plusOneName = plusOneName.toUpperCase();
        this.attending = attending;
        this.message = message;
    }
    toString() {
        return (
            this.fullName +
            ", " +
            this.plusOneName +
            ", " +
            this.attending +
            ", " +
            this.message
        );
    }
}

// Firestore data converter
export const formEntryConverter = {
    toFirestore: (formEntry) => {
        return {
            Name: formEntry.fullName.toUpperCase(),
            PlusOneName: formEntry.plusOneName,
            Attending: formEntry.attending,
            Message: formEntry.message,
        };
    },
    fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new guest(
            data.Name,
            data.PlusOneName.toUpperCase(),
            data.Attending,
            data.Message
        );
    },
};

export async function addToGuestList(guest: guest) {
    try {
        const docRef = await addDoc(
            collection(firestore, FORM_DB_NAME),
            formEntryConverter.toFirestore(guest)
        );
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function isNameOnGuestList(name: string) {
    const q = query(
        collection(firestore, "form"),
        where("Name", "==", name.toUpperCase())
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.size > 0) {
        const resGuest = formEntryConverter.fromFirestore(
            querySnapshot.docs[0]
        );
        return resGuest;
    }
    return null;
}
