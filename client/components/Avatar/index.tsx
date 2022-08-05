import { FC } from "react";
import Image from "next/image";
import generateAvatarFromHash from "../../utils/generateAvatarFromHash";

type Props = {
  user: any;
  isMessage?: boolean;
};

const Avatar: FC<Props> = ({ user, isMessage }) => {
  if (user.avatar) {
    return (
      <Image
        src={user.avatar}
        alt={`Avatar ${user.fullName}`}
        width={isMessage ? 33 : 40}
        height={isMessage ? 33 : 40}
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
          width: isMessage ? "33px" : "40px",
          height: isMessage ? "33px" : "40px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: isMessage ? "20px" : "22px",
          fontWeight: isMessage ? 500 : 700,
          lineHeight: "40px",
        }}
      >
        {firstChar}
      </div>
    );
  }
};

export default Avatar;
