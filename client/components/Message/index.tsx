import * as S from "./Message.styled";
import Image from "next/image";
import { FC, useRef, useState } from "react";
import Time from "../Time";
import MessageStatus from "../MessageStatus";
import Wave from "../../assets/svg/Wave/Wave";
import convertAudioTime from "../../utils/convert-audio-time";
import Avatar from "../Avatar";
import { IDialog, IUser } from "../../types/types";

type Props = {
  text: string | null;
  date: Date;
  user: IUser;
  isMe: boolean;
  isRead: boolean;
  attachments?: Array<any>;
  isTyping: boolean;
  audio?: string;
  dialog: IDialog;
  removeMessage: any;
};

const Message: FC<Props> = ({
  text,
  date,
  user,
  isRead,
  audio,
  attachments,
  isTyping,
  dialog,
  isMe,
  removeMessage,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioRef: any = useRef(null);
  const [option, setOption] = useState(false);
  const [menu, setMenu] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = "0.5";
        audioRef.current.play();
      }
    }
  };

  return (
    <S.Message
      isMe={isMe}
      onMouseEnter={() => setOption(true)}
      onMouseLeave={() => {
        setMenu(false);
        setOption(false);
      }}
    >
      <S.MessageAvatar
        isMe={isMe}
        image={attachments?.length === 1 && text === null}
      >
        <Avatar user={user} isMessage={true} />
      </S.MessageAvatar>
      <S.MessageContent isMe={isMe}>
        <div>
          {(audio || text || isTyping) && (
            <S.MessageBubble isMe={isMe} isAudio={!!audio}>
              <S.MessageMenu show={menu}>
                <span onClick={removeMessage}>Remove</span>
                <span>Edit</span>
                <span>Reply</span>
                <span>Forward</span>
              </S.MessageMenu>
              {isMe && option && (
                <div
                  onMouseEnter={() => setMenu(true)}
                  style={{
                    position: "absolute",
                    top: 3,
                    left: -15,
                    cursor: "pointer",
                    transform: "rotate(90deg)",
                  }}
                >
                  <Image src={"/option.png"} width={15} height={15} />
                </div>
              )}
              {text && <S.MessageText isMe={isMe}>{text}</S.MessageText>}
              {isTyping ? (
                <S.MessageTyping>
                  <S.MessageDot />
                  <S.MessageDot />
                  <S.MessageDot />
                </S.MessageTyping>
              ) : null}
              {audio && (
                <S.MessageAudio>
                  <audio
                    onTimeUpdate={() => {
                      const duration =
                        (audioRef.current && audioRef.current.duration) || 0;
                      setCurrentTime(audioRef.current.currentTime);
                      setProgress(
                        (audioRef.current.currentTime / duration) * 100
                      );
                    }}
                    controls={true}
                    onPause={() => setIsPlaying(false)}
                    onPlaying={() => setIsPlaying(true)}
                    src={audio}
                    preload={"auto"}
                    ref={audioRef}
                    onEnded={() => {
                      setIsPlaying(false);
                      setProgress(0);
                      setCurrentTime(0);
                    }}
                  />
                  <S.MessageAudioProgress style={{ width: progress + "%" }} />
                  <S.MessageAudioContent>
                    <S.MessageAudioContentButton>
                      <button onClick={togglePlay}>
                        {isPlaying ? (
                          <Image
                            src="/pause.png"
                            alt="pause"
                            width={15}
                            height={15}
                          />
                        ) : (
                          <Image
                            src="/play.png"
                            alt="pause"
                            width={12}
                            height={12}
                          />
                        )}
                      </button>
                    </S.MessageAudioContentButton>
                    <S.MessageAudioContentWave>
                      <Wave />
                    </S.MessageAudioContentWave>
                    <S.MessageAudioContentDuration>
                      {convertAudioTime(currentTime)}
                    </S.MessageAudioContentDuration>
                  </S.MessageAudioContent>
                </S.MessageAudio>
              )}
            </S.MessageBubble>
          )}
          <Time date={Date.parse(date.toString())} isMe={isMe} />
        </div>
        <MessageStatus
          style={{ margin: "0 10px 25px 10px" }}
          isMe={isMe}
          isRead={isRead}
        />
        <S.MessageAttachments>
          {attachments
            ? attachments.map((item: any, index: number) => {
                return (
                  <S.MessageAttachmentsItem
                    image={attachments?.length === 1 && text === null}
                  >
                    <Image
                      src={item.url}
                      alt={item.filename}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="contain"
                      style={{ borderRadius: "8px" }}
                    />
                  </S.MessageAttachmentsItem>
                );
              })
            : null}
        </S.MessageAttachments>
      </S.MessageContent>
    </S.Message>
  );
};

export default Message;
