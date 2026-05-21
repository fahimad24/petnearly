import Icon from "@/app/components/Icon";
import { DetailRow } from "@/ui/DetailRow";
import { cn, WarningIcon } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { LoadingSpinner } from "@/ui/LoadingSpinner";
import { ModalButton } from "@/app/(main)/components/ModalButton";
import { getPetById, getSession } from "@/app/lib/action";

const PetContent = async ({ params }) => {
  const { userId } = await getSession();
  let pet = null;
  const { pet: petId } = (await params) || {};

  try {
    pet = await getPetById(petId);
  } catch (error) {
    pet = null;
  }

  console.log("Fetched pet details:", pet.userId, userId);
  const petStatus =
    pet && typeof pet.status === "string" ? pet.status : "Available";

  return (
    <main className="min-h-screen bg-backTone py-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-5 -right-5 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        {!pet && (
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <h1 className="text-2xl font-semibold text-dark-text">
              Pet not found
            </h1>
            <p className="mt-2 text-sm text-light-text">
              Please check the pet id and try again.
            </p>
          </div>
        )}

        {pet && (
          <>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <Link
                  href="/all-pets"
                  className="text-xs font-semibold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors duration-200"
                >
                  All pets
                </Link>
                <h1 className="mt-2 text-3xl font-semibold text-dark-text">
                  {pet.petName}
                </h1>
                <p className="mt-1 text-sm text-light-text">
                  {pet.breed} • {pet.location}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-white shadow-sm",
                    petStatus === "Available"
                      ? "bg-green-200/40 text-green-500"
                      : petStatus === "Adopted"
                        ? "bg-red-200/40 text-red-500"
                        : "bg-yellow-200/40 text-yellow-700/90",
                  )}
                >
                  {petStatus}
                </span>
                <span
                  className={cn(
                    "inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-sm",
                  )}
                >
                  {pet.adoptionFee} adoption fee
                </span>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-[360px_1fr]">
              <div className="rounded-2xl border border-accent bg-white p-3 shadow-sm ">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src={pet.imageUrl}
                    alt={pet.petName}
                    width={400}
                    height={300}
                    loading="eager"
                    className="object-cover bg-center  hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 space-y-2 text-sm text-light-text">
                  <p className="font-medium text-dark-text">{pet?.breed}</p>
                  <p>{pet?.description}</p>
                </div>
              </div>

              <section className="rounded-2xl border border-accent bg-neutral p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <DetailRow label="Species" value={pet?.species} />
                  <DetailRow label="Age" value={pet?.age} />
                  <DetailRow label="Gender" value={pet?.gender} />
                  <DetailRow label="Location" value={pet?.location} />
                  <DetailRow
                    label="Adoption fee"
                    value={pet?.adoptionFee}
                    className="font-bold text-accent"
                  />
                  <DetailRow label="Pet ID" value={pet?._id} />
                </div>
                <div className="mt-6 border-t border-gray-100 pt-6">
                  <h2 className="text-lg font-semibold text-dark-text">
                    Health & Vaccination
                  </h2>
                  <p className="mt-2 text-sm text-light-text">
                    {pet?.healthStatus}
                  </p>
                  <p className="mt-1 text-sm text-light-text">
                    {pet?.vaccinationStatus}
                  </p>
                </div>
                <div className="mt-6 border-t border-gray-100 pt-6">
                  <h2 className="text-lg font-semibold text-dark-text">
                    About
                  </h2>
                  <p className="mt-2 text-sm text-light-text">
                    {pet?.description}
                  </p>
                </div>
                <div className="mt-6  space-y-3">
                  {pet?.userId == userId ? (
                    <div className="flex flex-col items-center gap-2 rounded-lg bg-red-100/70 p-8 border border-red-300">
                      <WarningIcon
                        width={60}
                        height={60}
                        className="inline-block mr-1 text-amber-500"
                      />
                      <h3 className="text-lg font-black text-red-600">
                        This is your listing.
                      </h3>
                      <p className="text-sm"> You cannot adopt your own pet.</p>
                    </div>
                  ) : (
                    <ModalButton
                      btnProps={{
                        isDisabled: pet?.status !== "Available",
                        className: cn(
                          " text-dark-text font-bold w-full  transition-colors duration-200 flex items-center justify-center gap-2 rounded-none h-full px-6 py-2",
                          pet?.status == "Available"
                            ? "bg-secondary hover:bg-secondary/80"
                            : "bg-red-500 cursor-not-allowed",
                        ),
                      }}
                      btntext={
                        pet?.status === "Available" ? "Adopt Me" : "Adopted"
                      }
                      icon={
                        <Icon
                          src="/pawprint.png"
                          alt="Adopt"
                          width={16}
                          height={16}
                        />
                      }
                      pet={pet}
                    />
                  )}
                  <p className="text-xs text-light-text">
                    Location verified in {pet?.location}
                  </p>
                </div>
              </section>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

const PetDetailsPage = async ({ params }) => {
  return (
    <Suspense
      fallback={
        <div className="h-svh flex items-center justify-center">
          <LoadingSpinner />
        </div>
      }
    >
      <PetContent params={params} />
    </Suspense>
  );
};

export default PetDetailsPage;
