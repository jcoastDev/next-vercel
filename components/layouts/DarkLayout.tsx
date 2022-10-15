import { FC, ReactElement } from "react";

export const DarkLayout = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
