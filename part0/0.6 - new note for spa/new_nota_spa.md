  sequenceDiagram
    participant Client
    participant Server

    Client->>Server: GET hhttps://studies.cs.helsinki.fi/exampleapp/spa
    activate Server
    Server-->>Client: HTML document
    deactivate Server

    Client->>Server: Send data with the form
    loop Insert with "SAVE" button in Data Base
    Note right of Client: The browser starts executing the JavaScript code that fetches the JSON from the server

        Client->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
        activate Server
        Server-->>Client: Return {"message":"note created"} and add the new data to JSON object (in my case FullStack Open)
        deactivate Server

    end

    Note right of Client: The browser executes the callback function that renders the notes
