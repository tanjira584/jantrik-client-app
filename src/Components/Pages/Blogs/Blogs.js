import React, { useState } from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";

const Blogs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const products = [
        {
            name: "This is product 1",
            price: 20,
            desc: "This is product desc 1",
        },
        {
            name: "This is product 2",
            price: 10,
            desc: "This is product desc 2",
        },
        {
            name: "This is product 3",
            price: 15,
            desc: "This is product desc 3",
        },
    ];
    const handleSearch = (e) => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };
    return (
        <div>
            <Header></Header>
            <div className="container-md py-5">
                <div className="blogs">
                    <div className="blog p-3 border mb-4">
                        <div className="question">
                            <h4>
                                How will you improve the performance of a React
                                Application?
                            </h4>
                        </div>
                        <div className="answer">
                            <h5>Answer:</h5>
                            <ul>
                                <li>
                                    {" "}
                                    1. Detecting wasted Renders in a React 16
                                    using React performance optimization tools.
                                </li>
                                <li>
                                    2. Detecting unnecessary rendering of
                                    components by using “Why did you update”
                                    library.
                                </li>
                                <li>
                                    3. React performance tuning by fixing
                                    unnecessary rendering of components in
                                    React.
                                </li>
                                <li>
                                    4. Implementing shouldComponentUpdate for
                                    preventing unnecessary renders.
                                </li>
                                <li>
                                    5. mproving performance due to unnecessary
                                    renders using PureComponent.
                                </li>
                                <li>
                                    6. Preventing wasted Renders in React with
                                    Immutable.js.
                                </li>
                                <li>
                                    7. Identifying problematic bundles for a
                                    React based PWA.
                                </li>
                                <li>
                                    8. Optimizing the Javascript bundle with
                                    Gzip compression.
                                </li>
                                <li>
                                    9. Optimizing the app loading time further
                                    with Code splitting.
                                </li>
                                <li>10. React performance with SSR.</li>
                                <li>
                                    11. Improving the app’s loading time by lazy
                                    loading Images.
                                </li>
                                <li>
                                    12. Optimizing list rendering with React
                                    Virtualized List
                                </li>
                                <li>
                                    13. Optimizing React list performance by
                                    using correct keys for components
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog p-3 border mb-4">
                        <div className="question">
                            <h4>
                                What are the different ways to manage a state in
                                a React application?
                            </h4>
                        </div>
                        <div className="answer">
                            <h5>Answer: </h5>
                            <p className="mb-2">
                                When we talk about state in our applications,
                                it’s important to be clear about what types of
                                state actually matter.
                            </p>
                            <p className="mb-2">
                                There are four main types of state you need to
                                properly manage in your React apps:
                            </p>
                            <ul className="m-0 p-0">
                                <li>
                                    <span className="fw-bold">
                                        1. Local state:{" "}
                                    </span>{" "}
                                    Local state is data we manage in one or
                                    another component. Local state is most often
                                    managed in React using the useState hook.
                                </li>
                                <li>
                                    <span className="fw-bold">
                                        2. Global state:{" "}
                                    </span>
                                    Global state is data we manage across
                                    multiple components. Global state is
                                    necessary when we want to get and update
                                    data anywhere in our app, or in multiple
                                    components at least.
                                </li>
                                <li>
                                    <span className="fw-bold">
                                        3. Server state:{" "}
                                    </span>
                                    Data that comes from an external server that
                                    must be integrated with our UI state. Server
                                    state is a simple concept, but can be hard
                                    to manage alongside all of our local and
                                    global UI state.
                                </li>
                                <li>
                                    <span className="fw-bold">
                                        4. URL state:{" "}
                                    </span>
                                    Data that exists on our URLs, including the
                                    pathname and query parameters. URL state is
                                    often missing as a category of state, but it
                                    is an important one. In many cases, a lot of
                                    major parts of our application rely upon
                                    accessing URL state. Try to imagine building
                                    a blog without being able to fetch a post
                                    based off of its slug or id that is located
                                    in the URL!
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog p-3 border mb-4">
                        <div className="question">
                            <h4>How does prototypical inheritance work?</h4>
                        </div>
                        <div className="answer">
                            <h5>Answer: </h5>
                            <p>
                                JavaScript does not have classes unlike other
                                languages. It uses the concept of prototypes and
                                prototype chaining for inheritance. Prototypal
                                inheritance is all about objects. Objects
                                inherit properties from other objects. In
                                prototypal inheritance, instead of defining the
                                structure through a class, you simply create an
                                object. This object then gets reused by new
                                objects . Instances are typically instantiated
                                via factory functions or Object.create() method.
                                Instances may be composed from many different
                                objects, allowing for easy selective
                                inheritance. It is more flexible than Classic
                                Inheritance . Any existing object can become a
                                class from which additional objects will be
                                spawned. This is handy where your objects offer
                                several sets of services and/or they undergo a
                                lot of state transformation before your program
                                arrives at the point where the inheritance is
                                needed.
                            </p>
                            <p>
                                <span className="fw-bold">Example: </span>When
                                you attempt to access a property or method of an
                                object, JavaScript will first search on the
                                object itself, and if it is not found, it will
                                search the object’s [[Prototype]]. If after
                                consulting both the object and its [[Prototype]]
                                still no match is found, JavaScript will check
                                the prototype of the linked object, and continue
                                searching until the end of the prototype chain
                                is reached. At the end of the prototype chain is
                                Object.prototype. All objects inherit the
                                properties and methods of Object. Any attempt to
                                search beyond the end of the chain results in
                                null.
                            </p>
                        </div>
                    </div>
                    <div className="blog p-3 border mb-4">
                        <div className="question">
                            <h4>
                                Why you do not set the state directly in React.
                            </h4>
                        </div>
                        <div className="answer">
                            <h5>Answer: </h5>
                            <p className="mb-2">
                                While a React component can have initial state,
                                the real power is in updating its state — after
                                all, if we didn't need to update the state, the
                                component shouldn't have any state. State is
                                only reserved for data that changes in our
                                component and is visible in the UI.
                            </p>
                            <p>
                                Instead of directly modifying the state using
                                this.state, we use this.setState(). This is a
                                function available to all React components that
                                use state, and allows us to let React know that
                                the component state has changed. This way the
                                component knows it should re-render, because its
                                state has changed and its UI will most likely
                                also change. Using a setter function like this
                                is very performant. While other frameworks like
                                Angular.js use "dirty checking" (continuously
                                checking for changes in an object) to see if a
                                property has changed, React already knows
                                because we use a built-in function to let it
                                know what changes we'd like to make!
                            </p>
                        </div>
                    </div>
                    <div className="blog p-3 border mb-4">
                        <div className="question">
                            <h4>
                                What is a unit test? Why should write unit
                                tests?
                            </h4>
                        </div>
                        <div className="answer">
                            <h5>What is a unit test?</h5>
                            <p className="mb-2">
                                Unit testing is performed during the coding
                                stage of a software development project to test
                                individual units of the application. It’s
                                designed to test that each unit of the software
                                code performs as required. A unit might be a
                                class or class method in object-oriented
                                languages and a procedure or function in
                                procedural and functional software languages.
                            </p>
                            <p>
                                Unit tests need to run quickly, so they run in
                                isolation without external processes or systems.
                            </p>

                            <h5>Why should write unit tests?</h5>
                            <p className="mb-2">
                                Unit testing saves time and money by fixing
                                problems early in the development process, as
                                opposed to later during system testing,
                                integration testing, and even beta testing.
                            </p>
                            <p className="mb-2">
                                Other benefits of unit testing include:
                            </p>
                            <ul>
                                <li>
                                    1. It gives developers insight into the
                                    testing code base, so they can make any code
                                    changes quickly.
                                </li>
                                <li>
                                    2. More bugs caught early in the process
                                    enables the development team to spend less
                                    time debugging later and more time creating
                                    value with their work.
                                </li>
                                <li>
                                    3. New team members can get up to speed more
                                    easily, without having to worry about
                                    damaging existing code, because any problems
                                    will be caught quickly.
                                </li>
                                <li>
                                    4. A well-constructed unit test can be used
                                    as documentation, which is updated each time
                                    the test is run.
                                </li>
                                <li>
                                    5. Because each unit test is a standalone
                                    function, it can test different parts of a
                                    project without waiting for others to be
                                    completed.
                                </li>
                                <li>
                                    6. Catching errors while working on part of
                                    a project makes it easier to solve problems
                                    quickly since you’re already focused on the
                                    task.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;
