export enum ErrorCode {
  Bad_Request = 400,
  Unauthorized = 401,
  Forbidden = 403,
  Not_Found = 404,
  Request_Timeout = 408,
  Conflict = 409,
  Internal_Server_Error = 500,
  Not_Implemented = 501,
  Bad_Gateway = 502,
  Service_Unavailable = 503,
  Gateway_Timeout = 504,
}

/**
 * 1xx Informational
 * This class of status code indicates a provisional response, consisting only of the Status-Line and optional headers, and is terminated by an empty line. There are no required headers for this class of status code. Since HTTP/1.0 did not define any 1xx status codes, servers MUST NOT send a 1xx response to an HTTP/1.0 client except under experimental conditions.
 *
 * A client MUST be prepared to accept one or more 1xx status responses prior to a regular response, even if the client does not expect a 100 (Continue) status message. Unexpected 1xx status responses MAY be ignored by a user agent.
 *
 * Proxies MUST forward 1xx responses, unless the connection between the proxy and its client has been closed, or unless the proxy itself requested the generation of the 1xx response. (For example, if a proxy adds a "Expect: 100-continue" field when it forwards a request, then it need not forward the corresponding 100 (Continue) response(s).)
 *
 * Wikipedia
 * Request received, continuing process.
 *
 * This class of status code indicates a provisional response, consisting only of the Status-Line and optional headers, and is terminated by an empty line. Since HTTP/1.0 did not define any 1xx status codes, servers must not send a 1xx response to an HTTP/1.0 client except under experimental conditions.
 * 100 Continue
 * 101 Switching Protocols
 * 102 Processing (WebDAV)
 *
 *
 * 2xx Success
 * This class of status code indicates that the client's request was successfully received, understood, and accepted.
 *
 * Wikipedia
 * This class of status codes indicates the action requested by the client was received, understood, accepted and processed successfully.
 *
 * 200 OK
 * 201 Created
 * 202 Accepted
 * 203 Non-Authoritative Information
 * 204 No Content
 * 205 Reset Content
 * 206 Partial Content
 * 207 Multi-Status (WebDAV)
 * 208 Already Reported (WebDAV)
 * 226 IM Used
 *
 *
 * 3xx Redirection
 * This class of status code indicates that further action needs to be taken by the user agent in order to fulfill the request. The action required MAY be carried out by the user agent without interaction with the user if and only if the method used in the second request is GET or HEAD. A client SHOULD detect infinite redirection loops, since such loops generate network traffic for each redirection.
 *
 * Note: previous versions of this specification recommended a maximum of five redirections. Content developers should be aware that there might be clients that implement such a fixed limitation.
 * Wikipedia
 * The client must take additional action to complete the request.
 *
 * This class of status code indicates that further action needs to be taken by the user agent in order to fulfil the request. The action required may be carried out by the user agent without interaction with the user if and only if the method used in the second request is GET or HEAD. A user agent should not automatically redirect a request more than five times, since such redirections usually indicate an infinite loop.
 *
 * 300 Multiple Choices
 * 301 Moved Permanently
 * 302 Found
 * 303 See Other
 * 304 Not Modified
 * 305 Use Proxy
 * 306 (Unused)
 * 307 Temporary Redirect
 * 308 Permanent Redirect (experimental)
 *
 *
 * 4xx Client Error
 * The 4xx class of status code is intended for cases in which the client seems to have erred. Except when responding to a HEAD request, the server SHOULD include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition. These status codes are applicable to any request method. User agents SHOULD display any included entity to the user.
 *
 * If the client is sending data, a server implementation using TCP SHOULD be careful to ensure that the client acknowledges receipt of the packet(s) containing the response, before the server closes the input connection. If the client continues sending data to the server after the close, the server's TCP stack will send a reset packet to the client, which may erase the client's unacknowledged input buffers before they can be read and interpreted by the HTTP application.
 *
 * Wikipedia
 * The 4xx class of status code is intended for cases in which the client seems to have erred. Except when responding to a HEAD request, the server should include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition. These status codes are applicable to any request method. User agents should display any included entity to the user.
 *
 * 400 Bad Request
 * 401 Unauthorized
 * 402 Payment Required
 * 403 Forbidden
 * 404 Not Found
 * 405 Method Not Allowed
 * 406 Not Acceptable
 * 407 Proxy Authentication Required
 * 408 Request Timeout
 * 409 Conflict
 * 410 Gone
 * 411 Length Required
 * 412 Precondition Failed
 * 413 Request Entity Too Large
 * 414 Request-URI Too Long
 * 415 Unsupported Media Type
 * 416 Requested Range Not Satisfiable
 * 417 Expectation Failed
 * 418 I'm a teapot (RFC 2324)
 * 420 Enhance Your Calm (Twitter)
 * 422 Unprocessable Entity (WebDAV)
 * 423 Locked (WebDAV)
 * 424 Failed Dependency (WebDAV)
 * 425 Reserved for WebDAV
 * 426 Upgrade Required
 * 428 Precondition Required
 * 429 Too Many Requests
 * 431 Request Header Fields Too Large
 * 444 No Response (Nginx)
 * 449 Retry With (Microsoft)
 * 450 Blocked by Windows Parental Controls (Microsoft)
 * 451 Unavailable For Legal Reasons
 * 499 Client Closed Request (Nginx)
 *
 *
 * 5xx Server Error
 * Response status codes beginning with the digit "5" indicate cases in which the server is aware that it has erred or is incapable of performing the request. Except when responding to a HEAD request, the server SHOULD include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition. User agents SHOULD display any included entity to the user. These response codes are applicable to any request method.
 *
 * Wikipedia
 * The server failed to fulfill an apparently valid request.
 *
 * Response status codes beginning with the digit "5" indicate cases in which the server is aware that it has encountered an error or is otherwise incapable of performing the request. Except when responding to a HEAD request, the server should include an entity containing an explanation of the error situation, and indicate whether it is a temporary or permanent condition. Likewise, user agents should display any included entity to the user. These response codes are applicable to any request method.
 *
 * 500 Internal Server Error
 * 501 Not Implemented
 * 502 Bad Gateway
 * 503 Service Unavailable
 * 504 Gateway Timeout
 * 505 HTTP Version Not Supported
 * 506 Variant Also Negotiates (Experimental)
 * 507 Insufficient Storage (WebDAV)
 * 508 Loop Detected (WebDAV)
 * 509 Bandwidth Limit Exceeded (Apache)
 * 510 Not Extended
 * 511 Network Authentication Required
 * 598 Network read timeout error
 * 599 Network connect timeout error
 */
