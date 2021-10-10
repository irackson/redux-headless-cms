const Landing = () => {
    return (
        <>
            <article class="markdown-body">
                <h1 class="atx" id="cms-frontend-engineer-coding-challenge">
                    CMS Frontend Engineer Coding Challenge
                </h1>
                <hr />
                <h2 class="atx" id="deliverable">
                    Deliverable
                </h2>
                <ol>
                    <li>
                        <p>
                            Set up a one-way data flow state management library
                            such as <strong>Redux</strong> or Flux
                        </p>
                    </li>
                    <li>
                        <p>
                            Set up and make an API request to{' '}
                            <a href="https://raw.githubusercontent.com/irackson/cms-filestore/main/routes.json">
                                https://raw.githubusercontent.com/irackson/cms-filestore/main/routes.json
                            </a>{' '}
                            to retrieve the valid routes your application should
                            support, and store this value in the data store set
                            up in <em>step 1</em>. If this API request fails,
                            the application should default to directing all
                            traffic to <code>/maintenance</code>. NOTE: The
                            application must be dynamic so the URL used to
                            request the routes can change at any point in time.
                        </p>
                    </li>
                    <li>
                        <p>
                            Any requests outside the routes provided in the API
                            response should display the first route provided.
                        </p>
                    </li>
                    <li>
                        <p>
                            Create a header navigation which includes each of
                            the URLs from the routes response using their value
                            from the map as the name. This header should appear
                            on every page.
                        </p>
                    </li>
                    <li>
                        <p>
                            When loading a particular route, the content for the
                            route should be loaded from a JSON file located
                            relative to the route. For example if the provided
                            route is <code>/about-us</code> then the relevant
                            JSON file will be <code>/about-us.json</code> or if
                            the route is <code>/products/1bn23</code> the
                            relevant JSON file is{' '}
                            <code>/products/1bn23.json</code>. These paths are
                            relative to the domain/path provided in{' '}
                            <em>step 2</em>.
                        </p>
                    </li>
                    <li>
                        <p>
                            The JSON content files will utilize various
                            components which will need to be rendered by your
                            application code. Examples of these components and a
                            description of various options for them are found
                            below.
                        </p>
                    </li>
                    <li>
                        <p>
                            Add some outline, drop shadow, and a hover effect to
                            each of the "cards" on the bios page.
                        </p>
                    </li>
                    <li>
                        <p>
                            Add some styling around each of the books on the
                            books page, including some alignment changes for the
                            text and title of the books.
                        </p>
                    </li>
                    <li>
                        <p>
                            Below 600px of width, the cards on the bios page
                            should be displayed 2 per row as opposed to their
                            default 3 per row.
                        </p>
                    </li>
                </ol>
                <h3 class="atx" id="components">
                    Components
                </h3>
                <h4 class="atx" id="rich-text-component">
                    Rich Text Component
                </h4>
                <ul>
                    <li>
                        <p>type: "rich-text"</p>
                    </li>
                    <li>
                        <p>textType: "plain" | "html"</p>
                    </li>
                    <li>
                        <p>
                            className: this value is sometimes provided to help
                            with specific styling needs as needed, to target
                            specific elements
                        </p>
                    </li>
                    <li>
                        <p>
                            text: this field will contain either plain text or
                            escaped HTML, according to the textType property,
                            and will need to be rendered as
                        </p>
                    </li>
                    <li>
                        <p>
                            text or as HTML accordingly. If it is rendered as
                            plain text, it should be rendered within a paragraph
                            tag.
                        </p>
                    </li>
                    <li>
                        <p>
                            style: "uppercase", etc. - If this is set, then the
                            value should be passed through to the text-transform
                            CSS property on the container.
                        </p>
                    </li>
                </ul>
                <h4 class="atx" id="container-component">
                    Container Component
                </h4>
                <p>
                    <em>
                        This component should be rendered as a flex container (
                        display: flex ), and will default to the same default
                        values as a flex
                    </em>
                </p>
                <ul>
                    <li>
                        <p>type: "container"</p>
                    </li>
                    <li>
                        <p>
                            items: [] - this will be an array of other
                            components, which could include another container
                            component.
                        </p>
                    </li>
                    <li>
                        <p>
                            className: this value is sometimes provided to help
                            with specific styling needs as needed, to target
                            specific elements
                        </p>
                    </li>
                    <li>
                        <p>
                            flexDirection: value provided should be passed to
                            the flex-direction css property on the container
                        </p>
                    </li>
                    <li>
                        <p>
                            flexWrap: value provided should be passed to the
                            flex-wrap css property on the container
                        </p>
                    </li>
                    <li>
                        <p>
                            justifyContent: value provided should be passed to
                            the justify-content css property on the container
                        </p>
                    </li>
                    <li>
                        <p>
                            alignItems: value provided should be passed to the
                            align-items css property on the container
                        </p>
                    </li>
                    <li>
                        <p>
                            width: relative width to parent container (e.g. 0.3
                            would be 30% the width of its parent)
                        </p>
                    </li>
                </ul>
                <h4 class="atx" id="image-component">
                    Image Component
                </h4>
                <p>
                    <em>
                        If the image cannot be loaded, then a 100x100
                        placeholder from placeholder.com should be utilized.{' '}
                        <a href="https://placeholder.com/#How_To_Use_Our_Placeholders">
                            https://placeholder.com/#How_To_Use_Our_Placeholders
                        </a>{' '}
                        Images should set align-self: center; to avoid scaling
                        in flex containers.
                    </em>
                </p>
                <ul>
                    <li>
                        <p>type: "image"</p>
                    </li>
                    <li>
                        <p>
                            className: this value is sometimes provided to help
                            with specific styling needs as needed, to target
                            specific elements
                        </p>
                    </li>
                    <li>
                        <p>alt: "string" - alt text</p>
                    </li>
                    <li>
                        <p>
                            height: if provided, it should be set as the
                            max-height for the image element
                        </p>
                    </li>
                    <li>
                        <p>
                            src: string value which provides the URL that should
                            be displayed as an image
                        </p>
                    </li>
                </ul>
            </article>
        </>
    );
};

export default Landing;
