import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
import { violet } from "@radix-ui/colors";

function Busca() {
  return (
    <div className="busca">
      <form>
        <MagnifyingGlassIcon
          style={{
            position: "relative",
            left: "10px",
            top: "29px",
            color: "gray",
          }}
        />
        <Input id="filtro" type="text" placeholder="Buscar por produtos" />
      </form>
    </div>
  );
}

const Input = styled("input", {
  all: "unset",
  width: "120%",
  flex: "1",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 30px",
  fontSize: 15,
  color: violet.violet11,
  backgroundColor: "#ffff",
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,

  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

export default Busca;
