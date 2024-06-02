import React from "react";
import { useSession } from "next-auth/react";

function Profile() {
  const { data: session } = useSession();
  return <div>{session}</div>;
}

export default Profile;
