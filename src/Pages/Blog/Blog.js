import React from 'react';

const Blog = () => {
    return (
        <div className='my-20'>
            <div data-theme="valentine" className='text-xl shadow-xl rounded-lg mb-5 p-5'>
                <h2 className='animate-bounce font-bold'>Difference between SQL and NoSQL</h2>
                <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                    <br />
                    There are five practical differences between SQL and NoSQL: <br />
                    <p>
                        1.Language <br />
                        2.Scalability <br />
                        3.Structure <br />
                        4.Properties <br />
                        5.Support and communities
                    </p>
                </p>
            </div>
            <div data-theme="valentine" className='text-xl shadow-xl rounded-lg mb-5 p-5'>
                <h2 className='animate-bounce font-bold'>What is JWT? and how does it work?</h2> <br />
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                </p>
                <h2 className='animate-bounce font-bold'>how does it work?</h2> <br />
                <p>
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings: <br />
                    1.The header and the payload. <br />
                    2 The signature. <br />
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </p>
            </div>

            <div data-theme="valentine" className='text-xl shadow-xl rounded-lg mb-5 p-5'>
                <h2 className='animate-bounce font-bold'>What is the difference between javascript and NodeJS?</h2>
                <br />
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
                </p>
                <p>
                    Node. js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
                </p>
            </div>
            <div data-theme="valentine" className='text-xl shadow-xl rounded-lg mb-5 p-5'>
                <h2 className='animate-bounce font-bold'>How does NodeJS handle multiple requests at the same time?</h2>
                <br />
                <p>
                    How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
                </p>

            </div>

        </div>
    );
};

export default Blog;