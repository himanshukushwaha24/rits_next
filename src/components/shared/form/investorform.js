import { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { CardBody } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Alert from "react-bootstrap/Alert";
import countryCodes from "../../../country-codes/country-codes.json";

function InvestorForm() {
  // State to manage form inputs
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Prepare the payload
    const payload = {
      name: name,
      email: email,
      contact: countryCode + contact,
      message: message,
      website: "ritscapital.com",
    };

    try {
      // Send the data to the API
      const rawResponse = await fetch(
        // "https://api.khubero.com/website/contact",
        "http://localhost:5000/send-email",
        // `${process.env.NEXT_PUBLIC_API_URL}/send-email`,
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

      console.log("Contact:", contact);
      setShowSuccess(true);
      setName("");
      setContact("");
      setEmail("");
      setMessage("");

      console.log("Response Content:", content);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div
        id="investor-form"
        className="investor_right flex-1 p-0 md:p-5 md:-mt-[-5px]"
      >
        <Card className="w-full md:w-[400px] mt-8 md:mt-0 shadow-lg">
          <CardBody className="w-full">
            {showSuccess && (
              <Alert
                variant="success"
                onClose={() => setShowSuccess(false)}
                dismissible
              >
                Your message has been sent successfully!
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label className="px-2 py-2">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="light-placeholder w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="contact">
                <Form.Label className="px-2 py-2">Cell Number</Form.Label>
                <div className="d-flex gap-2 align-items-center">
                  <Form.Select
                    aria-label="Country code"
                    className="flex"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    style={{ width: "80px" }} // Adjusted for mobile view
                  >
                    {countryCodes.map((country) => (
                      <option
                        className="flex justify-between"
                        key={country.code}
                        value={country.dial_code}
                      >
                        {country.dial_code}
                       
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Control
                    type="text"
                    placeholder=""
                    className="light-placeholder"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    style={{ flex: "1" }}
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label className="px-2 py-2">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  className="light-placeholder"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label className="px-2 py-2">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder=""
                  className="light-placeholder h-[100px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="w-full pt-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full bg-[#353546] flex items-center justify-center"
                  type="submit"
                >
                  Send
                  <Image
                    src="/icon/Vector.png"
                    alt="Arrow Icon"
                    width={8}
                    height={8}
                    className="ml-2"
                  />
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default InvestorForm;
