import Link from "next/link";

const humanDate = (isoOrId) => {
  if (!isoOrId) return "-";
  // if looks like ObjectId hex (24 hex chars), extract timestamp
  if (/^[0-9a-fA-F]{24}$/.test(isoOrId)) {
    try {
      const ts = parseInt(isoOrId.substring(0, 8), 16) * 1000;
      return new Date(ts).toLocaleString();
    } catch (e) {
      return isoOrId;
    }
  }
  try {
    const d = new Date(isoOrId);
    if (isNaN(d.getTime())) return isoOrId;
    return d.toLocaleString();
  } catch {
    return isoOrId;
  }
};

export default async function MyRequestsPage() {
  const base = process.env.NEXT_PUBLIC_URL || `http://localhost:3000`;
  const res = await fetch(`${base}/api/adoption-requests`, { cache: 'no-store' });
  const requests = (await res.json()) || [];

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">My Requests</h1>
        <p className="text-sm text-muted mb-6">List of adoption requests submitted.</p>

        <div className="overflow-x-auto bg-white border border-secondary/20 rounded-lg shadow-sm">
          <table className="min-w-full table-auto">
            <thead className="bg-neutral/50">
              <tr>
                <th className="text-left px-4 py-3">Pet Name</th>
                <th className="text-left px-4 py-3">Request Date</th>
                <th className="text-left px-4 py-3">Pickup Date</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-left px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-muted">No requests found.</td>
                </tr>
              )}
              {requests.map((r) => (
                <tr key={r._id} className="border-t">
                  <td className="px-4 py-3">{r.name || r.petName || '—'}</td>
                  <td className="px-4 py-3">{humanDate(r._id)}</td>
                  <td className="px-4 py-3">{humanDate(r.date)}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      r.statReq === 'Approved' ? 'bg-green-100 text-green-700' : r.statReq === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-800'
                    }`}>{r.statReq || 'Pending'}</span>
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/all-pets/${r.petId}`} className="text-primary hover:underline">View Pet</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
