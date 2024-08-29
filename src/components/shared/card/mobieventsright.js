import React from 'react'
import { Button, Card, CardBody, Form, Alert } from 'react-bootstrap'
import EventSlider from '../eventslider'
import { useState, useEffect } from "react";

const Mobieventsright = () => {

  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create payload with only email
    const payload = { email: email };

    try {
      const rawResponse = await fetch(
        "https://api.khubero.com/website/contact",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const content = await rawResponse.json();
      console.log("Response:", content);
      setSuccessMessage(
        "Thank you! You have successfully subscribed to upcoming events."
      );
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage(
        "Sorry, there was an error with your submission. Please try again."
      );
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 2000); // 2000ms = 2 seconds

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or successMessage changes
    }
  }, [successMessage]);


  return (
    <>
     <div className="eventmobi w-full block md:hidden">
                  <Card className="w-full bg-white shadow-md border-none">
                    {/* <Image
                    src="/assets/events/events1.png"
                    alt="Event Image"
                    width={500}
                    height={300}
                    layout="responsive"
                    className="rounded-t-md"
                  /> */}
                    <CardBody>
                      <EventSlider />
                    </CardBody>

                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label></Form.Label>
                        <Form.Control className="w-full"
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Button className="w-full " variant="success" type="submit">
                        Subscribe for upcoming events
                      </Button>
                    </Form>
                    {successMessage && (
                    <Alert
                      variant={
                        successMessage.startsWith("Thank")
                          ? "success"
                          : "danger"
                      }
                      className="mt-3"
                    >
                      {successMessage}
                    </Alert>
                  )}
                  </Card>
                  {/* <EventSlider/> */}
                </div>
    </>
  )
}

export default Mobieventsright