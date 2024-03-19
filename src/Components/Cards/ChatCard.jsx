import { Card } from "@mui/material";
import React from "react";

export default function ChatCard({ content }) {
  return (
    <div>
      <Card
        className="md:w-[30vw] md:h-[20vh] md:p-[1%]"
        style={{ background: "pink" }}
      >
        {content}
      </Card>
    </div>
  );
}
