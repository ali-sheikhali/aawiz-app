import UsersList from "@/components/users/UsersList";
import { productsFetchApi } from "@/lib/products";
import { Suspense } from "react";

export default async function DashBoardPage() {
  const resposne = await productsFetchApi();

  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <UsersList users={resposne} />
      </Suspense>
    </div>
  );
}
