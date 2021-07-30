import { SiteClient } from "datocms-client";

export default async function UseRemoveCompleted(ids) {
    const token = process.env.REACT_APP_TOKEN
    const client = new SiteClient(token);

    const tasksCompleteRemoved = await client.items.bulkDestroy({
        items: [
            ...ids
        ]
    }).catch(err => console.log(err))

    return tasksCompleteRemoved
}