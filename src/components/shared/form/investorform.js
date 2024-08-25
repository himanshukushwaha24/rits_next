import { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { CardBody } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Alert from "react-bootstrap/Alert";

function InvestorForm() {
  // State to manage form inputs
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Prepare the payload
    const payload = {
      name: name,
      email: email,
      sponsor: "contact-" + contact,
      message:  " contact-" + contact+" message"+message,
      website: "ritscapital",
    };

    try {
      // Send the data to the API
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
      <div id="investor-form" className="investor_right flex-1 p-5 -mt-[30px]">
        <Card className="w-full md:w-[400px] mt-8 md:mt-0 shadow-lg">
          <CardBody>
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
                  placeholder="Full Name"
                  className="light-placeholder"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="contact">
                <Form.Label className="px-2 py-2">Mobile</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="+91 000 000 0000"
                  className="light-placeholder"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label className="px-2 py-2">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ashu@dev.com"
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
                  placeholder="Your Message"
                  className="light-placeholder h-[100px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="w-full h-auto pt-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-100 bg-[#353546] flex items-center justify-center"
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
