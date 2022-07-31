import { FC } from "react";
import Image from "next/image";
import generateAvatarFromHash from "../../utils/generateAvatarFromHash";

type Props = {
  user: any;
};

const Avatar: FC<Props> = ({ user }) => {
  if (user.avatar) {
    return (
      <Image
        src={user.avatar}
        alt={`Avatar ${user.fullName}`}
        width={40}
        height={40}
        style={{ borderRadius: "50%" }}
      />
    );
  } else {
    const { color, colorLighten }: { color: string; colorLighten: string } =
      generateAvatarFromHash(user._id);
    const firstChar = user.fullName.trim()[0].toUpperCase();
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 700,
          lineHeight: "40px",
        }}
      >
        {firstChar}
      </div>
    );
  }
};

export default Avatar;
