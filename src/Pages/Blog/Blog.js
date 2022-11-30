import React from "react";

const Blog = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl my-10">Blogs</h2>
        <div className="space-y-4">
          <details className="w-full border rounded-lg" open="">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-orange-600 text-2xl font-semibold">
              What are the different ways to manage a state in a React
              application?
            </summary>

            <div className="p-10">
              <h2>
                5 Types of Application State in React and How They Help in State
                Management
              </h2>
              <div>
                <h2 className="text-xl font-bold">1 . Communication State</h2>
                <p>
                  Communication state forms the backbone of your React Native
                  app without you even knowing about it. Remember when you had
                  requested a call back to an HTTP request? That's when you
                  introduced the communication system in your app.
                  <br />
                  Communication plays a crucial role in storing information in
                  different states. It covers essential aspects of an
                  application such as loading spinners, error messages, pop-ups,
                  and many others which showcases that a communication link has
                  been formed. Communication state is the “loading phase” of the
                  transactions between different states. It stores the following
                  information when used in a React app: <br /> 1. The error
                  messages, given that the request failed or the transaction was
                  not completed. <br /> 2. The type, selector, and expected
                  change of operations requested. <br /> 3. The type of data
                  requested to access or expect to receive.
                  <br />
                  <br />
                  With the Communication state, you can now access the state of
                  the request without setting any particular command (like
                  setState (saving : trueorfalse )). For example, you can see
                  where your transaction is moving: retrieving, updating,
                  sending, receiving, failed, etc. without having to set any
                  command to determine the true or false value for a request.
                  <br />
                  <br />
                  Communication state is accessible from anywhere using Connect.
                  It can be independently stored and managed by Redux.
                </p>
              </div>
            </div>
          </details>

          <details className="w-full border rounded-lg" open="">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-orange-600 text-2xl font-semibold">
              What is a unit test? Why should we write unit tests?
            </summary>

            <div className="grid md:grid-cols-2 gap-6 px-5">
              <div>
                <p className="text-base text-gray-900">
                  A unit test is a way of testing a unit - the smallest piece of
                  code that can be logically isolated in a system. In most
                  programming languages, that is a function, a subroutine, a
                  method or property. The isolated part of the definition is
                  important. In his book "Working Effectively with Legacy Code",
                  author Michael Feathers states that such tests are not unit
                  tests when they rely on external systems: “If it talks to the
                  database, it talks across the network, it touches the file
                  system, it requires system configuration, or it can't be run
                  at the same time as any other test." Modern versions of unit
                  testing can be found in frameworks like JUnit, or testing
                  tools like TestComplete. Look a little further and you will
                  find SUnit, the mother of all unit testing frameworks created
                  by Kent Beck, and a reference in chapter 5 of The Art of
                  Software Testing . Before that, it's mostly a mystery. I asked
                  Jerry Weinberg about his experiences with unit testing -- "We
                  did unit testing in 1956. As far as I knew, it was always
                  done, as long as there were computers".
                </p>
              </div>
            </div>
          </details>
          <details className="w-full border rounded-lg" open="">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-orange-600 text-2xl font-semibold">
              How does prototypical inheritance work?
            </summary>

            <div className="grid md:grid-cols-2 gap-6 px-5">
              <div>
                <p className="text-base text-gray-900">
                  Every object with its methods and properties contains an
                  internal and hidden property known as [[Prototype]]. The
                  Prototypal Inheritance is a feature in javascript used to add
                  methods and properties in objects. It is a method by which an
                  object can inherit the properties and methods of another
                  object. Traditionally, in order to get and set the
                  [[Prototype]] of an object, we use Object.getPrototypeOf and
                  Object.setPrototypeOf. Nowadays, in modern language, it is
                  being set using
                </p>
                <br />
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png"
                  alt=""
                />
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
