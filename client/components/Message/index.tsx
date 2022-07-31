import * as S from "./Message.styled";
import Image from "next/image";
import { FC, useRef, useState } from "react";
import Time from "../Time";
import MessageStatus from "../MessageStatus";
import Wave from "../../assets/svg/Wave/Wave";
import convertAudioTime from "../../utils/convert-audio-time";

type Props = {
  avatar: string;
  text: string | null;
  date: number | null;
  user?: any;
  isMe: boolean;
  isRead: boolean;
  attachments?: Array<any>;
  isTyping: boolean;
  audio?: string;
};

const Message: FC<Props> = ({
  avatar,
  text,
  date,
  user,
  isMe,
  isRead,
  audio,
  attachments,
  isTyping,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioRef: any = useRef(null);

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
    <S.Message isMe={isMe}>
      <S.MessageAvatar
        isMe={isMe}
        image={attachments?.length === 1 && text === null}
      >
        <Image
          src={avatar}
          alt={`Avatar`}
          width={33}
          height={33}
          style={{ borderRadius: "50px" }}
        />
      </S.MessageAvatar>
      <S.MessageContent isMe={isMe}>
        <div>
          {(audio || text || isTyping) && (
            <S.MessageBubble isMe={isMe} isAudio={!!audio}>
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
          {date ? (
            <Time date={date} isMe={isMe} />
          ) : (
            <p style={{ height: 12 }}></p>
          )}
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
