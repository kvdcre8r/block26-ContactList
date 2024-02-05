import { useState, useEffect } from "react"
import ContactList from "./ContactList";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null)
    useEffect(() => {
        async function fetchContacts() {
            try {
                console.log(selectedContactId)
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                console.log(result);
                setContact(result);
                setSelectedContactId(result.id);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts();
    }, [selectedContactId]);

    return (
        <>
            {contact && (
                <>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                </>
            )}
        </>
    )
}