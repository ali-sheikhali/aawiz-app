import UsersList from "@/components/users/UsersList";
import { usersFetchApi } from "@/lib/users";
import { Metadata } from "next";
import { Suspense } from "react";


// write metadata for user list page
export const metadata: Metadata = {
  title: "Aawiz | User List",
  description: "Browse all registered users on this page.",
  openGraph: {
    title: "Aawiz User List",
    description: "View the complete list of users",
    type: "website",
  },
};

export default async function DashBoardPage() {
  const resposne = await usersFetchApi();

  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <UsersList users={resposne} />
      </Suspense>
    </div>
  );
}
