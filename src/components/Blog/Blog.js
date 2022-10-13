import React from 'react';

const Blog = () => {
    return (
      <div className="text-white mt-7 text-center p-10">
        <h1 className="text-5xl">Question And Answer</h1>
        <div className="my-5">
          <h2 className="text-xl">
            1. What is the main perpose of React Router?
          </h2>
          <p className="">
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application. React Router is a state container for the current
            location , or URL. It keeps track of the location and renders
            different Route's as it changes, and it also gives you tools to
            update the location using Link and the history API. The application
            will contain three components: home component, about a component,
            and contact component. We will use React Router to navigate between
            these components.
          </p>
        </div>
        <hr />
        <div className="my-5">
          <h2 className="text-xl">2. How does Context API work?</h2>
          <p className="">
            Context is a built-in API introduced in React 16.3 . The React
            Context API is a way for a React app to effectively produce global
            variables that can be passed around. This is the alternative to
            "prop drilling" or moving props from grandparent to child to parent,
            and so on.Context provides a way to pass data or state through the
            component tree without having to pass props down manually through
            each nested component. The React Context API is a way for a React
            app to effectively produce global variables that can be passed
            around. This is the alternative to "prop drilling" or moving props
            from grandparent to child to parent, and so on. Context is also
            touted as an easier, lighter approach to state management using
            Redux.
          </p>
        </div>
        <hr />
        <div className="my-5">
          <h2 className="text-xl">3. How does useRef() actually work?</h2>
          <p className="">
            useRef() hook creates references. Calling const reference =
            useRef(initialValue) with the initial value returns a special object
            named reference. The reference object has a property current : We
            can use this property to read the reference value reference. current
            , or update reference.
          </p>
        </div>
      </div>
    );
};

export default Blog;