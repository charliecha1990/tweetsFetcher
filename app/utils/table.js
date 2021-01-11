export const createColumns = (columns) =>
    columns.map((e) => ({
        id: e,
        label: e,
    }))

export const createData = (listOfRawTweets = []) =>
    listOfRawTweets.map((e) => ({
        createdAt: e.created_at,
        content: e.text,
    }))
