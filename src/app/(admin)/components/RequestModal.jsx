import { getAdoptionRequests } from "@/app/lib/action";
import { Button, Modal } from "@heroui/react";
import { CiCircleCheck } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

export function RequestModal({ petId }) {
  const handleFetchRequests = async () => {
    try {
      const requests = await getAdoptionRequests(petId);
      console.log("Adoption Requests:", requests);
    } catch (error) {
      console.error("Error fetching adoption requests:", error);
    }
  };
  return (
    <Modal>
      <Button
        onPress={handleFetchRequests}
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
            <div className="bg-secondary/20 border border-secondary/90 p-4 rounded-xl">
              <Modal.Body className=" space-y-1.5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-black text-dark-text">ahmed</h3>
                    <p>gamail.com</p>
                  </div>
                  <span className="bg-yellow-500/20 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <MdOutlineAccessTime size={10} />
                    pending
                  </span>
                </div>
                <div className="flex justify-between">
                  <p>Pickup: 2023-10-10</p>
                  <p>Request: 2023-10-17</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-accent/30">
                  <p className="text-sm text-dark-text">
                    Notes: The adopter is interested in adopting a specific pet
                    and has provided additional information about their living
                    situation.
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  slot="close"
                  variant="secondary"
                  className="w-full rounded-none bg-primary/90 hover:bg-primary/80 transition-colors text-white "
                >
                  <CiCircleCheck size={10} />
                  Approve
                </Button>
                <Button
                  slot="close"
                  className="w-full rounded-none bg-red-500/30 hover:bg-red-600 transition-colors text-red-500 border border-red-500  "
                >
                  <TiDeleteOutline size={10} />
                  Reject
                </Button>
              </Modal.Footer>
            </div>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
