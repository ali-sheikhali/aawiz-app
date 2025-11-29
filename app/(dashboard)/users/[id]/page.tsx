"use client";
import { useEffect, useState } from "react";
import { getSingleUser } from "@/lib/singleUser";
import { useParams } from "next/navigation";
import { UserType } from "@/types/usersType";
import toast from "react-hot-toast";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function UserDetail() {
  const params = useParams();
  const id = Number(params?.id);
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getSingleUser(id);
        setUser(user);
      } catch {
        toast.error("check your internet");
      }
    };

    if (id) fetchUser();
  }, [id]);

  if (!user) return <div className="p-6 text-center">User not found</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Profile */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {user.name}
          </CardTitle>
          <p className="text-muted-foreground">@{user.username}</p>
        </CardHeader>
        <CardContent className="space-y-2">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </CardContent>
      </Card>

      {/* Address */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <p><strong>Street:</strong> {user.address.street}</p>
          <p><strong>Suite:</strong> {user.address.suite}</p>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
        </CardContent>
      </Card>

      {/* Company */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">Company</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <p><strong>Name:</strong> {user.company.name}</p>
          <p><strong>CatchPhrase:</strong> {user.company.catchPhrase}</p>
          <p><strong>BS:</strong> {user.company.bs}</p>
        </CardContent>
      </Card>
    </div>
  );
}
