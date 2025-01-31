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
- Parallel queries
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


