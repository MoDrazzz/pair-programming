# Pair Programming Challenge

```bash
npm install
npm run dev
```

Since we've talked, I managed to implement all the tasks we established:
- Pagination is based on search params. 'Previous' and 'Next' buttons are conditionally disabled.
- Data is prefetched using React Router loaders, but for some reason errors weren't detected despite query errors (caused by wrong URL entered). That's the reason why I used Response api.
- Error page is displayed for cases like:
  - `episodes?page=6` (pages exceeded)
  - `episodes?page=loremipsum` (page is not a number)
  - `episodes/123` | `episodes/loremipsum` (no episode of specified ID)