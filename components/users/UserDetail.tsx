"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UserType } from "@/types/usersType";

export default function UserDetail({ user }: { user: UserType }) {
  if (!user) {
    return <div className="p-6 text-center">User not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Profile */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{user.name}</CardTitle>
          <p className="text-muted-foreground">@{user.username}</p>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
        </CardContent>
      </Card>

      {/* Address */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <p>
            <strong>Street:</strong> {user.address.street}
          </p>
          <p>
            <strong>Suite:</strong> {user.address.suite}
          </p>
          <p>
            <strong>City:</strong> {user.address.city}
          </p>
          <p>
            <strong>Zipcode:</strong> {user.address.zipcode}
          </p>
        </CardContent>
      </Card>

      {/* Company */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">Company</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <p>
            <strong>Name:</strong> {user.company.name}
          </p>
          <p>
            <strong>CatchPhrase:</strong> {user.company.catchPhrase}
          </p>
          <p>
            <strong>BS:</strong> {user.company.bs}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
