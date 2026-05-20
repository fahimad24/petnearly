import Icon from "@/app/components/Icon";
import EmptyRequests from "../../components/EmptyRequests";
import { RequestTable } from "../../components/RequestTable";
import { getAdoptionRequests, getSession } from "@/app/lib/action";

export default async function MyRequestsPage() {
  const { userId } = await getSession();

  const requests = await getAdoptionRequests({ userId });

  const pendingRequests = requests.filter(
    (request) => request.statReq === "Pending",
  );
  const approvedRequests = requests.filter(
    (request) => request.statReq === "Approved",
  );
  const rejectedRequests = requests.filter(
    (request) => request.statReq === "Rejected",
  );

  return (
    <main className="min-h-screen p-8">
      <div>
        <div className="py-1 px-3 rounded-2xl bg-accent/20 inline-flex items-center mb-4 text-center text-sm font-semibold text-accent/90 justify-center gap-2">
          <Icon src="/paw.png" alt="paw print" width={18} height={18}></Icon>
          <span className="font-bold">My Requests</span>
        </div>
        <h2 className="text-4xl font-black">
          My Adoption <span className="text-accent">Requests</span>
        </h2>
        <p className="text-lg text-light-text font-semibold mb-12">
          View and manage your pet adoption requests
        </p>
        {requests.length === 0 ? (
          <EmptyRequests></EmptyRequests>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-purple-300 rounded-lg shadow-md flex flex-col items-center gap-2">
              <p className="text-xl font-black">{requests.length}</p>
              <h3 className="text-xl font-black">Total</h3>
            </div>
            <div className="p-6 bg-amber-200 rounded-lg shadow-md flex flex-col items-center gap-2">
              <p className="text-xl font-black">{pendingRequests.length}</p>
              <h3 className="text-xl font-black">Pending</h3>
            </div>
            <div className="p-6 bg-green-300 rounded-lg shadow-md flex flex-col items-center gap-2">
              <p className="text-xl font-black">{approvedRequests.length}</p>
              <h3 className="text-xl font-black">Approved</h3>
            </div>
            <div className="p-6 bg-red-300 rounded-lg shadow-md flex flex-col items-center gap-2">
              <p className="text-xl font-black">{rejectedRequests.length}</p>
              <h3 className="text-xl font-black">Rejected</h3>
            </div>
          </div>
        )}
        <div className="mt-12">
          <RequestTable request={requests}></RequestTable>
        </div>
      </div>
    </main>
  );
}
