import { SiteClient } from "datocms-client";

export default async function UseUpdateTask(id, value) {
    const token = process.env.REACT_APP_TOKEN
    const client = new SiteClient(token);

    await client.items.update(id, {
        done: value
    })
    .catch(err => console.log(err))
}