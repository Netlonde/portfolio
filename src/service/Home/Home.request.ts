import axios from "axios";
import { IDtoHomeOutput } from "./Home.dto";

export const getGithubDataByName = async (
  name: string
): Promise<IDtoHomeOutput> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_GITHUB_URL}/users/${name}`
  );

  const UserData = {
    avatar_url: data.avatar_url,
    name: data.name,
    email: data.email,
    bio: data.bio,
  };

  return UserData;
};
