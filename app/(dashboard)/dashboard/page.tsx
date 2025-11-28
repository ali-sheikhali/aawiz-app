import UsersList from "@/components/users/UsersList";
import { usersFetchApi } from "@/lib/users";
import { Suspense } from "react";

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
