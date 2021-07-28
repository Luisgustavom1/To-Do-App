import { SiteClient } from "datocms-client";

export default async function UseRemoveTask(id) {
    const token = process.env.REACT_APP_TOKEN
    const client = new SiteClient(token);

    await client.items.destroy(id)
    .catch(err => console.log(err))
}