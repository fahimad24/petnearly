"use client";

import { Button, Checkbox, Chip, Table, cn, toast } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  deleteAdoptionRequest,
  updatePetStatus,
} from "@/app/lib/action-client";
import { useRouter } from "next/navigation";

const statusColorMap = {
  Approved: "success",
  Rejected: "danger",
  Pending: "warning",
};

function SortableColumnHeader({ children, sortDirection }) {
  return (
    <span className="flex items-center justify-between">
      {children}
      {!!sortDirection && (
        <Icon
          icon="gravity-ui:chevron-up"
          className={cn(
            "size-3 transform transition-transform duration-100 ease-out",
            sortDirection === "descending" ? "rotate-180" : "",
          )}
        />
      )}
    </span>
  );
}

export function RequestTable({ request }) {
  const router = useRouter();
  const [selectedKeys, setSelectedKeys] = useState(new Set());
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "requestDate",
    direction: "ascending",
  });

  const sortedrequest = useMemo(() => {
    return [...request].sort((a, b) => {
      const col = sortDescriptor.column;
      const first = String(a[col]);
      const second = String(b[col]);
      let cmp = first.localeCompare(second);

      if (sortDescriptor.direction === "descending") {
        cmp *= -1;
      }

      return cmp;
    });
  }, [request, sortDescriptor]);

  const deleteRequest = async (id, petId) => {
    // Implement delete functionality here
    const res = await deleteAdoptionRequest(id);
    const ress = await updatePetStatus(petId, "Available");
    if (res.ok && ress.ok) {
      toast.success("Request deleted successfully!");
      router.refresh();
    } else {
      toast.danger("Failed to delete request. Please try again.");
    }
  };

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content
          aria-label="Table with custom cells"
          className="min-w-200"
          selectedKeys={selectedKeys}
          selectionMode="multiple"
          sortDescriptor={sortDescriptor}
          onSelectionChange={setSelectedKeys}
          onSortChange={setSortDescriptor}
        >
          <Table.Header>
            <Table.Column className="pr-0">
              <Checkbox aria-label="Select all" slot="selection">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
              </Checkbox>
            </Table.Column>
            <Table.Column
              allowsSorting
              isRowHeader
              className="after:hidden"
              id="id"
            >
              {({ sortDirection }) => (
                <SortableColumnHeader sortDirection={sortDirection}>
                  Pet ID
                </SortableColumnHeader>
              )}
            </Table.Column>
            <Table.Column allowsSorting id="name">
              {({ sortDirection }) => (
                <SortableColumnHeader sortDirection={sortDirection}>
                  Pet Name
                </SortableColumnHeader>
              )}
            </Table.Column>
            <Table.Column allowsSorting id="requestDate">
              {({ sortDirection }) => (
                <SortableColumnHeader sortDirection={sortDirection}>
                  Request Date
                </SortableColumnHeader>
              )}
            </Table.Column>
            <Table.Column allowsSorting id="pickUpDate">
              {({ sortDirection }) => (
                <SortableColumnHeader sortDirection={sortDirection}>
                  Pickup Date
                </SortableColumnHeader>
              )}
            </Table.Column>
            <Table.Column allowsSorting id="statReq">
              {({ sortDirection }) => (
                <SortableColumnHeader sortDirection={sortDirection}>
                  Status
                </SortableColumnHeader>
              )}
            </Table.Column>
            <Table.Column className="text-end">Actions</Table.Column>
          </Table.Header>
          <Table.Body>
            {sortedrequest.map((user) => (
              <Table.Row key={user._id} id={user._id}>
                <Table.Cell className="pr-0">
                  <Checkbox
                    aria-label={`Select ${user.name}`}
                    slot="selection"
                    variant="secondary"
                  >
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                  </Checkbox>
                </Table.Cell>
                <Table.Cell className="font-medium">
                  <div className="flex items-center gap-2">
                    #{user._id.toString()}{" "}
                    <Button isIconOnly size="sm" variant="ghost">
                      <Icon
                        className="size-4 text-muted"
                        icon="gravity-ui:copy"
                      />
                    </Button>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <span className="text-xs text-black">{user.name}</span>
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted">
                        {user.requestDate}
                      </span>
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell className="min-w-52">{user.pickUpDate}</Table.Cell>
                <Table.Cell className="min-w-25">
                  <Chip
                    color={statusColorMap[user.statReq] || "default"}
                    size="sm"
                    variant="soft"
                  >
                    {user.statReq}
                  </Chip>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      className="w-8 h-8 rounded-2xl bg-gray-300/55 flex items-center justify-center"
                      href={`/all-pets/${user.petId}`}
                    >
                      <Icon className="size-4" icon="gravity-ui:eye" />
                    </Link>

                    <Button
                      isIconOnly
                      size="sm"
                      variant="danger-soft"
                      onClick={() => deleteRequest(user._id, user.petId)}
                    >
                      <Icon className="size-4" icon="gravity-ui:trash-bin" />
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
