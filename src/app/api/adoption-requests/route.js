import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL);

export async function GET() {
  try {
    if (!client.topology || !client.topology.isConnected()) {
      await client.connect();
    }
    const db = client.db('petsdata');
    const coll = db.collection('adoptionRequests');
    const requests = await coll.find({}).toArray();
    return new Response(JSON.stringify(requests), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Failed to fetch adoption requests', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
