'use client'
import { useEffect, useState } from "react";
import { getSingleUser } from "@/lib/singleUser";
import { useParams } from "next/navigation";
import { UserType } from "@/types/usersType";

export default function UserDetail() {
  const params = useParams();
  const id = Number(params?.id);
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
  const fetchUser = async () => {
    if (id) {
      const user = await getSingleUser(id);
      setUser(user);
    }
  };

  fetchUser();
}, [id]);

  console.log("user:", user);

  if (!user) return <div>user not found</div>;

  return (
    <div>
        {user.name}
    </div>
  );
}
