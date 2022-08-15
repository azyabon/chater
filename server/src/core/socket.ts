import socket, { Server as Socket } from "socket.io";
import http from "http";

export default (http: http.Server) => {
  const io = new Socket(http, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", function (socket: socket.Socket) {});

  return io;
};
