
import clientPromise from "@/lib/mongodb"
export async function POST(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")
    // check if the short URl exist
    const doc = await collection.findOne({ Shorturl: body.shorturl })
    if (doc) {
        return Response.json({ success: false, error: true, message: 'Short URL already exists' })
    }
    // insert new short URL to the database
    const result = await collection.insertOne({
        url: body.url,
        Shorturl: body.shorturl
    })

    return Response.json({ success: true, error: false, message: 'URL Generate SuccesFully!' })
}
