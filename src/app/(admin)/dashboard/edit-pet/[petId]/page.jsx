import { getPetById } from "@/app/lib/action";
import PetForm from "../../../components/PetForm";

const EditPetPage = async ({ params }) => {
  const { petId } = await params;
  const pet = await getPetById(petId);
  console.log(petId);

  return (
    <main className="min-h-screen bg-backTone px-4 py-8 text-dark-text sm:px-6 lg:px-8">
      <section className="mx-auto max-w-275">
        <div className="mb-8 space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent shadow-[0_0_0_1px_rgba(255,142,28,0.06)]">
            <span className="text-base leading-none">+</span>
            List a Pet
          </span>
          <div className="space-y-2">
            <h1 className="text-3xl font-black tracking-tight text-dark-text sm:text-3xl lg:text-4xl">
              Add a <span className="text-accent">Pet</span> Listing
            </h1>
            <p className="max-w-2xl text-sm text-light-text sm:text-base">
              Help a pet find their forever home by creating a detailed listing.
            </p>
          </div>
        </div>

        <PetForm petId={petId} pet={pet} />
      </section>
    </main>
  );
};

export default EditPetPage;
