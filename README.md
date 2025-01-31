# Things to do think about during API consumption

- How many APIs will I need to consume ?
- What are their base URLs ?
- How do I authenticate with each one ? Library, protocol.
- Do they support HTTPS ? Do they enforce HTTPS ?
- How can I break down my API consumption code into modules ?
- How to obtain, store and read auth token ?
- How to provide auth token to API consuming code ?
- How is auth token transfered to server ?
- For each API what are the main entities that it manages ? How are they connected ?
- Which patterns can you spot in this or that API ?


How do I ensure security aspects ?
- HTTPS
- CORS
- Credentials/AuthToken in transit and at rest
- XSS/CSRF


## Auth & Security
### Obtaining auth token
S: What is the auth token and how do I obtain and store it ?
- Which protocol is used for authentication ?
- Which server does the authentication ?
- Which library is used to obtain the auth token ?
- What credentials are used for auth ?
- Are user credentials stored/transfered in a secure way ?
- How is the authentication token stored and read/written to?
- Is the auth token transfered/stored in a secure way ?

### Using the auth token
- How to integrate the auth token into the API-calling code ?
- How is the auth token sent to the resource server ? Cookie, header, other ?
- How do we guarantee that the auth token is transfered in a secure way ?
- Have all common security risks/traps been avoided ?

### Other
- Is authentication implementation secure ?
- Is there a risk of stolen credentials at rest ? (XSS)
- Is there a risk of stolen credentials in transit ?
- Is there a risk of CSRF ?
- Is expected HTTPS use guaranteed ?

### CORS
- Will the BE allow consumption from all planned deployment origins ?

### Cookies
- Which cookies are being set ?
- Are all of them set in a secure way ?
- Will all cookies work in all planned deployment envs ?
- Does my library send cookies same origin or cross-origin also ?

### Localstorage
- Is any sensitive data stored in localstorage ?

## Useful features of API consuming libs

# Axios
## Global config
- Easier to use different HTTP methods
- Can retry requests -> with interceptors or axiosRetry
- Set base URL
- Set request timeout
- Set request headers
- Set request cookies
- Set interceptors
- Set XSRF cookie
- Works in node.js

## Other
- Throws error automatically on non 2XX


# ReactQuery, RTK, SWR
## Basics
- No need to write data/loading/error useState/useEffect boilerplate
- Automatic retry on failure
- Caches data and avoids duplicate data fetch

## Caching
- Pagination support
- Cache invalidation
- Prefetch
- Polling/Auto-refetch

## 2+ queries
- Parallel queries -> Dynamic parallel queries
- Conditional queries
- Dependent queries
- Infinite scroll

## Mutations
- Mutations
- Optimistic UI updates with rollback

## Other
- Error boundaries integration
- Selectors for cached data
- DevTools
- Suspense support
- Websockets/Subscriptions
- Background sync (when user goes back to window)
- Hydration SSR/ISR support


