"use client";

import { updatePetStatus, updateRequestStatus } from "@/app/lib/action-client";
import { Button, cn, Modal, toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

export function RequestModal({ petId }) {
  const [requests, setRequests] = useState([]);
  const router = useRouter();

  // fetch adoption requests for the pet
  const handleFetchRequests = async (petId) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;
      const res = await fetch(`${API_URL}/adopt-pet/pet/${petId}`);
      if (!res.ok) {
        console.error("Failed to fetch adoption requests, status:", res.status);
        return;
      }
      const data = await res.json();
      setRequests(data);
    } catch (error) {
      console.error("Error fetching adoption requests:", error);
    }
  };

  const handleApprove = async (petId, requestId, status) => {
    // Update pet status in All-pets
    const res = await updatePetStatus(
      petId,
      status === "Approved" ? "Adopted" : "Available",
    );
    // Update request status in adoption requests
    const res2 = await updateRequestStatus(requestId, status);
    if (res.ok && res2.ok) {
      toast.success(`Request ${status.toLowerCase()} and pet status updated!`);
      handleFetchRequests(petId);
      router.refresh();
    } else {
      toast.error(
        `Failed to ${status.toLowerCase()} request or update pet status.`,
      );
    }
  };

  return (
    <Modal>
      <Button
        onPress={() => handleFetchRequests(petId)}
        isIconOnly
        className="bg-accent text-white hover:bg-accent/80 transition-colors"
        title="View Requests"
      >
        <FaUserPen size={18} />
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-100 ">
            <Modal.Header className="flex-row items-center gap-1.5 mb-3">
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaUserFriends size={18} />
              </Modal.Icon>
              <Modal.Heading className="font-black">
                Adoption Requests
              </Modal.Heading>
            </Modal.Header>
            {requests.length === 0 ? (
              <p className="text-center text-light-text py-10">
                No adoption requests for this pet yet.
              </p>
            ) : (
              requests.map((request) => (
                <div
                  key={request._id}
                  className="bg-secondary/20 border border-secondary/90 p-4 rounded-xl mb-3"
                >
                  <Modal.Body className=" space-y-1.5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-black text-dark-text">
                          {request.username}
                        </h3>
                        <p>{request.email}</p>
                      </div>
                      <span
                        className={cn(
                          "bg-yellow-500/20 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1",
                          request.statReq === "Approved" &&
                            "bg-green-500/20 text-green-900",
                          request.statReq === "Rejected" &&
                            "bg-red-500/20 text-red-900",
                        )}
                      >
                        <MdOutlineAccessTime size={10} />
                        {request.statReq}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <p>Pickup: {request.pickUpDate}</p>
                      <p>Request: {request.requestDate}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-accent/30">
                      <p className="text-sm text-dark-text">
                        {request.message}
                      </p>
                    </div>
                  </Modal.Body>
                  {request.statReq === "Pending" && (
                    <Modal.Footer>
                      <Button
                        onPress={() =>
                          handleApprove(petId, request._id, "Approved")
                        }
                        variant="secondary"
                        className="w-full rounded-none bg-primary/90 hover:bg-primary/80 transition-colors text-white "
                      >
                        <CiCircleCheck size={10} />
                        Approve
                      </Button>
                      <Button
                        onPress={() =>
                          handleApprove(petId, request._id, "Rejected")
                        }
                        className="w-full rounded-none bg-red-500/30 hover:bg-red-600 transition-colors text-red-500 border border-red-500  "
                      >
                        <TiDeleteOutline size={10} />
                        Reject
                      </Button>
                    </Modal.Footer>
                  )}
                </div>
              ))
            )}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
