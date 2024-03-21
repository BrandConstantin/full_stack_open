sequenceDiagram
    participant Client
    participant Server
    Client->>Server: Insert new element
    loop HealthCheck
        John->>John: Fight against hypochondria
    end
    Note right of John: The server response
    John-->>Alice: Great!
    Server->>Client: content.js
    Server->>Client: css2.css
    Server->>Client: executor.js
    Server-->>Client: Console with the new element inserted
