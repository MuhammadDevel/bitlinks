import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    try {
        const body = await request.json();

        // Validate input
        if (!body.url || !body.shorturl) {
            return Response.json(
                { success: false, error: true, message: "Invalid input data" },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("url");

        await collection.createIndex({ Shorturl: 1 }, { unique: true });
        // Check if the short URL exists
        const doc = await collection.findOne({ Shorturl: body.shorturl });
        if (doc) {
            return Response.json(
                { success: false, error: true, message: "Short URL already exists" },
                { status: 409 } // Conflict status
            );
        }

        // Insert new short URL into the database
        const result = await collection.insertOne({
            url: body.url,
            Shorturl: body.shorturl,
        });

        return Response.json(
            { success: true, error: false, message: "URL Generated Successfully!" },
            { status: 201 } // Created status
        );
    } catch (error) {
        console.error("Error in /api/generate:", error.message);
        return Response.json(
            { success: false, error: true, message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
