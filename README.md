# CMS Frontend Engineer Coding Challenge

###### Headless CMS provider repository can be found at: <https://github.com/irackson/cms-filestore>

---

## Deliverable

1. Set up a one-way data flow state management library such as **Redux** or Flux

2. Set up and make an API request to https://raw.githubusercontent.com/irackson/cms-filestore/main/routes.json to retrieve the valid routes your application should support, and store this value in the data store set up in _step 1_. If this API request fails, the application should default to directing all traffic to `/maintenance`. NOTE: The application must be dynamic so the URL used to request the routes can change at any point in time.

3. Any requests outside the routes provided in the API response should display the first route provided.

4. Create a header navigation which includes each of the URLs from the routes response using their value from the map as the name. This header should appear on every page.

5. When loading a particular route, the content for the route should be loaded from a JSON file located relative to the route. For example if the provided route is `/about-us` then the relevant JSON file will be `/about-us.json` or if the route is `/products/1bn23` the relevant JSON file is `/products/1bn23.json`. These paths are relative to the domain/path provided in _step 2_.

6. The JSON content files will utilize various components which will need to be rendered by your application code. Examples of these components and a description of various options for them are found below.

7. Add some outline, drop shadow, and a hover effect to each of the "cards" on the bios page.

8. Add some styling around each of the books on the books page, including some alignment changes for the text and title of the books.

9. Below 600px of width, the cards on the bios page should be displayed 2 per row as opposed to their default 3 per row.

### Components

#### Rich Text Component

-   type: "rich-text"
-   textType: "plain" | "html"
-   className: this value is sometimes provided to help with specific styling needs as needed, to target specific elements
-   text: this field will contain either plain text or escaped HTML, according to the textType property, and will need to be rendered as
-   text or as HTML accordingly. If it is rendered as plain text, it should be rendered within a paragraph tag.
-   style: "uppercase", etc. - If this is set, then the value should be passed through to the text-transform CSS property on the container.

#### Container Component

_This component should be rendered as a flex container ( display: flex ), and will default to the same default values as a flex_

-   type: "container"
-   items: [] - this will be an array of other components, which could include another container component.
-   className: this value is sometimes provided to help with specific styling needs as needed, to target specific elements
-   flexDirection: value provided should be passed to the flex-direction css property on the container
-   flexWrap: value provided should be passed to the flex-wrap css property on the container
-   justifyContent: value provided should be passed to the justify-content css property on the container
-   alignItems: value provided should be passed to the align-items css property on the container
-   width: relative width to parent container (e.g. 0.3 would be 30% the width of its parent)

#### Image Component

_If the image cannot be loaded, then a 100x100 placeholder from placeholder.com should be utilized. https://placeholder.com/#How_To_Use_Our_Placeholders Images should set align-self: center; to avoid scaling in flex containers._

-   type: "image"
-   className: this value is sometimes provided to help with specific styling needs as needed, to target specific elements
-   alt: "string" - alt text
-   height: if provided, it should be set as the max-height for the image element
-   src: string value which provides the URL that should be displayed as an image

<!-- title -->

Headless CMS Consumer

<!-- description -->

A React/Redux SPA that fetches and dynamically renders content from each of the RESTful routes marked as available by the Headless CMS at run-time.

<!-- live url -->

<https://redux-headless-cms.ianrackson.com/>

<!-- repo url -->

<https://github.com/irackson/redux-headless-cms>

<!-- thumbnail -->

<https://i.imgur.com/9c0UuC6.png>

<!-- [![wakatime](https://wakatime.com/badge/github/irackson/redux-headless-cms.svg)](https://wakatime.com/badge/github/irackson/redux-headless-cms) -->
