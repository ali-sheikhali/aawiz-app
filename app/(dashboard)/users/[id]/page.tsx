import { Metadata } from "next";
import { getSingleUser } from "@/lib/singleUser";
import { UserType } from "@/types/usersType";
import UserDetail from "@/components/users/UserDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

// write generate metadata 
export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { id } = await props.params; 
  const user: UserType = await getSingleUser(Number(id));

  if (!user) {
    return {
      title: "User Not Found",
      description: "The requested user could not be found.",
    };
  }

  return {
    title: `${user.name} | User Details`,
    description: `Profile and information about ${user.name}.`,
    openGraph: {
      title: `${user.name} - User Details`,
      description: `Contact: ${user.email}, ${user.phone}`,
    },
  };
}

export default async function UserDetailPage(props: PageProps) {
  const { id } = await props.params; 

  const user: UserType = await getSingleUser(Number(id));

  return <UserDetail user={user} />;
}
