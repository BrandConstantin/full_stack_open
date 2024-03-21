  sequenceDiagram
    participant Client
    participant Server

    Client->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate Server
    Server-->>Client: HTML document
    deactivate Server

    Client->>Server: Send data with the form
    loop Insert with "SAVE" button in Data Base

        Client->>Server: GET chrome-extension://oldceeleldhonbafppcapldpdifcinji/content.js
        activate Server
        Server-->>Client: the JavaScript file
        deactivate Server

        Client->>Server: GET https://fonts.googleapis.com/css2?family=Mulish:
        activate Server
        Server-->>Client: the css file
        deactivate Server

        Client->>Server: GET chrome-extension://oldceeleldhonbafppcapldpdifcinji/content/executor.js
        activate Server
        Server-->>Client: the JavaScript file
        deactivate Server
    end
    
    Note right of Client: The browser starts executing the JavaScript code that fetches the JSON from the server

    Client->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server-->>Client: [{ "content": "FullStack Open", "date": "2024-03-21" }, ... ]
    deactivate Server

    Note right of Client: The browser executes the callback function that renders the notes
