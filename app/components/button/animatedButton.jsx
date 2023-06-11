"use client"

import Button from "./button";
import Contact from "../contact/contact";
import { useState } from "react";

const AnimatedButton = ({ text }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Button text={text} onClick={() => setOpen(true)} />
            {open && <Contact setContactOpen={setOpen} />}
        </>
    )
}

export default AnimatedButton;