import React from 'react'
import { Button, Card, CardBody, Form } from 'react-bootstrap'
import EventSlider from '../eventslider'

const Mobieventsright = () => {
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

                    <Form>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label></Form.Label>
                        <Form.Control className="w-full"
                          type="email"
                          placeholder="Enter your email address"
                        />
                      </Form.Group>
                      <Button className="w-full " variant="success">
                        Subscribe for upcoming events
                      </Button>
                    </Form>
                  </Card>
                  {/* <EventSlider/> */}
                </div>
    </>
  )
}

export default Mobieventsright