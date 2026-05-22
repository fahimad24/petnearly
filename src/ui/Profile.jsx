import { signOut } from "@/app/lib/auth-client";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export function ProfileAvatar({ session }) {
  const initials = session?.name
    ?.split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("");

  const handleLogout = async () => {
    await signOut();
    redirect("/login");
  };

  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image
            alt="Junior Garcia"
            src={
              session?.image ||
              "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
            }
          />
          <Avatar.Fallback delayMs={600}>{initials}</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt="Jane"
                src={
                  session?.image ||
                  "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                }
              />
              <Avatar.Fallback delayMs={600}>{initials}</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">
                {session?.name || "Jane Doe"}
              </p>
              <p className="text-xs leading-none text-muted">
                {session?.email || "jane@example.com"}
              </p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="dashboard" className="py-0" textValue="Dashboard">
            <Link href="/dashboard/my-requests" className="w-full h-full py-2">
              <Label>Dashboard</Label>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item id="profile" className="py-0" textValue="Profile">
            <Link href="/profile" className="w-full h-full py-2">
              <Label>Profile</Label>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
            id="logout"
            textValue="Logout"
            variant="danger"
            onClick={handleLogout}
          >
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Log Out</Label>
              <ArrowRightFromSquare className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
