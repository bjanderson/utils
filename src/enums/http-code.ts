export enum HttpCode {
  NO_RESPONSE = 0,

  CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  PROCESSING__WEBDAV__ = 102,

  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,
  MULTI_STATUS__WEBDAV__ = 207,
  ALREADY_REPORTED__WEBDAV__ = 208,
  IM_USED = 226,

  MULTIPLE_CHOICES = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  USE_PROXY = 305,
  UNUSED = 306,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT__EXPERIMENTAL__ = 308,

  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  REQUEST_ENTITY_TOO_LARGE = 413,
  REQUEST_URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  REQUESTED_RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  IM_A_TEAPOT__RFC_2324__ = 418,
  ENHANCE_YOUR_CALM__TWITTER__ = 420,
  UNPROCESSABLE_ENTITY__WEBDAV__ = 422,
  LOCKED__WEBDAV__ = 423,
  FAILED_DEPENDENCY__WEBDAV__ = 424,
  RESERVED_FOR_WEBDAV = 425,
  UPGRADE_REQUIRED = 426,
  PRECONDITION_REQUIRED = 428,
  TOO_MANY_REQUESTS = 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  NO_RESPONSE__NGINX__ = 444,
  RETRY_WITH__MICROSOFT__ = 449,
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS__MICROSOFT__ = 450,
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  CLIENT_CLOSED_REQUEST__NGINX__ = 499,

  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
  VARIANT_ALSO_NEGOTIATES__EXPERIMENTAL__ = 506,
  INSUFFICIENT_STORAGE__WEBDAV__ = 507,
  LOOP_DETECTED__WEBDAV__ = 508,
  BANDWIDTH_LIMIT_EXCEEDED__APACHE__ = 509,
  NOT_EXTENDED = 510,
  NETWORK_AUTHENTICATION_REQUIRED = 511,
  NETWORK_READ_TIMEOUT_ERROR = 598,
  NETWORK_CONNECT_TIMEOUT_ERROR = 599,
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
