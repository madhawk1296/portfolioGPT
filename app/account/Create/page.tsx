'use client';

import { useState } from "react";
import Container from "../Container";
import Input from "../Input";
import Terms from "../Terms";
import Button from "../Button";
import Accounts from "../Accounts";

export default function Create() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');


    return (
        <Container title="Create Account">
            <Input placeholder="Display Name" />
            <Input placeholder="Email Address" />
            <Input placeholder="Password" isPassword={true} />
            <Terms />
            <Button title="Create Account" />
            <Accounts />
        </Container>
    )
}