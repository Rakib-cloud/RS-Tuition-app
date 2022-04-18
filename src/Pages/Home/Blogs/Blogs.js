import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                        Simply said, authentication is the process of confirming a person's identity, whereas authorization is the process of confirming a user's access to certain apps, files, and data. The scenario is similar to that of an airline deciding which passengers are allowed to board.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        By giving safe access to the database directly from client-side code, the Firebase Realtime Database allows you to create complicated, interactive solutions. Data is stored locally, and realtime events continue to trigger even when the user is offline, providing a responsive experience.That's why i use firebase.<br />
                        A user name and password are often used to authenticate a server. Cards, retina scans, voice recognition, and fingerprints are some of the other ways to authenticate.
                    </Accordion.Body>
                </Accordion.Item>



                <Accordion.Item eventKey="1">
                    <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                        Firebase is more relaxing components .Here so many works are easy and also more comfortable from any other things.Firebase gives so many authentication system .Besides it also gives us hosting support and so many on.
                        Firebase Alternatives  Top 5+ Competitors:
                        1.Parse  Open Source Backend Platform;
                        2.Back4app Parse Hosting Platform;
                        3.Kinvey  Mobile Backend as a Service (mBaaS) for the Enterprise;

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;