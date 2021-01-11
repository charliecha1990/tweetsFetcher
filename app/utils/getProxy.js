const endpoint = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=`
export const getProxy = (userName) =>
    `https://cors-anywhere.herokuapp.com/${endpoint}${userName}`
