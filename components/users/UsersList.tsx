import { UserType } from "@/types/usersType";
import personIcon from "../../public/images.png";
import Image from "next/image";
import Button from "../base/Button";
import Link from "next/link";
interface UsersListProps {
  users: UserType[];
}

export default function UsersList({ users }: UsersListProps) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users?.map((user) => (
          <div
            className="border border-gray-200 rounded-md flex flex-col gap-2  p-2"
            key={user.id}
          >
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 rounded-full p-1">
                <Image
                  className="rounded-full object-cover"
                  src={personIcon}
                  alt={user.name}
                  width={36}
                  height={36}
                />
              </div>
              <p>{user.name}</p>
            </div>
            <p className="ml-13">{user.email}</p>
            <Link className="w-10/12 mx-auto" href={`/users/${user.id}`}>
              <Button name="More details" type="button" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
