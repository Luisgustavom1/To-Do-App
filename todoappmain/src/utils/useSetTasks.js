import { SiteClient } from "datocms-client";

export default async function UseSetTasks(task, done, createSlug) {
    const token = process.env.REACT_APP_TOKEN
    const client = new SiteClient(token);

    await client.items.create({
        itemType: '1016794',
        task,
        done,
        createSlug,
    }).catch(err => console.log(err))
}