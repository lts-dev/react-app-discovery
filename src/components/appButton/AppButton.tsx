import React, { forwardRef, memo } from "react";

const AppButton = React.forwardRef(({ ref }: any) => {
  console.log("re-render app button");
  console.log(ref);

  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default AppButton;
