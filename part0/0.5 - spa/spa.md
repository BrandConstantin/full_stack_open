  sequenceDiagram
    participant Client
    participant Server

    Client->>Server: GET hhttps://studies.cs.helsinki.fi/exampleapp/spa
    activate Server
    Server-->>Client: HTML document
    deactivate Server

    Client->>Server: Send data with the form
    loop Insert with "SAVE" button in Data Base

        Client->>Server: GET chrome-extension://oldceeleldhonbafppcapldpdifcinji/content.js
        activate Server
        Server-->>Client: the JavaScript file
        deactivate Server

        Client->>Server: GET https://fonts.googleapis.com/css2?family=Mulish:wght@200;
        activate Server
        Server-->>Client: the css file
        deactivate Server

        Client->>Server: GET chrome-extension://oldceeleldhonbafppcapldpdifcinji/content/executor.js
        activate Server
        Server-->>Client: the JavaScript file
        deactivate Server

        Note right of Client: The browser starts executing the JavaScript code that fetches the JSON from the server

        Client->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
        activate Server
        Server-->>Client: Return JSON object
        deactivate Server

        Note right of Client: The browser executes the callback function that renders the notes
    end
